import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ContextThemeSelection() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>{theme}</p>
      <label htmlFor="darkTheme">
        <input
          type="checkbox"
          name="darkTheme"
          value={theme}
          checked={theme === "dark"}
          onChange={(e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        />
        Dark Theme
      </label>
    </div>
  );
  // return <p>Theme</p>;
}

export default ContextThemeSelection;
