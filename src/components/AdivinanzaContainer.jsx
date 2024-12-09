import { useEffect, useState } from 'react';
import Adivinanza from './Adivinanza';
import styles from './AdivinanzaContainer.module.css';

function AdivinanzaContainer() {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
      async function fetchAdivinanzas() {
        const data = [
          { "numero": 1, "pregunta": "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera?", "respuesta": "Pera" },
          { "numero": 2, "pregunta": "Cuatro patas tiene, pero no puede caminar?", "respuesta": "La mesa" },
          { "numero": 3, "pregunta": "Soy una caja, pero no soy de cartón. Me abres y me cierras todos los dias?", "respuesta": "Un Telefono" },
          { "numero": 4, "pregunta": "En el cielo brillan y en la tierra se esconden, ¿quiénes son esos que siempre resplandecen?", "respuesta": "La papa (Las estrellas)" },
          { "numero": 5, "pregunta": "Si me nombras, desaparezco. ¿Qué soy?", "respuesta": "El Silencio" }
        ];
      setAdivinanzas(data);
    };
    
    fetchAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      {adivinanzas.map((adivinanza) => (
        <Adivinanza key={adivinanza.numero} {...adivinanza} />
      ))}
    </div>
  );
}

export default AdivinanzaContainer;
