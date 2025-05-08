import React from "react";

const ButtonsBar = ({ languages, setActiveTab, activeTab }) => {
  return (
    <>
      {languages.map((language) => (
        <button
          key={language.id}
          onClick={() => setActiveTab(language.id)}
          className={`btn btn-${
            activeTab === language.id ? "warning" : "primary"
          }`}
        >
          {language.title}
        </button>
      ))}
    </>
  );
};

export default ButtonsBar;
