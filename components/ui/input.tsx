import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isDate?: boolean; // Prop to specify if the input is a date
  isNumber?: boolean; // Prop to specify if the input is numeric
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isDate, isNumber, ...props }, ref) => {
    // Function to format the date input
    const formatDate = (value: string) => {
      const cleaned = value.replace(/\D+/g, ""); // Remove non-numeric characters

      // Build the DD/MM/YYYY format
      const day = cleaned.slice(0, 2);
      const month = cleaned.slice(2, 4);
      const year = cleaned.slice(4, 8);

      // Concatenate the parts with separators
      let formattedValue = day;
      if (day.length === 2) formattedValue += '/';
      if (month.length > 0) formattedValue += month;
      if (month.length === 2) formattedValue += '/';
      if (year.length > 0) formattedValue += year;

      return formattedValue;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      // Limit the total input length to 30 characters
      if (value.length > 30) {
        value = value.slice(0, 30);
      }

      if (isDate) {
        value = formatDate(value);

        // Limit the length after formatting to 30 characters
        if (value.length > 30) {
          value = value.slice(0, 30);
        }
      }

      // Handle numeric inputs to allow only one period or comma
      if (isNumber) {
        const cleaned = value.replace(/[^0-9.,]/g, "");
        const parts = cleaned.split(/[,\.]/);

        if (parts.length > 2) {
          // If more than one period or comma, keep only the first one
          value = `${parts[0]}.${parts.slice(1).join('')}`;
        } else {
          value = cleaned;
        }
      }

      e.target.value = value;

      if (props.onChange) {
        props.onChange(e);
      }
    };

    // Function to prevent non-numeric character input
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isDate) {
        // Allow numbers, slashes, backspace, and tab for date input
        if (!/[0-9\/]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
          e.preventDefault();
        }
      } else if (isNumber) {
        // Allow numbers, periods, commas, backspace, and tab
        if (!/[0-9.,]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
          e.preventDefault();
        }
      } else {
        // For other input types, prevent invalid characters except space
        if (!/[0-9a-zA-Z\s#!?]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
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
