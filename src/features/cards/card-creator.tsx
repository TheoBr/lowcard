import React from "react";
import { CardProperties } from "../../core/schema";
import { CardView } from "./card";

export interface CardCreatorProps {
  addCard: (card: CardProperties) => void;
  centerContent?: boolean;
}

const DEFAULT_CARD = {
  backgroundColor: "#000000",
  textColor: "#ffffff",
  char: "A",
};

// Base component that returns fragment-wrapped creation components
// Allows for easy styling by parent
export const CardCreator: React.FC<CardCreatorProps> = ({
  addCard,
  centerContent,
}) => {
  const [cardProps, setCardProps] = React.useState<CardProperties>(
    DEFAULT_CARD
  );

  return (
    <>
      <CardView {...cardProps} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: centerContent ? "center" : undefined,
        }}
      >
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

            // Get codePoint for first character in paste (charAt doesn't handle emoji)
            const charVal = input.codePointAt(0);

            // Early return if no values found
            if (charVal === undefined) {
              return;
            }

            // Update state with new char
            setCardProps((c) => ({
              ...c,
              char: String.fromCodePoint(charVal),
            }));
          }}
          onChange={(event) => {
            // We need the character that was input (only exists on native event)
            // Native event was untyped, so this had to be manually alias'd
            const nativeEventShim = (event.nativeEvent as unknown) as {
              data: string;
            };

            // Return early if no data (usually from delete key and space presses)
            if (nativeEventShim.data === null || nativeEventShim.data === " ") {
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
    </>
  );
};
