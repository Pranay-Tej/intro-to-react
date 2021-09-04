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
            // value={TODO}
            // onChange={TODO}
          />
          <button
          // onClick={TODO}
          >
            X
          </button>
        </div>
      ))}
      <button
      // onClick={TODO}
      >
        +
      </button>
      <span>Value: {value}</span>
    </div>
  );
}

export default DynamicFormArray;
