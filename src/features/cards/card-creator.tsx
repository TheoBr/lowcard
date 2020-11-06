import React from "react";
import styled from "styled-components";
import { CardProperties, CardView } from "./card";

export interface CardCreatorProps {
  addCard: (card: CardProperties) => void;
}

const CreatorLayout = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;

export const CardCreator: React.FC<CardCreatorProps> = ({ addCard }) => {
  const [cardProps, setCardProps] = React.useState<CardProperties>({
    backgroundColor: "#000000",
    textColor: "#ffffff",
    char: "A",
  });

  return (
    <CreatorLayout>
      <CardView {...cardProps} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        Background Color
        <input
          type="color"
          value={cardProps.backgroundColor}
          onChange={(e) =>
            setCardProps((c) => ({
              ...c,
              backgroundColor: e.target.value as string,
            }))
          }
        />
        <br />
        Text Color
        <input
          type="color"
          value={cardProps.textColor}
          onChange={(e) =>
            setCardProps((c) => ({
              ...c,
              textColor: e.target.value as string,
            }))
          }
        />
        <br />
        Character:
        <input
          value={cardProps.char}
          onChange={(event) => {
            const input = event.target.value;
            setCardProps((c) => ({
              ...c,
              char: input[input.length - 1],
            }));
          }}
        />
        <br />
        <div>
          <button
            onClick={() => {
              if (
                cardProps?.backgroundColor &&
                cardProps?.char &&
                cardProps?.textColor
              ) {
                addCard(cardProps as CardProperties);
              }
            }}
          >
            Save card
          </button>
        </div>
      </div>
    </CreatorLayout>
  );
};
