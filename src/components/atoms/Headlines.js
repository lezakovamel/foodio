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

export const CardH3 = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-top: auto;
  margin-bottom: none !important;
  margin: auto !important;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.5em;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1em;
  }
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

export const DeskH1 = styled.h1`
  color: ${(props) => props.theme.colors.primaryDark};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
    text-align: ${(props) => (props.centered ? `center` : `left`)};
  }
`;

export const MobH1 = styled.h1`
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: center;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
