import React from "react";
import CardsIcons from "../Atoms/CardsIcons";
import person_add from "../img/person_add.svg";
import add_alert from "../img/add_alert.svg";
import paint from "../img/paint.svg";
import Image from "../img/Image.svg";
import more from "../img/more.svg";
import undo from "../img/undo.svg";
import redo from "../img/redo.svg";

export default function CardIconList({ viewonly }) {
  return (
    <div className="cardIcons">
      <CardsIcons icon={add_alert} />
      <CardsIcons icon={person_add} />
      <CardsIcons icon={paint} />
      <CardsIcons icon={Image} />
      <CardsIcons icon={more} />
      {!viewonly && <CardsIcons icon={undo} />}
      {!viewonly && <CardsIcons icon={redo} />}
    </div>
  );
}
