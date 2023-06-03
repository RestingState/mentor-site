import { DetailedHTMLProps } from 'react';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  text,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-8 py-3 text-xs font-medium ${
        variant === 'primary'
          ? 'bg-bright-red text-very-light-gray shadow-lg shadow-bright-red hover:opacity-75'
          : 'bg-very-light-gray text-bright-red hover:bg-very-light-gray hover:text-opacity-60 hover:opacity-100'
      } ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
