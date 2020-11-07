import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { Message } from "../../core/schema";
import { useLocalStorage } from "../../utils/use-storage";
import { mockAccountFactory, mockMessageFactory } from "./mock";

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

const StyledMessage = styled.div`
  display: flex;
  padding: 1rem;
`;
const Author = styled.div`
  color: red;
  padding-right: 1rem;
`;

export const MessageItem: React.FC<Message> = (message) => {
  return (
    <StyledMessage>
      <Author>{message.fromAccount.name + ":"}</Author>
      {message.text}
    </StyledMessage>
  );
};

export interface NewMessageProps {
  sendMessage: (message: string) => void;
}

const StyledMessageInput = styled.div`
  padding: 1rem;
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
    <StyledMessageInput>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
      />
      <button onClick={send}>Send</button>
    </StyledMessageInput>
  );
};
