import React from "react";

const Boton = ({ name, click }) => {
  return <button onClick={click}>{name}</button>;
};

export default Boton;
