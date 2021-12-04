import React from "react";

const Select = (props) => {
  const { name, value, control, options, multiple = false } = props;

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        value={value}
        multiple={multiple}
        onChange={(event) => {
          let selectedValue;
          if (multiple) {
            selectedValue = [...event.target.selectedOptions].map(
              (option) => option.value
            );
          } else {
            selectedValue = event.target.value;
          }
          control(selectedValue);
        }}
      >
        {!multiple && <option value="">Select {name}</option>}

        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
