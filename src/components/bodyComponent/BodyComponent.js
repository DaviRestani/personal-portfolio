import styles from "./BodyComponent.module.css";
import foto from "../../assets/foto.jpeg";

export function Body() {
  return (
    <div className={styles["bodyContainer"]}>
      <img src={foto} alt="foto"></img>

      <div className={styles["bodyText"]}>
        <h2>
          Olá, eu sou <span>Davi Restani</span>
        </h2>
        <p>Desenvolvedor Full Stack focado em React, Node e Python</p>
      </div>
    </div>
  );
}
