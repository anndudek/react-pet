import { createContext, useLayoutEffect, useState, useEffect } from "react";
import { THEME_STORAGE } from "../constants";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE) || "light";
  const [theme, setTheme] = useState(savedTheme);

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.body.dataset.theme = newTheme;
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
