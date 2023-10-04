import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form className="search-box">
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className="searchInput">
        <input type="text" placeholder="Search" />
      </div>
    </form>
  );
}

export default SearchBar;
