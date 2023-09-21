import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchIcon() {
  return (
    <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default SearchIcon;
