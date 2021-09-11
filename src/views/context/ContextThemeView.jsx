import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ContextThemeView() {
  const { themeCollection, theme } = useContext(ThemeContext);
  return (
    <p
      style={{
        background: themeCollection[theme]?.background,
        color: themeCollection[theme]?.foreground,
        padding: "3em",
        fontSize: "1.3rem",
      }}
    >
      Theme View
    </p>
  );
}

export default ContextThemeView;
