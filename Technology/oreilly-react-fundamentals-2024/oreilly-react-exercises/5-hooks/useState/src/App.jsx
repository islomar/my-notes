import "./App.css";
import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(25);
  const [name, setName] = useState("");

  const handleAgeIncrease = () => {
    setAge(age + 1);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <div className="app">
      <h1>Learning useState</h1>
      <div className="age">
        <p>
          I am {name} and I am {age} years old{" "}
        </p>
        <label htmlFor="nameInput">Enter your name:</label>
        <input type="text" id="nameInput" onChange={handleNameChange}></input>
      </div>

      <button onClick={handleAgeIncrease}>Increment age </button>
    </div>
  );
};

export default App;
