function Controls({ activeIndex, setActiveIndex }) {
  const handleDecrement = () => {
    activeIndex > 0 ?? setActiveIndex(activeIndex - 1);
  };

  const handleIncrement = () => {
    setActiveIndex(activeIndex + 1);
  };
  return (
    <div>
      <button className="left" onClick={handleDecrement}>
        {"<"}
      </button>
      <button className="right" onClick={handleIncrement}>
        {">"}
      </button>
    </div>
  );
}

export default Controls;
