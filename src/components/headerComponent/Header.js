import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React from "react";

export function Header() {
  return (
    <header className={styles["App-header"]}>
      <h1 className={styles["title-header"]}>
        <Link to="/" className={styles["logo-link"]}>
          Portfolio pessoal
        </Link>
      </h1>
      <nav className={styles["nav-menu"]}>
        <a href="/portfolio" className={styles["nav-link"]}>
          Currículo
        </a>
        <span className={styles["divider"]}>|</span>
        <a href="/projects" className={styles["nav-link"]}>
          Projetos
        </a>
        <span className={styles["divider"]}>|</span>
        <a href="/contact" className={styles["nav-link"]}>
          Contato
        </a>
      </nav>
    </header>
  );
}
