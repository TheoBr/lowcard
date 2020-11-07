import React from "react";
import styled from "styled-components";
import { Messages } from "../features/chat/messages";
import { StyledHeader } from "../ui/header";
import { PageLayout } from "../ui/page";

const Header = styled(StyledHeader)`
  padding: 2rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const ChatPageLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ChatPage: React.FC = () => {
  return (
    <ChatPageLayout>
      <StyledHeader>
        <Header>Chat page</Header>
      </StyledHeader>
      <Messages />
    </ChatPageLayout>
  );
};
