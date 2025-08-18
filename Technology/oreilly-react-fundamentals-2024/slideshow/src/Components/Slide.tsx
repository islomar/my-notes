import "./style.css";

const Slide = ({product}) => {
    return (
        <div className="slide">
            <img src = {product?.images[0]} alt={product?.description} />
        </div>
    );
};

export default Slide;