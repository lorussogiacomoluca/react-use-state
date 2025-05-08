import React from "react";

const Card = ({ language }) => {
  if (!language) return null;

  return (
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title">{language.title}</h5>
        <p className="card-text">{language.description}</p>
      </div>
    </div>
  );
};

export default Card;
