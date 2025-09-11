// src/components/common/Icon.tsx
"use client";

import React from "react";

export type IconName =
  | "user"
  | "arrowRight"
  | "checkCircle"
  | "menu"
  | "close"
  | "phone"
  | "email"
  | "mapPin";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  label?: string; // สำหรับ accessibility
}

const Icon: React.FC<IconProps> = ({ name, className = "", label, ...props }) => {
  const commonProps = {
    className,
    fill: "currentColor",
    "aria-label": label ?? name,
    role: "img" as const,
    ...props,
  };

  switch (name) {
    case "user":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z" />
        </svg>
      );
    case "checkCircle":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path
            d="M18 6L6 18M6 6l12 12"
            strokeWidth={2}
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.2z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
        </svg>
      );
    case "mapPin":
      return (
        <svg viewBox="0 0 24 24" {...commonProps}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;