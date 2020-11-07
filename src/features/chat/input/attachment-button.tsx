import React, { useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { StyledButton } from "../../../ui/button";
import { getCardURL } from "../../../utils/get-card-url";
import { CardPickerBalloon } from "./card-picker-balloon";

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

/**
 * This component uses Popper to handle the balloon's positioning
 * More info: https://popper.js.org/
 */
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
          <CardPickerBalloon
            onCardClick={(card) => {
              submitAttachment(getCardURL(card));
              setVisible(false);
            }}
          />
        </Balloon>
      )}
    </>
  );
};
