import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <>
      <a href={href}>{children}</a>

      <style jsx>{`
        a {
          border-radius: 0.5rem;
          background-color: skyblue;
          padding: 0.5em 2em;
          font-weight: bold;
          box-shadow: 0 0.1em 0.5em rgba(0 0 0 / 0.2);
          text-align: center;
          width: 100%;
          text-decoration: none;
          color: black;
          transition: transform 200ms, box-shadow 200ms;
        }

        a:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.25em 0.5em rgba(0 0 0 / 0.5);
        }
      `}</style>
    </>
  );
};

export default LinkButton;
