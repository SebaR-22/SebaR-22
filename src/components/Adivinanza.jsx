import { useState } from 'react';
import styles from './Adivinanza.module.css';

function Adivinanza({ numero, pregunta, respuesta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className={styles.adivinanza}>
      <h2>Adivinanza {numero}</h2>
      <p>{pregunta}</p>
      {mostrarRespuesta && <p className={styles.respuesta}>{respuesta}</p>}
      <button onClick={() => setMostrarRespuesta(!mostrarRespuesta)}>
        {mostrarRespuesta ? 'Ocultar' : 'Mostrar'} Respuesta 👁️
      </button>
    </div>
  );
}

export default Adivinanza;
