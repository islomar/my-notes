import Slide from "./Slide.tsx";
import Controls from "./Controls.tsx";
import "./style.css";
import {useState, useEffect} from "react";

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

const API_URL = "https://dummyjson.com/products";

const Slideshow = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [products, setProducts] = useState({});

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await response.json();
                setProducts(jsonData?.products);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    console.log({ products });

    return (
        <div className="slideshow-container">
            <h1>Slideshow component</h1>
            {products.length > 0 && (
                <>
                    <Slide product={ products[imageIndex] }/>
                    <Controls activeIndex={imageIndex} setActiveIndex={setImageIndex} numberOfImages={products.length}/>
                </>
            )};
        </div>
    );
};

export default Slideshow;