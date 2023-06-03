import { DetailedHTMLProps } from 'react';

type ButtonProps = {
  text: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ text, className, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-bright-red px-8 py-3 text-xs font-medium text-very-light-gray shadow-lg shadow-bright-red hover:opacity-75 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
