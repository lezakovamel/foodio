import React, { useState } from "react";

import { Input } from "../atoms/FormFields";


const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  return (
      <Input
        type="text"
        setValue={setSearch}
        value={search}
        onChange={onSearchChange}
      />
  );
};

export default SearchBar;
