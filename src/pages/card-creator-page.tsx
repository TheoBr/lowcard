import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "../utils/use-storage";
import { CardView } from "../features/cards/card";
import { PageLayout } from "../ui/page";
import { CardProperties, CARDS_STORAGE_KEY } from "../core/schema";
import { getCardURL } from "../utils/get-card-url";
import { CardCreatorPageHeader } from "../features/cards/card-creator-page-header";

const CardPageLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
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
      <CardCreatorPageHeader
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
            copyURL={() => navigator.clipboard.writeText(getCardURL(card))}
          />
        ))}
      </CardGridLayout>
    </CardPageLayout>
  );
};
