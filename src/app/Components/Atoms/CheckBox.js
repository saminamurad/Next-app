import React, { useState } from 'react';

function CheckboxButton() {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxToggle}
        />
        
      </label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}

export default CheckboxButton;
