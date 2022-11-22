import { useState } from "react";

export default function Form({ citas, setCitas }) {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueño, setNombreDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  function actualizarNombreMascota(e) {
    setNombreMascota(e.target.value);
  }
  function actualizarNombreDueño(e) {
    setNombreDueño(e.target.value);
  }
  function actualizarFecha(e) {
    setFecha(e.target.value);
  }
  function actualizarHora(e) {
    setHora(e.target.value);
  }
  function actualizarSintomas(e) {
    setSintomas(e.target.value);
  }
  function agregarCita(e) {
    e.preventDefault();
    let cita = { nombreMascota, nombreDueño, fecha, hora, sintomas };
    setCitas([...citas, cita]);
    setNombreMascota("");
    setNombreDueño("");
    setFecha("");
    setHora("");
    setSintomas("");
  }

  return (
    <div>
      {/*  <form onSubmit = {agregarInvitacion}>   Esto para que cuanto se aprete el boton, ejecute la funcion*/}
      <form onSubmit={agregarCita}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Nombre Mascota
          </label>
          <input
            value={nombreMascota}
            onChange={actualizarNombreMascota}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Nombre Mascota"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Nombre del Dueño
          </label>
          <input
            value={nombreDueño}
            onChange={actualizarNombreDueño}
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Nombre del Dueño"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Seleccione la fecha
          </label>
          <input
            value={fecha}
            onChange={actualizarFecha}
            type="date"
            class="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Seleccione la hora
          </label>
          <input
            value={hora}
            onChange={actualizarHora}
            type="time"
            class="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Detalle los Síntomas
          </label>
          <textarea
            value={sintomas}
            onChange={actualizarSintomas}
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <input
          type="submit"
          class=" text-reset w-100 btn  btn-info"
          value={"Agregar Cita"}
        />
      </form>
    </div>
  );
}
