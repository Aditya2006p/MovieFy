import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <div className="p-4 flex items-center">
      <input
        type="text"
        className="w-full p-2 rounded border"
        placeholder="Search for a movie..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;