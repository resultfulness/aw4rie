import React from "react";
import { MdClose } from "react-icons/md";
import LinkButton from "./LinkButton";
import MenuButton from "./MenuButton";
import styles from "./Menu.module.css";

interface MenuProps {
  show: boolean;
  onCloseButtonClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ show, onCloseButtonClick }) => {
  return (
    <div
      className={styles.Menu}
      style={{
        transform: `translateY(${show ? "0" : "-200%"})`,
      }}
    >
      <LinkButton href='/app/login'>Login</LinkButton>
      <LinkButton href='/app/register'>Register</LinkButton>
      <MenuButton onClick={onCloseButtonClick}>
        <MdClose size={36}></MdClose>
      </MenuButton>
    </div>
  );
};

export default Menu;
