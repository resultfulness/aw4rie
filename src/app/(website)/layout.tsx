"use client";

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import LinkButton from "./components/LinkButton";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className='container'>
      <Menu
        show={isMenuShown}
        onCloseButtonClick={() => setIsMenuShown(false)}
      />
      <header>
        <nav>
          <div className='logo'>
            <a href='/'>AW4RIE</a>
          </div>
          <div className='links'>
            <LinkButton href='/app/login'>Login</LinkButton>
            <LinkButton href='/app/register'>Register</LinkButton>
          </div>
          <MenuButton onClick={() => setIsMenuShown(true)}>
            <MdMenu size={36}></MdMenu>
          </MenuButton>
        </nav>
      </header>

      {children}

      <footer>Alicja Rosiak, 2023</footer>

      <style jsx>{`
        .container {
          width: min(100% - 4rem, 60rem);
          margin-inline: auto;
        }

        nav {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: transform 200ms, box-shadow 200ms;
        }

        a:hover {
          transform: translateY(-3px);
        }

        .logo {
          font-weight: bold;
          font-size: 2rem;
        }

        .links {
          display: flex;
          gap: 1rem;
        }

        footer {
          background-color: black;
          color: white;
          text-align: right;
          padding: 2rem;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        @media (width < 35rem) {
          nav {
            background-color: #eee;
            position: fixed;
            top: 1rem;
            width: calc(100% - 4rem);
            border-radius: 1.5rem;
          }

          .links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
