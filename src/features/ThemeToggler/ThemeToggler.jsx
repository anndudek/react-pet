import { THEME_STORAGE } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import cls from "./ThemeToggler.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={cls.switch}>
      <label className={cls.label}>
        <input type="checkbox" className={cls.checkbox} onChange={toggleTheme} checked={theme === "light"} />
        <span className={cls.slider}></span>
      </label>
    </div>
  );
};
