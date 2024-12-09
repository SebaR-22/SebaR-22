import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Adivinanzas Java-React || Todos los derechos reservados</p>
      <ul className={styles.socials}>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
