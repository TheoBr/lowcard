import React, { useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { StyledButton } from "../../ui/button";
import { useLocalStorage } from "../../utils/use-storage";
import { CardProperties, CARDS_STORAGE_KEY } from "../../core/schema";
import { CardView } from "../cards/card";
import { getCardURL } from "../../utils/getCardURL";

const Balloon = styled.div`
  background: rgba(20, 40, 66, 0.8);
  border-radius: 8px;
  height: 400px;
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
  const [cards, setCards] = useLocalStorage<CardProperties[]>(
    CARDS_STORAGE_KEY,
    []
  );
  if (!cards || cards.length === 0) {
    return <div>No cards! Go to the card creator to make some :)</div>;
  }
  return (
    <StyledCardList>
      {cards.map((card) => (
        <CardView
          {...card}
          customMargin="0.5rem"
          onCardClick={() => onCardClick(card)}
        />
      ))}
    </StyledCardList>
  );
};
