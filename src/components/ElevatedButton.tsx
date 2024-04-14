import { ElevatedButtonProps } from "../types/text-fields/ElevatedButtonProps";

export default function ElevatedButton(props: ElevatedButtonProps) {
  const { id, key, disabled, text, onClick } = props;

  return (
    <button
      id={id}
      key={key}
      onClick={onClick}
      disabled={disabled}
      className="w-24 h-14 bg-primary rounded-2xl text-white hover:opacity-90 transition-color relative overflow-hidden px-4 py-2 shadow-md group disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:opacity-100"
    >
      {text}
      <span
        className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] inset-0 bg-white opacity-25 h-full aspect-square rounded-full scale-0 transform origin-center transition-transform duration-[150ms] group-active:scale-[200%] ${disabled && "hidden"}`}
      />
    </button>
  );
}
