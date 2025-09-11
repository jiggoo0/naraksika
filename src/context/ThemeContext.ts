// src/context/ThemeContext.ts
import { createContext, useContext } from "react";
import { Theme } from "./themeConstants";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Internal context only
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Hook to use ThemeContext
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
