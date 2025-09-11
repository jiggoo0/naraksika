// src/components/common/Button.tsx
"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  disabled = false,
  type = "button",
  className,
  ...props
}) => {
  const baseStyle = clsx(
    "px-5 py-2.5 rounded-xl font-semibold transition-colors duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const variantStyles: Record<"primary" | "secondary", string> = {
    primary: clsx(
      "bg-primary hover:bg-primary-dark text-white shadow-sm",
      "disabled:hover:bg-primary dark:bg-primary/90 dark:hover:bg-primary-dark"
    ),
    secondary: clsx(
      "bg-secondary hover:bg-secondary-dark text-neutral-dark shadow",
      "disabled:hover:bg-secondary dark:bg-neutral-200 dark:text-neutral-800"
    ),
  };

  return (
    <button
      type={type}
      className={clsx(baseStyle, variantStyles[variant], className)}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;