import React from "react";
import styles from "./MenuButton.module.css";

interface MenuButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.MenuButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default MenuButton;
