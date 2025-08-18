import './App.css'
import {useEffect, useState} from "react";

const Name = (props) => {
    const {name} = props
    return <p className="name-heading"> Hi, {name}!</p>
}

const ProfilePicture = (props: { imgSrc: string }) => {
    return <img className="profile-picture" src={props.imgSrc}/>;
}

const App = () => {
    let fontColor = "red";
    const myName = "Isi"

    const handleMouseMove = () => {
        console.log("mouse moved")

    }

    const handleClick = () => {
        fontColor = fontColor === "red" ? "blue" : "red";
        document.querySelector("h1").style.color = fontColor;
    }

    const handleInputChange = (event) => {
        console.log("input change", event.target.value)
    }

    const handleFormSubmit = (event) => {
        console.log(event.target.value);
        event.preventDefault(); // it prevents the page from refreshing
    }

    // const names: string[] = ["Isi", "John", "Jane", "Doe"];
    const names: string[] = [];

    const [age, setAge] = useState(25);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="App">
            <h1
                style={{color: fontColor}}
                onMouseMove={handleMouseMove}>Creating React Components
            </h1>
            <button className={"change-color-button"} onClick={handleClick}>Click me to change font color</button>
            <Name name={myName}/>
            <ProfilePicture imgSrc="https://cataas.com/cat"/>

            <div>
                <p>I am {age} years old</p>
                <p>Time: {time} seconds</p>
            </div>
            <button onClick={() => setAge(age + 1)}>Increment age</button>

            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange}/>
            </form>
            <ul>
                {names.length > 0 ?
                    names.map((name, index) => <li key={index}>{name}</li>) :
                    (<li>No names available</li>)
                }
            </ul>
        </div>
    )
}

export default App
