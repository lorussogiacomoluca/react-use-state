import React from "react";
import ButtonsBar from "./ButtonsBar";
import Card from "./Card";

const Main = (props) => {
  const { languages } = props;
  return (
    <div className="row d-flex">
      <div className="col m-5 d-flex gap-3">
        <ButtonsBar languages={languages} />
      </div>
      <div className="row ">
        <div className="col m-5 d-flex gap-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Main;
