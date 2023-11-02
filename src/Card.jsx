import React from "react";

const Card = ({ mascota, dueno }) => {
  return (
    <div style={{backgroundColor: "grey", color: "black", borderRadius:"5px"}}>
      <h2 style={{margin:"20px"}}>Info de la Mascota Registrada</h2>
      <h3 style={{margin:"20px"}}>{mascota} es de {dueno}</h3>
    </div>
  );
};

export default Card;
