import React from 'react';
import TipAmount from '../TipAmount/TipAmount';
import TipCustom from '../TipCustom/TipCustom';
import './TipInput.css';

const TipInput = ({ handleInput }) => {
  const tipAmounts = [5, 10, 15, 25, 50];
  return (
    <div className="tip-input">
      <h2>Select Tip %</h2>
      <div className="tip-input-container">
        {tipAmounts.map((tipAmount) => (
          <TipAmount amount={tipAmount} handleInput={handleInput} />
        ))}
        <TipCustom handleInput={handleInput} />
      </div>
    </div>
  );
};

export default TipInput;
