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
  const urls = new linkify().match(message.text);
  return (
    <StyledMessage>
      <Author>{message.fromAccount.name}</Author>
      <ReactLinkify
        componentDecorator={(link, decoratedText, key) => {
          return (
            <StyledLink href={link} key={key}>
              {decoratedText}
            </StyledLink>
          );
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
      <div>
        {urls &&
          urls.map((link, index) => <MetadataView link={link} key={index} />)}
      </div>
    </StyledMessage>
  );
};

const supportedHosts = ["twitter.com", window.location.hostname, "youtube.com"];

export const MetadataView: React.FC<{ link: linkify.Match }> = ({ link }) => {
  const url = new URL(link.url);

  // Early escape if link type isn't supported
  if (!supportedHosts.includes(url.hostname)) {
    return null;
  }

  // Twitter embed
  if (url.hostname === "twitter.com") {
    return <div>Tweet</div>;
  }
  return <div>{url.host}</div>;
};
