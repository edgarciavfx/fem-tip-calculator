import React from 'react';

function PerPerson({ title, tip, people }) {
  const total = (tip / people).toFixed(2);
  // total = isNaN(tab) ? total : (total += tip);
  const output = !isNaN(total) && people > 0 ? `${total}` : '0.00';

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>/ person</p>
      </div>
      <h2>${output}</h2>
    </div>
  );
}

export default PerPerson;
