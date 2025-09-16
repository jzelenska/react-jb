import React, { useState } from "react";
import { debounce } from "../../utils/debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 400);

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search jobs..."
      className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;


