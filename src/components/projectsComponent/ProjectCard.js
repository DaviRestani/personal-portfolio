import styles from "./ProjectCard.module.css";

// O componente recebe as propriedades do projeto via props
export function ProjectCard({ title, description, tags, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>

        {/* Badges/Tags das tecnologias usadas */}
        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Botão de ação posicionado sempre na base */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        Visualizar Projeto
      </a>
    </div>
  );
}
