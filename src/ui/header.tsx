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
