import React from 'react';
import './PerPerson.css';

const PerPerson = ({ title, tip }) => {
  return (
    <div className="per-person">
      <div className="per-person-title-container">
        <p className="per-person-title">{title}</p>
        <p className="per-person-text">/ person</p>
      </div>
      <h2 className="per-person-output">${tip}</h2>
    </div>
  );
};

export default PerPerson;
