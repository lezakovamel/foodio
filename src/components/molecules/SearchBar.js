import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "@emotion/styled";
const SearchbarWrapper = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: 5px;
  width: fit-content;
`;
const SearchBar = ({ handleChange, recipeName }) => {
  return (
    <SearchbarWrapper>
      <input
        onChange={handleChange}
        value={recipeName}
        onFocus={() => {
          alert("now");
        }}
      ></input>
    </SearchbarWrapper>
  );
};

export default SearchBar;
