import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.padding.medium};
  justify-content: space-between;
  background-image: url(${process.env.PUBLIC_URL}/images/${(props) => (props.theme.isDark ? "dark" : "light")}.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 5;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
