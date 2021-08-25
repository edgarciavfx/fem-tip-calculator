import React from 'react';
import './ResetButton.css';

function ResetButton({ isDisabled, handleReset }) {
  return (
    <button className="ResetButton" onClick={handleReset} disabled={isDisabled}>
      Reset
    </button>
  );
}

export default ResetButton;
