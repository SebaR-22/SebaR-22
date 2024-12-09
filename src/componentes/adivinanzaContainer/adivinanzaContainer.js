import React, { useEffect, useState } from 'react';
import styles from './AdivinanzaContainer.module.css';

const AdivinanzaContainer = () => {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
    const fetchAdivinanzas = async () => {
      const response = await fetch('/data/adivinanzas.json');
      const data = await response.json();
      setAdivinanzas(data);
    };
    fetchAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      {adivinanzas.map(({ numero, pregunta, respuesta }) => (
        <Adivinanza key={numero} numero={numero} pregunta={pregunta} respuesta={respuesta} />
      ))}
    </div>
  );
};

export default AdivinanzaContainer;
