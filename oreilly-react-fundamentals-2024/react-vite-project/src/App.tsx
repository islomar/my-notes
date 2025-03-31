import './App.css'

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

    return (
        <div className="App">
            <h1
                style={{color: fontColor}}
                onMouseMove={handleMouseMove}>Creating React Components
            </h1>
            <button className={"change-color-button"} onClick={handleClick}>Click me to change font color</button>
            <Name name={myName}/>
            <ProfilePicture imgSrc="https://cataas.com/cat"/>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange}/>
            </form>
        </div>
    )
}

export default App
