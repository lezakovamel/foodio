import React, { useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import { useGetData } from "../../hooks/HookGetRecipes";
import SearchBar from "../molecules/SearchBar";
import SearchTemplate from "../templates/SearchTemplate";

const SearchPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setsearch] = useState("");
  const data = useGetData();
  
  const onSearchChanged = (query) => {
      console.log(data.cards);
      
    setFilteredData(data.cards.filter((val) => val.title.includes(query)));
    console.log(query);
    console.log(filteredData.cards);
    
  };
  return (
    <BaseTemplate title="Search foods">
      <SearchBar
        search={search}
        setSearch={setsearch}
        onSearchChange={onSearchChanged}
      />
      <SearchTemplate data={filteredData.cards} />
    </BaseTemplate>
  );
};

export default SearchPage;
