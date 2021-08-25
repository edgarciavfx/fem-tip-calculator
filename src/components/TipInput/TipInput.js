import React from 'react';
import TipAmount from '../TipAmount/TipAmount';
import TipCustom from '../TipCustom/TipCustom';
import './TipInput.css';

function TipInput({ handleInput }) {
  return (
    <div className="TipInput">
      <h2>Select Tip %</h2>
      <div className="TipInput-container">
        <TipAmount amount={5} handleInput={handleInput} />
        <TipAmount amount={10} handleInput={handleInput} />
        <TipAmount amount={15} handleInput={handleInput} />
        <TipAmount amount={25} handleInput={handleInput} />
        <TipAmount amount={50} handleInput={handleInput} />
        <TipCustom handleInput={handleInput} />
      </div>
    </div>
  );
}

export default TipInput;
