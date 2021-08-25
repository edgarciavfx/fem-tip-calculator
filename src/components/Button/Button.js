import React from 'react';
import './Button.css';

const Button = ({ isDisabled, onClick }) => {
  return (
    <button className="button" onClick={onClick} disabled={isDisabled}>
      Reset
    </button>
  );
};

export default Button;
