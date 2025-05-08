import React from "react";
import Card from "./Card";
import { useState } from "react";
import ButtonsBar from "./ButtonsBar";

const Main = (props) => {
  const { languages } = props;
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className="row d-flex">
      <div className="col m-5 d-flex gap-3">
        <ButtonsBar languages={languages} setActiveTab={setActiveTab} />
      </div>
      <div className="row ">
        <div className="col m-5 gap-3">
          <Card language={languages.find((l) => l.id === activeTab)} />
        </div>
      </div>
    </div>
  );
};

export default Main;
