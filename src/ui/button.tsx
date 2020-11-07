import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  border-radius: 8px;
  color: ${(props) => props.theme.color};
`;
