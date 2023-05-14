import React from "react";
import { MdClose } from "react-icons/md";
import LinkButton from "./LinkButton";
import MenuButton from "./MenuButton";

interface MenuProps {
  show: boolean;
  onCloseButtonClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ show, onCloseButtonClick }) => {
  return (
    <div
      className='menu'
      style={{
        transform: `translateY(${show ? "0" : "-200%"})`,
      }}
    >
      <LinkButton href='/app/login'>Login</LinkButton>
      <LinkButton href='/app/register'>Register</LinkButton>
      <MenuButton onClick={onCloseButtonClick}>
        <MdClose size={36}></MdClose>
      </MenuButton>

      <style jsx>{`
        .menu {
          display: grid;
          gap: 1rem;
          position: fixed;
          background-color: #eee;
          top: 1rem;
          padding: 1rem;
          z-index: 999;
          border-radius: 1.5rem;
          grid-template-columns: 1fr 1fr auto;
          width: calc(100% - 4rem);
          transform: translateY(-200%);
          transition: transform 800ms;
        }

        @media (width < 26rem) {
          .menu {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
