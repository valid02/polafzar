import React from 'react';
import './Checkbox.css';

const Checkbox = ({ id, size = "30px", checked, onChange, name }) => {
  return (
    <div className="checkbox-wrapper-23">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} name={name} />
      <label htmlFor={id} style={{ '--size': size }}>
        <svg viewBox="0 0 50 50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
