import styled from "@emotion/styled";

export const P = styled.p`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
  white-space: pre-line;
`;
export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.error};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
  white-space: pre-line;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primaryDark};
`;

export const LogoTitle = styled.div`
  margin: auto;
  font-size: 72px;
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;
