import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleClick} className={`button-${theme}`}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};
export default Button;
