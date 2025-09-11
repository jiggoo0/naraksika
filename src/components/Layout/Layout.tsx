// src/components/Layout/Layout.tsx
"use client";

import React, { memo, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  mainId?: string;
  mainLabel?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = "",
  mainId,
  mainLabel,
}) => {
  return (
    <div
      className={`flex flex-col min-h-screen bg-white dark:bg-neutral-dark text-gray-900 dark:text-neutral-light ${className}`}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        id={mainId}
        aria-label={mainLabel}
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default memo(Layout);