
import "./tarjeta.css";

export default function Tarjeta({ cita }) {
  return (
    <div id="tarjeta">
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
    </div>
  );
}