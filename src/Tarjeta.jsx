import { useState } from "react";
import "./tarjeta.css";

export default function Tarjeta({ cita, eliminarCita: eliminar }) {

  const [imageVisible, setImageVisible] = useState(true);

  const eliminarCita = () => {
    eliminar(cita.nombreMascota);
  };

  const alternarVisibilidad = () => {
    setImageVisible(!imageVisible);
  }

  return (
    <div id="tarjeta">
            <div id="imageContainer">
        
        {/* {
          imageVisible ? 
            <img src={cita.imagen} alt="foto animal" />
          :
            null
        } */}
        {imageVisible && <img src={cita.imagen} alt="foto animal" />}
        
      </div>
      <div id="imgButton">
      <button onClick={alternarVisibilidad}>{imageVisible ? 'Ocultar imagen' : 'Mostrar imagen'}</button>
      </div>
      <p>
        <strong>Mascota:</strong> {cita.nombreMascota}
      </p>
      <p>
        <strong>Dueño:</strong> {cita.nombreDueño}
      </p>
      <p>
        <strong>Fecha:</strong> {cita.fecha}
      </p>
      <p>
        <strong>Hora:</strong> {cita.hora}
      </p>
      <p>
        <strong>Síntomas:</strong> {cita.sintomas}
      </p>
      <div id="deleteContainer">
        <button onClick={eliminarCita}>Eliminar</button>
      </div>

    </div>
  );
}
