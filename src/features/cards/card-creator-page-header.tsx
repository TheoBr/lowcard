import React from "react";
import styled from "styled-components";
import { CardProperties } from "../../core/schema";
import { StyledHeaderWithBlob } from "../../ui/header";
import { CardCreator } from "./card-creator";

export interface CardCreatorProps {
  addCard: (card: CardProperties) => void;
  centerContent?: boolean;
}

const CreatorLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  font-weight: 700;
`;

export const CardCreatorPageHeader: React.FC<CardCreatorProps> = (props) => {
  return (
    <StyledHeaderWithBlob>
      <CreatorLayout>
        <CardCreator {...props} />
      </CreatorLayout>
    </StyledHeaderWithBlob>
  );
};
