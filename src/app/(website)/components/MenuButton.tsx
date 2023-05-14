import React from "react";

interface MenuButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: none;
        }

        @media (width < 35rem) {
          button {
            display: grid;
            place-items: center;
            padding: 0.25rem;
            border: 0;
            border-radius: 50%;
            cursor: pointer;
            background-color: inherit;
            transition: background-color 400ms;
          }

          button:hover,
          button:focus {
            background-color: #ddd;
          }

          button:active {
            background-color: #ccc;
          }
        }
      `}</style>
    </>
  );
};

export default MenuButton;
