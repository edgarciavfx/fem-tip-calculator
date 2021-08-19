import React from 'react';

function ResetButton({ isDisabled, handleReset }) {
  return (
    <button onClick={handleReset} disabled={isDisabled}>
      Reset
    </button>
  );
}

export default ResetButton;
