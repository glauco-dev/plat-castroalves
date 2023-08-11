"use client";

import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import Link from 'next/link';

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
      <div  className='footer_final'style={{...styles.footerContent}}>
        <div  style={styles.footerLinks}>
          <Link href="/" target='_blank' style={styles.footerLink}>
            Início
          </Link>
          <Link href="/institucional" target='_blank' style={styles.footerLink}>
            Sobre Nós
          </Link>
          <Link href="/galerias" target='_blank' style={styles.footerLink}>
            Galerias
          </Link>
          <Link href="/portal" target='_blank' style={styles.footerLink}>
            Portal
          </Link>
        </div>
        <span  style={{fontSize:'80%', marginTop:'1rem', textAlign:"center", color:"#2d2d2d"}}>
          Educandário Castro Alves, todos os direitos reservados @2023
          <div>
          &copy; github/glauco-dev
          </div>
          </span>
        
      </div>
      </Footer>
  );
};

export default Footer_;
