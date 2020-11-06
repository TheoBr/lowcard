import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "../utils/use-storage";
import { CardProperties, CardView } from "../features/cards/card";
import { CardCreator } from "../features/cards/card-creator";
import querystring from "query-string";

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

export const CardCreatorPage = () => {
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
            copyURL={() =>
              navigator.clipboard.writeText(
                `${window.location.origin}/card?${querystring.stringify({
                  ...card,
                })}`
              )
            }
          />
        ))}
      </CardGridLayout>
    </CardPageLayout>
  );
};
