import { useState } from "react";

import "./App.css";

const Name = ({ name }) => {
  return <p className="name-heading">Hi, {name}</p>;
};

const ProfilePicture = ({ imgSrc }) => {
  return <img className="profile-picture" src={imgSrc} />;
};

const App = () => {
  return (
    <div className="App">
      <Name name="Shruti Kapoor" />
      <ProfilePicture imgSrc="https://avatars.githubusercontent.com/u/2525914?v=4" />
    </div>
  );
};

export default App;
