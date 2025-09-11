// src/context/ThemeProvider.tsx
import React, { useState, useEffect, ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme, LIGHT } from "./themeConstants";
import { applyThemeClass, toggleThemeValue } from "./themeHelpers";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(LIGHT);

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => toggleThemeValue(prev));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
