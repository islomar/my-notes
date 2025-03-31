import './App.css'

const Name = (props) => {
    const { name } = props
    return <p className="name-heading"> Hi, {name}!</p>
}

const ProfilePicture = (props: { imgSrc: string }) => {
    return <img className="profile-picture" src={props.imgSrc} />;
}

const App = () => {
    const myName = "Isi"
    return (
        <div className="App">
            <Name name={myName}/>
            <ProfilePicture imgSrc="https://cataas.com/cat" />
        </div>
    )
}

export default App
