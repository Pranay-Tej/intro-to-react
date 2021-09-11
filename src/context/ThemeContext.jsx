import React, { useState, createContext } from "react";

const themeCollection = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ themeCollection, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
