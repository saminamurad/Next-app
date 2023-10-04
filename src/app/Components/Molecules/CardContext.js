import React, { createContext, useContext, useState } from "react";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [cards, setCards] = useState([]);
  const [viewonly, setViewonly] = useState(false);

  const handleSaveCard = (newCard) => {
    setCards([...cards, newCard]);
    setViewonly(false);
  };

  return (
    <CardContext.Provider value={{ cards, viewonly, handleSaveCard }}>
      {props.children}
    </CardContext.Provider>
  );
}
