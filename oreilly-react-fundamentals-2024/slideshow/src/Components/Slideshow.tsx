import Slide from "./Slide.tsx";
import Controls from "./Controls.tsx";
import "./style.css";
import {useState} from "react";

const images = [
    {
        url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Blue domes in greece",
    },
    {
        url: "https://images.pexels.com/photos/575362/pexels-photo-575362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Tower bridge in London",
    },
    {
        url: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Boats in Venice",
    },
];

const Slideshow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className="slideshow-container">
            <h1>Slideshow component</h1>
            <Slide image={ images[imageIndex] }/>
            <Controls activeIndex={imageIndex} setActiveIndex={setImageIndex} numberOfImages={images.length}/>
        </div>
    );
};

export default Slideshow;