import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setTime((prevTime) => prevTime + 1);
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="app">
      <h1>Learning useEffect</h1>

      <p> Time: {time} seconds</p>
    </div>
  );
};

export default App;
