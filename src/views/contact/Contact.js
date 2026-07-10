import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import styles from "./Contact.module.css"; // Importando o CSS Module

export function Contact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>Entre em Contato</h2>

      <div className={styles.container}>
        {/* Item: E-mail */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <EmailIcon className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>E-mail</h3>
          <p className={styles.cardText}>davirestanifaria@gmail.com</p>
        </div>

        {/* Item: Telefone */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <LocalPhoneIcon className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Telefone</h3>
          <p className={styles.cardText}>(35) 99849-5948</p>
        </div>

        {/* Item: Linkedin */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <LinkedInIcon className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>LinkedIn</h3>
          <p className={styles.cardText}>
            <a
              href="https://www.linkedin.com/in/davi-restani-76194017a"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Davi Restani
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
