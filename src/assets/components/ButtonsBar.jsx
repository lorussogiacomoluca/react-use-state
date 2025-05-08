import React from "react";

const ButtonsBar = ({ languages, setActiveTab }) => {
  return (
    <>
      {languages.map((language) => (
        <button
          key={language.id}
          onClick={() => setActiveTab(language.id)}
          className="btn btn-primary"
        >
          {language.title}
        </button>
      ))}
    </>
  );
};

export default ButtonsBar;
