import React from "react";
import styled from "styled-components";
import { CardView } from "../features/cards/card";
import { PageLayout } from "../ui/page";
import { getCardParamsFromURL } from "../utils/get-params-from-url";

const CardPageLayout = styled(PageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;

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
  const cardProps = getCardParamsFromURL(
    new URLSearchParams(window.location.search)
  );
  return (
    <CardPageLayout>
      {cardProps ? <CardView {...cardProps} /> : <div>No card found</div>}
    </CardPageLayout>
  );
};
