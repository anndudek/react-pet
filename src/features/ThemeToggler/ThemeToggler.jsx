import { THEME_STORAGE } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import cls from "./ThemeToggler.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onThemeChangeHandler = (e) => {
    console.log(e.target.checked);
    const updatedTheme = e.target.checked !== false ? "light" : "dark";
    console.log(updatedTheme);
    setTheme(updatedTheme);

    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };

  return (
    <div className={cls.switch}>
      <label className={cls.label}>
        <input type="checkbox" className={cls.checkbox} onChange={onThemeChangeHandler} checked={theme === "light"} />
        <span className={cls.slider}></span>
      </label>
    </div>
  );
};
