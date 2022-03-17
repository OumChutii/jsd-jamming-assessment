import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleTremChange =(e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist" 
        value={searchTerm} 
        onChange={handleTremChange} 
      />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  )
}

export default SearchBar;
