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
            value={value[i]}
            onChange={(e) =>
              control((previousValue) =>
                previousValue.map((prev_v, j) =>
                  i === j ? e.target.value : prev_v
                )
              )
            }
          />
          <button
            onClick={() => {
              control((previousValue) =>
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
          control((previousValue) => [...previousValue, ""]);
        }}
      >
        +
      </button>
    </div>
  );
}

export default DynamicFormArray;
