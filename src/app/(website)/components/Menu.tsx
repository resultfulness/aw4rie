import React from "react";
import { MdClose } from "react-icons/md";
import LinkButton from "./LinkButton";
import styles from "./Menu.module.css";
import MenuButton from "./MenuButton";

interface MenuProps {
  show: boolean;
  showOverlay: boolean;
  onCloseClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ show, showOverlay, onCloseClick }) => {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={onCloseClick}
        style={{
          opacity: `${show ? ".5" : "0"}`,
          display: `${showOverlay ? "block" : "none"}`,
        }}
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
