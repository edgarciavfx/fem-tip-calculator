import React, { useState } from 'react';
import './NumberInput.css';

const NumberInput = ({ name, icon, handleInput }) => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <div className="number-input">
      <h6>{name}</h6>
      <div className="number-input-container">
        <img src={icon} alt={`${name}-icon`} />
        <input
          type="number"
          name={name}
          value={number > 0 ? number : ''}
          onChange={handleChange}
          placeholder={0}
        />
      </div>
    </div>
  );
};

export default NumberInput;
