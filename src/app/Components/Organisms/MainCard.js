import React, { useState, useEffect } from "react";
import SideBarOne from "../Molecules/SideListOne";
import Card from "../Molecules/Card";

export default function MainCard() {
  const [cards, setCards] = useState([]);
  const [viewonly, setViewonly] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("cards");
    const parsedData = JSON.parse(storedData);

    if (parsedData) {
      console.log(parsedData, "store on effect");
      setCards(parsedData);
    }
  }, []);

  const handleSaveCard = (newCard) => {
    const updatedCard = [...cards, newCard];
    setCards(updatedCard);
    localStorage.setItem("cards", JSON.stringify(updatedCard));
    setViewonly(false);
    setCardOpen(false);
  };

  const toggleInputCard = () => {
    setCardOpen(!cardOpen);
  };
  const deleteCard = (id) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((_, index) => index !== id);
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  return (
    <div className="main-layout">
      <SideBarOne />
      <div>
        <div className="cards-layout">
          {cardOpen ? (
            <Card
              className="card-template"
              viewonly={viewonly}
              onSave={handleSaveCard}
              onClose={toggleInputCard}
            />
          ) : (
            <div onClick={toggleInputCard} className="input-card-placeholder">
              <input
                className="input-card"
                placeholder="Take a Note..."
                value=""
                readOnly
              />
            </div>
          )}
        </div>
        <div className="card-grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              id={index}
              viewonly={true}
              savedData={card}
              onDelete={deleteCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
