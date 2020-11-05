import React from "react";
import { CardProperties } from "./card";

export interface CardCreatorProps {
  addCard: (card: CardProperties) => void;
}

export const CardCreator: React.FC<CardCreatorProps> = ({ addCard }) => {
  const [cardProps, setCardProps] = React.useState<CardProperties>({
    backgroundColor: "#000000",
    textColor: "#ffffff",
    char: "",
  });

  return (
    <div>
      <div>
        Background Color
        <br />
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
      </div>
      <div>
        Text Color
        <br />
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
      </div>
      <div>
        Character:{" "}
        <input
          onChange={(e) =>
            setCardProps((c) => ({
              ...c,
              char: e.target.value as string,
            }))
          }
        />
      </div>
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
  );
};
