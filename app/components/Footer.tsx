"use client";

import React from 'react';
import { Footer } from 'antd/es/layout/layout';

const Footer_: React.FC = () => {
  const styles = {
    footer: {
      backgroundColor: '#497798',
      color: '#ffffff',
      padding: '30px 0',
      paddingTop:'4rem',
      height: '12rem'
    },
    footerContent: {
      maxWidth: 'fit-content',
      margin: '0 auto',
      display:'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    footerLogo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    footerLinks: {
      marginTop: '20px',
      display: 'flex',
      gap: '2rem',
    },
    footerLink: {
      color: '#ffffff',
      margin: '0 10px',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',
    },
    footerLinkHover: {
      color: '#ffdf01',
    },
  };
  return (
      <Footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLinks}>
          <a href="/" target='_blank' style={styles.footerLink}>
            Início
          </a>
          <a href="/institucional" target='_blank' style={styles.footerLink}>
            Sobre Nós
          </a>
          <a href="/galerias" target='_blank' style={styles.footerLink}>
            Galerias
          </a>
          <a href="/portal" target='_blank' style={styles.footerLink}>
            Portal
          </a>
        </div>
        <span style={{fontSize:'80%', marginTop:'1rem', textAlign:"center", color:"#2d2d2d"}}>
          Educandário Castro Alves, todos os direitos reservados @2023
          <div>
          &copy; Ícaro Glauco de Oliveira
          </div>
          </span>
        
      </div>
      </Footer>
  );
};

export default Footer_;
