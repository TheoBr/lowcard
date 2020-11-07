import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { Message } from "../../core/schema";
import { useLocalStorage } from "../../utils/use-storage";
import { mockAccountFactory, mockMessageFactory } from "./mock";
import { MessageItem } from "./message-item";

const StyledMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;

const StyledMessagesList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow-y: scroll;
  min-height: 0;
`;

const mockAccount = mockAccountFactory();

const MESSAGE_STORAGE_KEY = "lowcard-message-storage-key";

export const Messages: React.FC = () => {
  const [messages, setMessages] = useLocalStorage<Message[]>(
    MESSAGE_STORAGE_KEY,
    [
      mockMessageFactory(),
      mockMessageFactory(),
      mockMessageFactory(),
      mockMessageFactory(),
    ]
  );

  const sendMessage = (input: string) => {
    const newMessage: Message = {
      uuid: v4(),
      text: input,
      timestamp: new Date(),
      fromAccount: mockAccount,
    };

    setMessages((ms) => [newMessage, ...ms]);
  };

  return (
    <StyledMessagesContainer>
      <StyledMessagesList>
        {messages.map((message) => (
          <MessageItem {...message} key={message.uuid} />
        ))}
      </StyledMessagesList>
      <NewMessageInput sendMessage={sendMessage} />
    </StyledMessagesContainer>
  );
};

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
  border: none;
  color: ${(props) => props.theme.color};
`;

const StyledButton = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  border-radius: 8px;
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
      <StyledButton aria-label="Add an attachment">📎 </StyledButton>
      <StyledButton onClick={send}>Send</StyledButton>
    </StyledMessageInputContainer>
  );
};
