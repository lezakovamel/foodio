import styled from "@emotion/styled";

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primaryDark};
`;
export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.primaryDark};
`;
export const H3 = styled.h3`
  color: ${(props) => props.theme.colors.primaryDark};
`;
export const H4 = styled.h4`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;
export const H5 = styled.h5`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;
export const H6 = styled.h6`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;
