import styles from "./Portfolio.module.css";
import React from "react";

export function Portfolio() {
  // Função hipotética - substitua pelo link do seu arquivo PDF real hospedado ou na pasta public
  // const handleDownloadCV = () => {
  //   window.open("/files/Curriculum_Vitae_Davi_Restani.pdf", "_blank");
  // };

  return (
    <div className={styles.portfolioContainer}>
      {/* Cabeçalho do Currículo com Botão de Download */}
      <section className={styles.cvHeader}>
        <div>
          <h2>Currículo Profissional</h2>
          <p className={styles.subtitle}>Desenvolvedor Full Stack</p>
        </div>
        <a
          className={styles.downloadBtn}
          href="/files/Curriculum_Vitae_Davi_Restani.pdf"
          download="Curriculum_Vitae_Davi_Restani.pdf"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Baixar PDF
        </a>
      </section>

      {/* 1. Resumo Profissional */}
      <section className={styles.section}>
        <h3>Sobre Mim</h3>
        <p className={styles.description}>
          Engenheiro de Software com experiência em desenvolvimento full stack,
          integração de APIs REST e automação de sistemas. Atuação em ambientes
          ágeis utilizando Scrum e Kanban, com foco em soluções escaláveis,
          plataformas digitais e otimização de processos. Experiência em
          desenvolvimento mobile com Flutter, ensino técnico e apoio à formação
          de equipes.
        </p>
      </section>

      {/* 2. Hard Skills (Separadas por categoria) */}
      <section className={styles.section}>
        <h3>Competências Técnicas</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h4>Frontend</h4>
            <ul>
              <li>React.js / Hooks / Context API</li>
              <li>JavaScript (ES6+) / TypeScript</li>
              <li>HTML5 / CSS3 / CSS Modules / Tailwind</li>
              <li>React Router DOM</li>
            </ul>
          </div>

          <div className={styles.skillCategory}>
            <h4>Backend</h4>
            <ul>
              <li>Node.js (Express)</li>
              <li>Criação de APIs RESTful</li>
              <li>Arquitetura MVC / Clean Architecture</li>
            </ul>
          </div>

          <div className={styles.skillCategory}>
            <h4>Dados & Infra</h4>
            <ul>
              <li>Bancos Relacionais (PostgreSQL / MySQL)</li>
              <li>Bancos Não-Relacionais (MongoDB)</li>
              <li>Git / GitHub (Versionamento)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Experiência ou Projetos de Destaque */}
      <section className={styles.section}>
        <h3>Experiência & Projetos Principais</h3>

        <div className={styles.timelineItem}>
          <div className={styles.timelineHeader}>
            <h4>Desenvolvedor Full Stack (Projetos Independentes)</h4>
            <span>Jan/2024 - Presente</span>
          </div>
          <ul className={styles.bulletList}>
            <li>
              Desenvolvimento de SPAs responsivas com React, priorizando a
              performance e a experiência do usuário.
            </li>
            <li>
              Construção de APIs escaláveis utilizando Node.js e Python para
              processamento de dados e regras de negócio.
            </li>
            <li>
              Modelagem de banco de dados relacionais e otimização de queries,
              garantindo integridade e velocidade nas consultas.
            </li>
          </ul>

          <div className={styles.timelineHeader}>
            <h4>Software Engineer | LEVTY</h4>
            <span>Jan/2025 – Jun/2026</span>
          </div>
          <ul className={styles.bulletList}>
            <li>
              Desenvolvimento de soluções escaláveis na plataforma SYDLE ONE
              utilizando JavaScript.
            </li>
            <li>
              Construção e integração de APIs REST e automação de fluxos
              internos.
            </li>
            <li>Otimização de processos utilizando ferramentas de CRM.</li>
            <li>Atuação em squads ágeis utilizando Scrum.</li>
          </ul>

          <div className={styles.timelineHeader}>
            <h4>Software Engineer Trainee | LEVTY</h4>
            <span>Dez/2023 – Jan/2025</span>
          </div>
          <ul className={styles.bulletList}>
            <li>
              Formação prática em desenvolvimento na plataforma SYDLE ONE.
            </li>
            <li>Apoio em projetos de automação e metodologias ágeis.</li>
          </ul>
        </div>
      </section>

      {/* 4. Formação Acadêmica */}
      <section className={styles.section}>
        <h3>Educação</h3>
        <div className={styles.educationItem}>
          <div className={styles.timelineHeader}>
            <h4>Graduação em Engenharia de Software</h4>
            <span>2019 - 2023</span>
          </div>
          <p className={styles.company}>
            Instituto Nacional de Telecomunicações - INATEL
          </p>
        </div>
      </section>
    </div>
  );
}
