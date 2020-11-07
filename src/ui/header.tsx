import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 106, 255, 0.3) 0%,
      rgba(77, 196, 125, 0.7) 100%
    ),
    url("/static/checker.svg");
  background-color: #48bb78;
  background-size: auto, 300px;
`;

export const StyledHeaderWithBlob: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <HeaderMenu />
      {children}
      <img
        src="/static/blob_cut.svg"
        style={{
          display: "block",
          zIndex: 10,
          marginBottom: "-1px",
        }}
      />
    </StyledHeader>
  );
};

const StyledHeaderMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 4px;
  top: 4px;
`;

const StyledLink = styled.a`
  transition-property: color;
  transition-duration: 0.3s;
  color: ${(props) => props.theme.color};
  text-decoration: none;
  :hover {
    color: #54ebf0;
  }
  padding-bottom: 0.25rem;
`;

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <StyledLink href="https://lowkey.gg/">LOWKEY</StyledLink>
      <StyledLink href="/chat">Chat</StyledLink>
      <StyledLink href="/">Card Creator</StyledLink>
    </StyledHeaderMenu>
  );
};
