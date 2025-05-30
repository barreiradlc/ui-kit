import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  const styles: Record<Variant, string> = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-300 text-black',
    danger: 'bg-red-600 text-white',
  };

  return (
    <button className={`px-4 py-2 rounded ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};