import React from "react";
import ReactLinkify from "react-linkify";
import styled from "styled-components";
import linkify from "linkify-it";
import { Message } from "../../core/schema";

const StyledMessage = styled.div`
  display: inline-block;
  padding: 1rem;
`;
const Author = styled.div`
  color: red;
  padding-right: 1rem;
`;

const StyledLink = styled.a`
  transition-property: color;
  transition-duration: 0.3s;
  color: #54ebf0;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.color};
  }
  padding-bottom: 0.25rem;
  cursor: pointer;
`;

export const Link: React.FC = ({ children }) => (
  <StyledLink>{children}</StyledLink>
);

export const MessageItem: React.FC<Message> = (message) => {
  const links = new linkify().match(message.text);
  console.log(links);
  return (
    <StyledMessage>
      <Author>{message.fromAccount.name}</Author>
      <ReactLinkify
        componentDecorator={(link, decoratedText) => {
          return <StyledLink href={link}>{decoratedText}</StyledLink>;
        }}
        textDecorator={(url) => {
          const formatted = url.replace(/(^\w+:|^)\/\//, "");
          return formatted.length > 18
            ? formatted.substr(0, 15) + "..."
            : formatted;
        }}
      >
        {message.text}
      </ReactLinkify>
    </StyledMessage>
  );
};
