import React, { useState } from 'react';
import styles from './Adivinanza.module.css';

const Adivinanza = ({ numero, pregunta, respuesta }) => {
  const [reveal, setReveal] = useState(false);

  const toggleReveal = () => setReveal(!reveal);

  return (
    <div className={styles.adivinanza}>
      <h3>Adivinanza {numero}</h3>
      <p>{pregunta}</p>
      <button onClick={toggleReveal} className={styles.button}>
        {reveal ? respuesta : "Mostrar respuesta"} 👁️
      </button>
    </div>
  );
};

export default Adivinanza;
