"use client";

import React from 'react';
import Footer from '../components/Footer'; // Importe o componente de rodapé
import styles from './Institucional.module.css'; // Importe os estilos modulares

const InstitucionalPage: React.FC = () => {
  return (
    <div>

      <div className={`${styles['institucional-content']}`}>
        <div className={styles.section}>
          <div className={styles.vectorLines}>
            <div className={`${styles.vectorLine} ${styles.blue}`} />
            <div className={`${styles.vectorLine} ${styles.dark}`} />
          </div>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Bem-vindo ao Educandário Castro Alves</h1>
            <p>
              O Educandário Castro Alves é um lugar onde a educação se encontra com os valores cristãos,
              criando um ambiente único para o crescimento acadêmico e espiritual dos alunos.
            </p>
          </div>
        </div>

        <div className={`${styles.section} ${styles.yellow}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Filosofia Cristã</h2>
            <p>
              Nossa escola acredita em educar a mente, o corpo e o espírito. Com base em princípios
              cristãos, buscamos cultivar valores como amor, compaixão, respeito e solidariedade,
              preparando nossos alunos para se tornarem cidadãos responsáveis e éticos.
            </p>
          </div>
        </div>

        <div className={`${styles.section} ${styles.blue}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Professores Amorosos</h2>
            <p>
              Nossos professores são apaixonados pelo ensino e dedicados ao bem-estar de cada aluno.
              Eles não apenas transmitem conhecimento, mas também são mentores que ajudam os alunos a
              desenvolverem suas habilidades, confiança e autoestima.
            </p>
          </div>
        </div>

        <div className={`${styles.section} ${styles.dark}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Passeios Educativos e Eventos</h2>
            <p>
              Aprendizado vai além das quatro paredes da sala de aula. Organizamos passeios educativos
              que enriquecem a experiência de aprendizado, permitindo que os alunos explorem o mundo
              real de maneira prática e envolvente. Além disso, nossos grandes eventos escolares
              proporcionam momentos de alegria, celebração e convívio comunitário.
            </p>
          </div>
        </div>

        <div className={`${styles.section} ${styles.yellow}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ambiente Acolhedor</h2>
            <p>
              Nossa escola é mais do que um local de estudo. É uma segunda casa para nossos alunos,
              onde eles são recebidos com carinho e cuidado. Nosso ambiente acolhedor promove a
              confiança e a conexão entre alunos, professores e funcionários.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstitucionalPage;
