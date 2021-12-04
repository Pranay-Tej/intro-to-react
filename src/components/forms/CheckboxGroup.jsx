import React from "react";

const CheckboxGroup = (props) => {
  const { name, value, control, options } = props;

  return (
    <div>
      {options &&
        options.map((option) => (
          <div key={option.value}>
            <input
              type="checkbox"
              name={name}
              id={`${name}-${option.value}`}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={(event) => {
                if (event.target.checked) {
                  control((previousValue) => [
                    ...previousValue,
                    event.target.value,
                  ]);
                } else {
                  control((previousValue) =>
                    previousValue.filter((val) => val !== event.target.value)
                  );
                }
              }}
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        ))}
    </div>
  );
};

export default CheckboxGroup;
