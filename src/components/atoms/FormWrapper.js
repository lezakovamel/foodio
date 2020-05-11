import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: auto;
  justify-self: center;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/images/${(props) => (props.theme.isDark ? "dark" : "light")}.svg);
  background-size: initial;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 5;
`;
