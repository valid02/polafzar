import React from 'react';
import './Checkbox.css';

const Checkbox = ({ id, size = "30px" }) => {
  return (
    <div className="checkbox-wrapper-23">
      <input type="checkbox" id={id} />
      <label htmlFor={id} style={{ '--size': size }}>
        <svg viewBox="0 0 50 50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
