import React from "react";
import styled from "styled-components";
import { CardProperties, CardView } from "./card";

export interface CardCreatorProps {
  addCard: (card: CardProperties) => void;
}

const CreatorLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  font-weight: 700;
`;

const CreatorWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 106, 255, 0.3) 0%,
      rgba(77, 196, 125, 0.7) 100%
    ),
    url("/static/checker.svg");
  background-color: #48bb78;
  background-size: auto, 300px;
`;

const DEFAULT_CARD = {
  backgroundColor: "#000000",
  textColor: "#ffffff",
  char: "A",
};

export const CardCreator: React.FC<CardCreatorProps> = ({ addCard }) => {
  const [cardProps, setCardProps] = React.useState<CardProperties>(
    DEFAULT_CARD
  );

  return (
    <CreatorWrapper>
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
          Character
          <input
            value={cardProps.char}
            onPaste={(paste) => {
              // Paste is not handled properly with onInput, handled separately here
              const input = paste.clipboardData.getData("text");
              setCardProps((c) => ({
                ...c,
                char: input[input.length - 1],
              }));
            }}
            onChange={(event) => {
              // We need the character that was input (only exists on native event)
              // Native event was untyped, so this had to be manually alias'd
              const nativeEventShim = (event.nativeEvent as unknown) as {
                data: string;
              };

              // Return early if no data (usually from delete key and space presses)
              if (
                nativeEventShim.data === null ||
                nativeEventShim.data === " "
              ) {
                return;
              }

              // Update state with new "char"
              setCardProps((c) => ({
                ...c,
                char: nativeEventShim.data,
              }));
            }}
          />
          <br />
          <div>
            <button
              onClick={() => {
                addCard(cardProps as CardProperties);
                setCardProps(DEFAULT_CARD);
              }}
            >
              Save card
            </button>
          </div>
        </div>
      </CreatorLayout>
      <img
        src="/static/blob_cut.svg"
        style={{
          display: "block",
          zIndex: 10,
          marginBottom: "-1px",
        }}
      />
    </CreatorWrapper>
  );
};
