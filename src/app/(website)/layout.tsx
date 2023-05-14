"use client";

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import LinkButton from "./components/LinkButton";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className={styles.container}>
      <Menu
        show={isMenuShown}
        onCloseButtonClick={() => setIsMenuShown(false)}
      />
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href='/'>AW4RIE</a>
          </div>
          <div className={styles.links}>
            <LinkButton href='/app/login'>Login</LinkButton>
            <LinkButton href='/app/register'>Register</LinkButton>
          </div>
          <MenuButton onClick={() => setIsMenuShown(true)}>
            <MdMenu size={36}></MdMenu>
          </MenuButton>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>Alicja Rosiak, 2023</footer>
    </div>
  );
}
