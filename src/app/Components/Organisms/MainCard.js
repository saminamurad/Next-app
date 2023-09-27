"use client";
import React, { useState } from "react";
import SideBarOne from "../Molecules/SideListOne";
import Card from "../Molecules/Card";

export default function MainCard() {
  const [cards, setCards] = useState([]);
  const [viewonly, setViewonly] = useState(false);

  const handleSaveCard = (newCard) => {
    setCards([...cards, newCard]);
    setViewonly(false);
  };

  return (
    <div className="main-layout">
      <SideBarOne />
      <div>
        <div className="cards-layout">
          <Card
            className="card-template"
            viewonly={viewonly}
            onSave={handleSaveCard}
          />
        </div>
        <div className="card-grid">
          {cards.map((card, index) => (
            <Card key={index} viewonly={true} savedData={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
