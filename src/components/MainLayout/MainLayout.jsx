import {} from "react";
import cls from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={cls.mainLayout}>
      <Header />
      <div className={cls.mainWrapper}>
        <main className={cls.main}>main</main>
        <Outlet />
        <footer className={cls.footer}>
          React Question Card App | {currentYear} <br />
          by Ann Dudek
        </footer>
      </div>
    </div>
  );
};
