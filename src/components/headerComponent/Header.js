import styles from "./Header.module.css";
import React from "react";

export function Header() {
  return (
    <header className={styles["App-header"]}>
      <h1 className={styles["title-header"]}>Portfolio pessoal</h1>
      <nav className={styles["nav-menu"]}>
        <a href="#curriculo" className={styles["nav-link"]}>
          Currículo
        </a>
        <span className={styles["divider"]}>|</span>
        <a href="#projetos" className={styles["nav-link"]}>
          Projetos
        </a>
        <span className={styles["divider"]}>|</span>
        <a href="#contato" className={styles["nav-link"]}>
          Contato
        </a>
      </nav>
    </header>
  );
}
