import React from 'react';

function CustomButton({ className, onClick, disabled = false, buttonLabel }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonLabel}
    </button>
  );
}

export default CustomButton;
