import React from "react";
import { useLocalStorage } from "../../utils/use-storage";
import { CardProperties, CardView } from "./card";
import { CardCreator } from "./card-creator";

const CARDS_STORAGE_KEY = "cards-storage-key";

export const Cards = () => {
  const [cards, setCards] = useLocalStorage<CardProperties[]>(
    CARDS_STORAGE_KEY,
    [{ backgroundColor: "gray", textColor: "white", char: "A" }]
  );

  return (
    <div>
      <CardCreator
        addCard={(newCard) =>
          setCards((cc: CardProperties[]) => [newCard, ...cc])
        }
      />
      {cards.map((card) => (
        <CardView {...card} />
      ))}
    </div>
  );
};
