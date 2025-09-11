// src/components/Layout/Header.tsx
"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-neutral-dark shadow-md"
          : "bg-white/90 dark:bg-neutral-dark/90 backdrop-blur"
      }`}
      role="banner"
    >
      <Navbar />
    </header>
  );
};

export default memo(Header);