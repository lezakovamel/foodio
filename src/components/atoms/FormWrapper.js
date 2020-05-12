import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-image: url(${process.env.PUBLIC_URL}/images/${(props) => (props.theme.isDark ? "dark" : "light")}.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 5;
`;
