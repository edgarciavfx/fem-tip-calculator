import React, { useState } from 'react';

export default function NumberInput({ name, icon, handleInput }) {
  const [number, setNumber] = useState();

  const handleChange = (e) => {
    setNumber(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <div>
      <p>{name}</p>
      <img src={icon} alt={`${name}-icon`} />
      <input
        type="number"
        name={name}
        value={number}
        onChange={handleChange}
        placeholder={0}
      />
    </div>
  );
}
