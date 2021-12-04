import React, { useState } from "react";

function DynamicFormArray(props) {
  const { value, control } = props;

  return (
    <div>
      <h3>Dynamic Form Array</h3>
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
    </div>
  );
}

export default DynamicFormArray;
