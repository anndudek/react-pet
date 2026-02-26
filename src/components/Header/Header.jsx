import {} from "react";
import { Button } from "../Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={reactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>
      <div className={cls.headerButtons}>
        <Button isActive={true}>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};
