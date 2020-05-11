import React from "react";
import styled from "@emotion/styled";
import { Input } from "../atoms/FormFields";

const SearchbarWrapper = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: 5px;
  width: fit-content;
`;
const SearchBar = ({ search, setSearch, onSearchChange }) => {
  return (
    <SearchbarWrapper>
      <Input
        type="text"
        setValue={setSearch}
        value={search}
        onChange={onSearchChange}
      />
    </SearchbarWrapper>
  );
};

export default SearchBar;
