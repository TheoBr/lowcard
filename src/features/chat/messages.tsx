import React from "react";
import { Message } from "../../core/schema";
import { mockMessageFactory } from "./mock";

export const Messages: React.FC = () => {
  const [messages] = React.useState<Message[]>([
    mockMessageFactory(),
    mockMessageFactory(),
    mockMessageFactory(),
    mockMessageFactory(),
  ]);

  return (
    <div>
      {messages.map((message) => (
        <div>{message.text}</div>
      ))}
    </div>
  );
};
