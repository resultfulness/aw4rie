import React from "react";
import styles from "./layout.module.css";
import Header from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />

      {children}

      <footer className={styles.footer}>Alicja Rosiak, 2023</footer>
    </div>
  );
}
