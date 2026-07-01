import styles from "./BodyComponent.module.css";
import foto from "../../assets/fotoDavi.JPG";
import { useNavigate } from "react-router-dom";

export function Body() {
  const navigate = useNavigate();

  return (
    <div className={styles.bodyContainer}>
      <img src={foto} alt="Foto de Davi" />

      <div className={styles.bodyText}>
        <h2>
          Olá, eu sou <span>Davi Restani</span>
        </h2>

        <p>Desenvolvedor Full Stack focado em React, Node e Python</p>

        <div className={styles["home-container"]}>
          <button
            className={styles["circle-button"]}
            onClick={() => navigate("/portfolio")}
          >
            Currículo
          </button>

          <button
            className={styles["circle-button"]}
            onClick={() => navigate("/projects")}
          >
            Projetos
          </button>

          <button
            className={styles["circle-button"]}
            onClick={() => navigate("/contact")}
          >
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}
