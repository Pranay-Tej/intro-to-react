import React, { useMemo, useState } from "react";
import { parse, format } from "date-fns";

function DateInput({ initialValue = new Date() }) {
  const [value, setValue] = useState(format(initialValue, "yyyy-MM-dd"));

  const formattedDate = useMemo(
    () => format(parse(value, "yyyy-MM-dd", new Date()), "dd.MM.yyyy"),
    [value]
  );

  return (
    <div>
      <h3>Date Input</h3>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>Value: {value}</span>
      <span>Formatted: {formattedDate}</span>
    </div>
  );
}

export default DateInput;
