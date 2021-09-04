import React, { useMemo, useState } from "react";
import { parse, format } from "date-fns";

function TimeInput({ initialValue = new Date() }) {
  const [value, setValue] = useState(format(initialValue, "HH:mm"));

  const formattedTime = useMemo(
    () => format(parse(value, "HH:mm", new Date()), "yyyy.MM.dd.HH.mm"),
    [value]
  );

  return (
    <div>
      <h3>Time Input</h3>
      <input
        type="time"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>Value: {value}</span>
      <span>Formatted: {formattedTime}</span>
    </div>
  );
}

export default TimeInput;
