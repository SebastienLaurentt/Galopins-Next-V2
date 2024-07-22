import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isDate?: boolean; // Prop pour spécifier si l'input est une date
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isDate, ...props }, ref) => {
    // Fonction pour formater l'entrée de la date
    const formatDate = (value: string) => {
      const cleaned = value.replace(/\D+/g, ""); // Supprimer les caractères non numériques

      // Construire le format DD/MM/YYYY
      const day = cleaned.slice(0, 2);
      const month = cleaned.slice(2, 4);
      const year = cleaned.slice(4, 8);

      // Concaténer les parties avec les séparateurs
      let formattedValue = day;
      if (day.length === 2) formattedValue += '/';
      if (month.length > 0) formattedValue += month;
      if (month.length === 2) formattedValue += '/';
      if (year.length > 0) formattedValue += year;

      return formattedValue;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      // Limiter la longueur de l'entrée totale à 30 caractères
      if (value.length > 30) {
        value = value.slice(0, 30);
      }

      if (isDate) {
        value = formatDate(value);

        // Limiter la longueur après formatage à 30 caractères
        if (value.length > 30) {
          value = value.slice(0, 30);
        }
      }

      e.target.value = value;

      if (props.onChange) {
        props.onChange(e);
      }
    };

    // Fonction pour empêcher l'entrée de caractères non numériques
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isDate) {
        if (!/[0-9\/]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
          e.preventDefault();
        }
      } else {
        // Pour les autres types d'input, empêcher les caractères non valides
        if (!/[0-9a-zA-Z]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
          e.preventDefault();
        }
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-white text-foreground px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
