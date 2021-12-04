import React from "react";

const TextInput = (props) => {
  const { name, value, type, control } = props;
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => control(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
