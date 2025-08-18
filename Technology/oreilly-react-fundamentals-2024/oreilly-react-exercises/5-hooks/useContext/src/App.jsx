import React from "react";
import "./App.css";
import Button from "./Button";
import ThemeContext from "./ThemeContext";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
