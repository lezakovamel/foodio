import styled from "@emotion/styled";

export const P = styled.p`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primaryDark};
`;
