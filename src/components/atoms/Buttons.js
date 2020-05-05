import styled from "@emotion/styled";

export const Button = styled.button`
  box-sizing: border-box;
  width: 20vw;
  height: 5vh;
  margin-top: 3vh;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;
