import React from "react";
import ReactLinkify from "react-linkify";
import styled from "styled-components";
import linkify from "linkify-it";
import { Message } from "../../core/schema";
import { CardView } from "../cards/card";

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
          // Hide URL if localhost card link
          if (window.location.hostname === new URL(link).hostname) {
            return null;
          }

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

export const MetadataView: React.FC<{ link: linkify.Match }> = ({ link }) => {
  const url = new URL(link.url);

  // Twitter embed
  if (url.hostname === "twitter.com") {
    // return <div>Tweet Embed</div>;
    return null;
  }

  // Twitter embed
  if (url.hostname === "youtube.com") {
    // return <div>Youtube Embed</div>;
    return null;
  }

  // Card embed
  if (url.hostname === window.location.hostname) {
    const cardProps = getCardParamsFromURL(url);
    if (cardProps) {
      return (
        <CardView
          {...cardProps}
          onCardClick={() => {
            window.open(url.href);
          }}
        />
      );
    }
  }

  return null;
};

const getCardParamsFromURL = (url: URL) => {
  const { searchParams } = url;
  const char = searchParams.get("char");
  const backgroundColor = searchParams.get("backgroundColor");
  const textColor = searchParams.get("textColor");

  if (!char || !backgroundColor || !textColor) {
    return;
  }

  return { char, backgroundColor, textColor };
};
