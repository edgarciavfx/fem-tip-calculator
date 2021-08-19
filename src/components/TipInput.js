import React from 'react';
import TipAmount from './TipAmount';
import TipCustom from './TipCustom';

function TipInput({ handleInput }) {
  return (
    <div>
      <p>Select Tip %</p>
      <TipAmount amount={5} handleInput={handleInput} />
      <TipAmount amount={10} handleInput={handleInput} />
      <TipAmount amount={15} handleInput={handleInput} />
      <TipAmount amount={25} handleInput={handleInput} />
      <TipAmount amount={50} handleInput={handleInput} />
      <TipCustom handleInput={handleInput} />
    </div>
  );
}

export default TipInput;
