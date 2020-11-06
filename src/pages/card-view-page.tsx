import React from "react";
import styled from "styled-components";
import { CardView } from "../features/cards/card";

const CardPageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  font-size: 20px;

  color: ${(props) => props.theme.color};
  background: linear-gradient(
      0deg,
      rgba(0, 106, 255, 0.3) 0%,
      rgba(77, 196, 125, 0.7) 100%
    ),
    url("/static/checker.svg");
  background-size: auto, 300px;
  background-color: #48bb78;
`;

export const CardViewPage = () => {
  const cardProps = getCardParamsFromURL();
  return (
    <CardPageLayout>
      {cardProps ? <CardView {...cardProps} /> : <div>No card found</div>}
    </CardPageLayout>
  );
};

export const getCardParamsFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const char = urlParams.get("char");
  const backgroundColor = urlParams.get("backgroundColor");
  const textColor = urlParams.get("textColor");

  if (!char || !backgroundColor || !textColor) {
    return;
  }

  return { char, backgroundColor, textColor };
};
