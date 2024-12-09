import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Adivinanzas Interactivas. Todos los derechos reservados.</p>
      <div className={styles.socialLinks}>
        <span>Facebook</span> | <span>Twitter</span> | <span>Instagram</span>
      </div>
    </footer>
  );
};

export default Footer;
