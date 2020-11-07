import styled from "styled-components";

export const PageLayout = styled.div`
  min-height: 100vh;

  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  font-size: 20px;

  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;
