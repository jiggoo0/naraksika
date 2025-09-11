// src/context/themeHelpers.ts
import { Theme, LIGHT, DARK } from "./themeConstants";

export const applyThemeClass = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === DARK) root.classList.add("dark");
  else root.classList.remove("dark");
};

export const toggleThemeValue = (theme: Theme): Theme =>
  theme === LIGHT ? DARK : LIGHT;
