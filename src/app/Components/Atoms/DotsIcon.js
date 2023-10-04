import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons'; // You can use a different icon if needed

function DotsIcon() {
  return (
    <div className="nine-dots-icon">
      <FontAwesomeIcon icon={faTh} />
    </div>
  );
}

export default DotsIcon;
