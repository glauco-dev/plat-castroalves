import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>Educandário Castro Alves</div>
        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>
            Início
          </a>
          <a href="/institucional" className={styles.footerLink}>
            Sobre Nós
          </a>
          <a href="/galerias" className={styles.footerLink}>
            Galerias
          </a>
          <a href="/portal" className={styles.footerLink}>
            Portal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
