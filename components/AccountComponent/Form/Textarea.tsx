interface TextareaProps {
  textareaName: string;
  value: string;
  onChange?: (newValue: string) => void;
  placeholder?: string;
}

const Textarea = ({
  textareaName,
  value,
  onChange,
  placeholder,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-y-1 text-md">
      <label>{textareaName}</label>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="rounded-md p-2 text-black"
        required
      />
    </div>
  );
};

export default Textarea;
