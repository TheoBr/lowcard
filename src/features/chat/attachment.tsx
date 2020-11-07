import React, { useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { StyledButton } from "../../ui/button";
import { useLocalStorage } from "../../utils/use-storage";
import { CardProperties, CARDS_STORAGE_KEY } from "../../core/schema";
import { CardView } from "../cards/card";
import { getCardURL } from "../../utils/getCardURL";
import { CardCreatorComponent } from "../cards/card-creator";

const Balloon = styled.div`
  background: rgba(20, 40, 66, 0.8);
  border-radius: 8px;
  height: 450px;
  width: 350px;
  margin-bottom: 1rem;
  overflow-y: scroll;
`;

export interface AttachmentProps {
  submitAttachment: (url: string) => void;
}

export const AttachmentButton: React.FC<AttachmentProps> = ({
  submitAttachment,
}) => {
  const [visible, setVisible] = useState(false);
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-end",
  });

  return (
    <>
      <StyledButton
        aria-label="Add an attachment"
        ref={setReferenceElement}
        onClick={() => setVisible((v) => !v)}
      >
        📎
      </StyledButton>
      {visible && (
        <Balloon
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <PickCard
            onCardClick={(card: CardProperties) => {
              submitAttachment(getCardURL(card));
              setVisible(false);
            }}
          />
        </Balloon>
      )}
    </>
  );
};

const StyledCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export interface PickCardProps {
  onCardClick: (card: CardProperties) => void;
}

export const PickCard: React.FC<PickCardProps> = ({ onCardClick }) => {
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

export interface CreateCardProps {
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

export const RemoveButton: React.FC<{ onClick: () => void }> = (props) => {
  return <StyledRemoveButton {...props}>X</StyledRemoveButton>;
};
