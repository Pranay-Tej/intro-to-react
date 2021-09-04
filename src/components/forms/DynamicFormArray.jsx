import React, { useState } from "react";

function DynamicFormArray({ initialValue = [] }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Text Input</h3>
      {value.map((v, i) => (
        <div key={i}>
          <input
            type="text"
            value={value[i]}
            onChange={(e) =>
              setValue((previousValue) =>
                previousValue.map((prev_v, j) =>
                  i === j ? e.target.value : prev_v
                )
              )
            }
          />
          <button
            onClick={() => {
              setValue((previousValue) =>
                previousValue.filter((v, j) => i !== j)
              );
            }}
          >
            X
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          setValue((previousValue) => [...previousValue, ""]);
        }}
      >
        +
      </button>
      <span>Value: {value}</span>
    </div>
  );
}

export default DynamicFormArray;
