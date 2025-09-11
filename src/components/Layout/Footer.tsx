// src/components/Layout/Footer.tsx
"use client";

import React, { memo } from "react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
        <p className="text-sm text-center sm:text-left">
          &copy; {year} Dev Baan Baan. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);