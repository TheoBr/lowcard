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
`;

export const CardView: React.FC<CardProperties> = (card) => {
  return <StyledCard {...card}>{card.char}</StyledCard>;
};
