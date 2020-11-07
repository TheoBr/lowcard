import React from "react";
import styled from "styled-components";
import { Messages } from "../features/chat/messages";
import { StyledHeader } from "../ui/header";
import { PageLayout } from "../ui/page";

const Header = styled(StyledHeader)`
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const ChatPage: React.FC = () => {
  return (
    <PageLayout>
      <StyledHeader>
        <Header>Chat page</Header>
      </StyledHeader>
      <Messages />
    </PageLayout>
  );
};
