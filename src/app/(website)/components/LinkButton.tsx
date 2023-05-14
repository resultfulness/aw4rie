import React from "react";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  fullWidth,
}) => {
  return (
    <a
      href={href}
      className={styles.LinkButton}
      style={{ width: `${fullWidth ? "100%" : "initial"}` }}
    >
      {children}
    </a>
  );
};

export default LinkButton;
