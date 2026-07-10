import { ProjectCard } from "../../components/projectsComponent/ProjectCard";
import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Substitua pelo seu nome de usuário exato do GitHub
  const githubUsername = "DaviRestani";

  useEffect(() => {
    // Busca os repositórios públicos ordenados pelos criados mais recentemente
    fetch(`https://api.github.com/users/${githubUsername}/repos`, {
      headers: {
        // Boa prática para evitar problemas de bloqueio com a API do GitHub
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erro na API: ${response.status} - ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((data) => {
        // Mapeia os dados da API para o formato que o seu ProjectCard espera
        const formattedProjects = data.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description:
            repo.description || "Sem descrição disponível no momento.",
          // O GitHub envia a linguagem principal, transformamos em uma array para a tag
          tags: repo.language ? [repo.language] : [],
          link: repo.html_url,
        }));

        setProjects(formattedProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Falha ao carregar projetos:", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>Meus Projetos</h2>

      {loading ? (
        <p className={styles.loading}>Carregando projetos do GitHub...</p>
      ) : (
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      )}
    </section>
  );
}
