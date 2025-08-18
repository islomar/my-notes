
function Controls({activeIndex, setActiveIndex, numberOfImages}) {
    const handleDecrement = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleIncrement = () => {
        if (activeIndex < numberOfImages - 1) {
            setActiveIndex(activeIndex + 1);
        }
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
