import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = {} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-56 rounded-full px-6 py-3 text-xs ${className}`}
    />
  );
}
