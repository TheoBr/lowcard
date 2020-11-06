import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "../../utils/use-storage";
import { CardProperties, CardView } from "./card";
import { CardCreator } from "./card-creator";

const CARDS_STORAGE_KEY = "cards-storage-key";

const CardPageLayout = styled.div`
  display: flex;
  flex-direction: column;
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

  return (
    <CardPageLayout>
      <CardCreator
        addCard={(newCard) =>
          setCards((cc: CardProperties[]) => [newCard, ...cc])
        }
      />
      <CardGridLayout>
        {cards.map((card, index) => (
          <CardView {...card} key={index} />
        ))}
      </CardGridLayout>
    </CardPageLayout>
  );
};
