import React from "react";
import { MdClose } from "react-icons/md";
import LinkButton from "./LinkButton";
import MenuButton from "./MenuButton";
import styles from "./Menu.module.css";

interface MenuProps {
  show: boolean;
  onCloseClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ show, onCloseClick }) => {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={onCloseClick}
        style={{ opacity: `${show ? ".5" : "0"}` }}
      ></div>
      <div
        className={styles.Menu}
        style={{
          transform: `translateX(${show ? "0" : "200%"})`,
        }}
      >
        <MenuButton onClick={onCloseClick}>
          <MdClose size={36}></MdClose>
        </MenuButton>
        <LinkButton fullWidth href='/app/login'>
          Login
        </LinkButton>
        <LinkButton fullWidth href='/app/register'>
          Register
        </LinkButton>
      </div>
    </>
  );
};

export default Menu;
