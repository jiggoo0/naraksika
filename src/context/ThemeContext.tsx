// src/context/ThemeProvider.tsx
import React, { ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./themeConstants";
import { applyThemeClass, toggleThemeValue } from "./themeHelpers";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Update <html> class on theme change
  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => toggleThemeValue(prev));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
