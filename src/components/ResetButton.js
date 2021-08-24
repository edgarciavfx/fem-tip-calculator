import React from 'react';
import '../styles/ResetButton.css';

function ResetButton({ isDisabled, handleReset }) {
  return (
    <button className="ResetButton" onClick={handleReset} disabled={isDisabled}>
      Reset
    </button>
  );
}

export default ResetButton;
