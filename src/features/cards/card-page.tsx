import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "../../utils/use-storage";
import { CardProperties, CardView } from "./card";
import { CardCreator } from "./card-creator";

const CARDS_STORAGE_KEY = "cards-storage-key";

const CardPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  font-size: 20px;
  min-height: 100vh;
`;

const CardGridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardPage = () => {
  const [cards, setCards] = useLocalStorage<CardProperties[]>(
    CARDS_STORAGE_KEY,
    []
  );

  const removeCard = (cardID: number) => {
    setCards((cards) => cards.filter((_, i) => i !== cardID));
  };

  return (
    <CardPageLayout>
      <CardCreator
        addCard={(newCard) =>
          setCards((cc: CardProperties[]) => [newCard, ...cc])
        }
      />
      <CardGridLayout>
        {cards.map((card, index) => (
          <CardView
            {...card}
            key={index}
            removeCard={() => removeCard(index)}
          />
        ))}
      </CardGridLayout>
    </CardPageLayout>
  );
};
