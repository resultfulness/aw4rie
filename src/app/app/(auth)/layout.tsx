"use client";

import styles from "./layout.module.css";
import { MdArrowBack } from "react-icons/md";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles["link-wrapper"]}>
        <a href='/' className={styles["link"]}>
          <MdArrowBack size={36} />
          HOME
        </a>
        <a href='/app' className={styles["link"]}>
          <MdArrowBack size={36} />
          APP
        </a>
      </div>
      <main className={styles.container}>{children}</main>
    </>
  );
}
