import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyle =
    "px-5 py-2.5 rounded-xl font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<"primary" | "secondary", string> = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-sm disabled:hover:bg-primary dark:bg-primary/90 dark:hover:bg-primary-dark",
    secondary:
      "bg-secondary hover:bg-secondary-dark text-neutral-dark shadow disabled:hover:bg-secondary dark:bg-neutral-200 dark:text-neutral-800",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;