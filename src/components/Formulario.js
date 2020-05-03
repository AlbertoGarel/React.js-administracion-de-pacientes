import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = () => {
  //create state
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });
  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada vez que el user escribe en un input
  const actualizarState = ev => {
    actualizarCita({
      ...cita,
      [ev.target.name]: ev.target.value
    });
  };

  //Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = ev => {
    ev.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //asignar id
    cita.id = uuidv4();
    console.log(cita);
    //crear cita

    //reiniciar form
  };

  //mensaje TimeOut
  const mensajeError = () => {
    setTimeout(function() {
      actualizarError(false);
    }, 4000);
    return <p className="alerta-error">Todos los campos son obligatorios</p>;
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? mensajeError() : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño Mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Describir Síntomas"
          onChange={actualizarState}
          value={sintomas}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};
export default Formulario;
