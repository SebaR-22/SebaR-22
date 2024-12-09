import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Adivinanzas Interactivas</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>Inicio</li>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
