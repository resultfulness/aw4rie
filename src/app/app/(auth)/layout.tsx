"use client";

import styles from "./layout.module.css";
import { MdArrowBack } from "react-icons/md";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href='/' className={styles["home-link"]}>
        <MdArrowBack size={36} />
        HOME
      </a>
      <main className={styles.container}>{children}</main>
    </>
  );
}
