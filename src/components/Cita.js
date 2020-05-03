import React from "react";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Nombre: <span>{cita.nombre}</span>
    </p>
    <p>
      Apellidos: <span>{cita.apellidos}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>
    <p>
      Hora: <span>{cita.hora}</span>
    </p>
    <p>
      Sintomas: <span>{cita.sintomas}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar
    </button>
  </div>
);
export default Cita;
