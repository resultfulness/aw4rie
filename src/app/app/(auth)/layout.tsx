"use client";

import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
