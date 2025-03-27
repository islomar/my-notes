import './App.css'

const Name = () => {
    return <p className="name-heading"> Hi, Isi! </p>
}

const ProfilePicture = (props: { imgSrc: string }) => {
    return <img className="profile-picture" src={props.imgSrc} />;
}

const App = () => {

    return (
        <div className="App">
            <Name/>
            <ProfilePicture imgSrc="https://cataas.com/cat" />
        </div>
    )
}

export default App
