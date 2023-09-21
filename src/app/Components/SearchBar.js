import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

function SearchBar() {
  return (
    <form>
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input type="text" placeholder="Search" />
    </form>
  );
}

export default SearchBar;
