import "./App.css";

const App = () => {
  let fontColor = "red";
  const handleClick = () => {
    console.log("I was clicked!");
    fontColor = fontColor === "red" ? "blue" : "red";
    document.querySelector("h1").style.color = fontColor;
  };

  const handleMouseMove = () => {
    console.log("mouse moved");
  };

  const handleInputChange = (event) => {
    console.log(event);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div className="app">
      <h1 style={{ color: fontColor }} onMouseMove={handleMouseMove}>
        Creating React Components
      </h1>
      <button onClick={handleClick}>Click Me To Change Font Color</button>

      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInputChange}></input>
      </form>
    </div>
  );
};

export default App;
