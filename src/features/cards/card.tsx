import React from "react";
import styled from "styled-components";
import { CardProperties } from "../../core/schema";

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
  copyURL?: () => void;
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
      {card.copyURL && <CopyButton show={showButtons} onClick={card.copyURL} />}
      {card.char}
    </StyledCard>
  );
};

export interface ButtonProps {
  onClick: () => void;
  show: boolean;
}

const StyledRemoveButton = styled.button<ButtonProps>`
  font-size: 1rem;
  top: 0;
  right: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  color: red;
`;

export const RemoveButton: React.FC<ButtonProps> = (props) => {
  return <StyledRemoveButton {...props}>X</StyledRemoveButton>;
};

const StyledCopyButton = styled.button<ButtonProps>`
  font-size: 1rem;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  color: red;
`;

export const CopyButton: React.FC<ButtonProps> = (props) => {
  return <StyledCopyButton {...props}>📋</StyledCopyButton>;
};
