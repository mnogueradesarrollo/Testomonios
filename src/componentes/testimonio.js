import React from "react";
import "../stylesheets/testimonio.css";

function Testimonio(props) {
  return (
    <div className="container-testimonio">
      <img
        className="image-testimonio"
        src={require(`../imagenes/${props.image}.jpg`)}
        alt="Foto de Ana"
      />
      <div className="container-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.name}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
