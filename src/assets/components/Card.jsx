import React from "react";

const Card = ({ language }) => {
  return (
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title">
          {!language ? "Nessun linguaggio selezionato" : language.title}
        </h5>
        <p className="card-text">
          {!language ? "Selezionare un linguaggio" : language.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
