import { useState } from "react";
import "./App.css";
import Tarjeta from "./Tarjeta";
import Form from "./Form";

function App() {
  const [citas, setCitas] = useState([
    {
      nombreMascota: "Lala",
      nombreDueño: "Lolo",
      fecha: new Date().toString(),
      hora: new Date().getTime().toString(),
      sintomas: "Le duele la panza",
    },
    {
      nombreMascota: "Lolo",
      nombreDueño: "Lolo",
      fecha: new Date().toString(),
      hora: new Date().getTime().toString(),
      sintomas: "Le duele la panza",
    },
    {
      nombreMascota: "Lili",
      nombreDueño: "Lolo",
      fecha: new Date().toString(),
      hora: new Date().getTime().toString(),
      sintomas: "Le duele la panza",
    },
    {
      nombreMascota: "Lele",
      nombreDueño: "Lolo",
      fecha: new Date().toString(),
      hora: new Date().getTime().toString(),
      sintomas: "Le duele la panza",
    },
  ]);

  const eliminarCita = (nombreMascota) => {
    // const nuevasCitas = citas.filter(
    //   (cita) => cita.nombreMascota !== nombreMascota
    // );

    const nuevasCitas = citas.reduce(((acc, cita) => {
      if(cita.nombreMascota === nombreMascota) return acc;
      return [...acc, cita];
    }), []);


    setCitas(nuevasCitas);
  };

  return (
    <div className="container-fluid" id="contenedor">
      <br />
      <br />
      <br />
      <h1 className="text-center">
        <strong id="titulo">ADMINISTRADOR DE PACIENTES</strong>
      </h1>

      <div id="contenedor2">
        <div id="cformulario">
          <h1 className="text-center">CREAR CITA</h1>
          {/* aqui va el componente formulario */}
          <Form citas={citas} setCitas={setCitas} />
        </div>
        <div id="ctarjetas">
          <h1 className="text-center">ADMINISTRAR CITAS</h1>
          {/* aqui va el componente tarjeta */}

          {citas.map((cita) => (
            <Tarjeta id="tarjeta" cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
      <footer>
        <img
          src="https://c8.alamy.com/compes/m74757/grupo-de-perros-de-gran-tamano-en-la-parte-delantera-del-fondo-blanco-m74757.jpg"
          alt="fotter de perritos"
        />
      </footer>
    </div>
  );
}

export default App;
