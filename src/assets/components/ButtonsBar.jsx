import React from "react";

const ButtonsBar = ({ languages }) => {
  return (
    <>
      {/* <button className="btn btn-warning">HTML</button>
      <button className="btn btn-primary">CSS</button>
      <button className="btn btn-primary">Javascript</button>
      <button className="btn btn-primary">NodeJs</button>
      <button className="btn btn-primary">Express</button>
      <button className="btn btn-primary">React</button> */}
      {languages.map((language) => (
        <button key={`lang-${language.id}`} className="btn btn-primary">
          {language.title}
        </button>
      ))}
    </>
  );
};

export default ButtonsBar;
