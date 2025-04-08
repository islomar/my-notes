import "./App.css";
import styles from "./Button.module.css";

const App = () => {
  const colorOftheDay = "white";

  const divStyle = {
    backgroundColor: colorOftheDay,
  };

  return (
    <div style={divStyle}>
      <h1 className="red-heading"> Learning styles in React</h1>
      <button className={styles.blackButton}>Click Me</button>
      <button className={styles.blueButton}>Click Me</button>
    </div>
  );
};

export default App;
