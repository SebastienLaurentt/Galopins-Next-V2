interface ValidationButtonProps {
  buttonName: string;
}

function ValidationButton({ buttonName }: ValidationButtonProps) {
  return (
    <button
      type="submit"
      className=" mt-4 rounded-full bg-green-800 p-4 md:hover:bg-green-600"
    >
      {buttonName}
    </button>
  );
}

export default ValidationButton;
