import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "../../../utils/use-storage";
import { CardProperties, CARDS_STORAGE_KEY } from "../../../core/schema";
import { CardView } from "../../cards/card";
import { CardCreatorComponent } from "../../cards/card-creator";

const StyledCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export interface CardPickerBalloonProps {
  onCardClick: (card: CardProperties) => void;
}

export const CardPickerBalloon: React.FC<CardPickerBalloonProps> = ({
  onCardClick,
}) => {
  const [view, setView] = React.useState<"cards" | "creator">("cards");
  const [cards, setCards] = useLocalStorage<CardProperties[]>(
    CARDS_STORAGE_KEY,
    []
  );
  const cardComponents = [
    cards.map((card) => (
      <CardView
        {...card}
        customMargin="0.5rem"
        onCardClick={() => onCardClick(card)}
      />
    )),
    <CardView
      char="+"
      backgroundColor="transparent"
      textColor="white"
      customMargin="0.5rem"
      onCardClick={() => setView("creator")}
    />,
  ];

  return (
    <StyledCardList>
      {view === "cards" && cardComponents}
      {view === "creator" && (
        <CreateCard
          saveCard={(newCard) => {
            setCards((cc: CardProperties[]) => [newCard, ...cc]);
            onCardClick(newCard);
          }}
          cancelCreation={() => setView("cards")}
        />
      )}
    </StyledCardList>
  );
};

const StyledCreateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
  position: relative;
`;

interface CreateCardProps {
  saveCard: (card: CardProperties) => void;
  cancelCreation: () => void;
}

const CreateCard: React.FC<CreateCardProps> = ({
  saveCard,
  cancelCreation,
}) => {
  return (
    <StyledCreateCard>
      <RemoveButton onClick={cancelCreation} />
      <CardCreatorComponent addCard={saveCard} centerContent />
    </StyledCreateCard>
  );
};

const StyledRemoveButton = styled.button`
  font-size: 1rem;
  top: 0;
  right: 0;
  position: absolute;
  color: red;
`;

const RemoveButton: React.FC<{ onClick: () => void }> = (props) => {
  return <StyledRemoveButton {...props}>X</StyledRemoveButton>;
};
