import { useState } from "react";

const useSearch = (initialMembers) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(initialMembers);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const result = filteredData.filter((it) => it.name.includes(search));
    setFilteredData(result);
  };
  return { search, filteredData, handleSearchChange, handleSearch };
};

export default useSearch;
