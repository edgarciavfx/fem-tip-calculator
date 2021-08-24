import React from 'react';
import '../styles/PerPerson.css';

function PerPerson({ title, tip, people }) {
  const total = (tip / people).toFixed(2);
  const output = !isNaN(total) && people > 0 ? `${total}` : '0.00';

  return (
    <div className='PerPerson'>
      <div className='PerPerson-title-container'>
        <p className='PerPerson-title'>{title}</p>
        <p className='PerPerson-text'>/ person</p>
      </div>
      <h2 className='PerPerson-output'>${output}</h2>
    </div>
  );
}

export default PerPerson;
