import React from "react";
import styled from "styled-components";
import { AttachmentButton } from "../input/attachment-button";
import { StyledButton } from "../../../ui/button";

export interface NewMessageProps {
  sendMessage: (message: string) => void;
}

const StyledMessageInputContainer = styled.div`
  margin: 1rem;
  display: flex;
`;

const StyledInput = styled.input`
  border-radius: 8px;
  background-color: #032c40;
  flex-grow: 1;
  font-size: 20px;
  padding: 1rem;
  margin-right: 1rem;
  border: none;
  color: ${(props) => props.theme.color};
`;

export const NewMessageInput: React.FC<NewMessageProps> = ({ sendMessage }) => {
  const [input, setInput] = React.useState("");

  const send = () => {
    if (input === "") {
      return;
    }
    sendMessage(input);
    setInput("");
  };

  return (
    <StyledMessageInputContainer>
      <StyledInput
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
        placeholder="Send a message"
      />
      <AttachmentButton submitAttachment={sendMessage} />
      <StyledButton onClick={send}>Send</StyledButton>
    </StyledMessageInputContainer>
  );
};
