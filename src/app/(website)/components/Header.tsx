"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  function changeMenuState(show: boolean) {
    const overlayTimeout = show ? 0 : 400;

    setTimeout(() => {
      setIsOverlayShown(show);
    }, overlayTimeout);

    setTimeout(() => {
      setIsMenuShown(show);
    }, 8);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Menu
          show={isMenuShown}
          showOverlay={isOverlayShown}
          onCloseClick={() => changeMenuState(false)}
        />
        <div className={styles.logo}>
          <a href='/'>AW4RIE</a>
        </div>
        <div className={styles.links}>
          <LinkButton href='/app/login'>Login</LinkButton>
          <LinkButton href='/app/register'>Register</LinkButton>
        </div>
        <MenuButton onClick={() => changeMenuState(true)}>
          <MdMenu size={36}></MdMenu>
        </MenuButton>
      </nav>
    </header>
  );
};

export default Header;
