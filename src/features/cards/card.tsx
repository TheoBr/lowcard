import React from "react";
import styled from "styled-components";

export interface CardProperties {
  backgroundColor: string;
  textColor: string;
  char: string;
}

const StyledCard = styled.div<CardProperties>`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  margin: 2rem;
  font-size: 80px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  position: relative;
`;

type CardViewProps = CardProperties & {
  removeCard?: () => void;
};

export const CardView: React.FC<CardViewProps> = (card) => {
  const [showButtons, setShowButtons] = React.useState(false);
  return (
    <StyledCard
      {...card}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {card.removeCard && (
        <RemoveButton show={showButtons} onClick={card.removeCard} />
      )}
      {card.char}
    </StyledCard>
  );
};

export interface RemoveButtonProps {
  onClick: () => void;
  show: boolean;
}

const StyledRemoveButton = styled.button<RemoveButtonProps>`
  font-size: 1rem;
  top: 0;
  right: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  color: red;
`;

export const RemoveButton: React.FC<RemoveButtonProps> = (props) => {
  return <StyledRemoveButton {...props}>X</StyledRemoveButton>;
};
