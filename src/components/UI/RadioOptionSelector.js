import React from 'react';
import classes from './RadioOptionSelector.module.css';

const RadioOptionSelector = ({ title, options, selectedOption, onOptionChange }) => {
  return (
    <div className={classes['radio-option-selector']}>
      {title && <h4 className={classes.title}>{title}</h4>}
      <div className={classes.options}>
        {options.map((option) => (
          <label
            key={option.value}
            className={`${classes.option} ${
              selectedOption === option.value ? classes.active : ''
            }`}
          >
            <input
              type="radio"
              name="radioOptionSelector"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onOptionChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioOptionSelector;
