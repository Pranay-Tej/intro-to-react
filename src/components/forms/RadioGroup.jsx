import React from "react";

const RadioGroup = (props) => {
  const { name, value, control, options } = props;

  return (
    <div>
      {options &&
        options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              name={name}
              id={`${name}-${option.value}`}
              value={option.value}
              checked={option.value === value}
              onChange={(event) => control(event.target.value)}
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        ))}
    </div>
  );
};

export default RadioGroup;
