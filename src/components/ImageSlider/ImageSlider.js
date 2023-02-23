import "./ImageSlider.css";
import React from "react";


const ImageSlider = ({images}) => {


    const [currentImage, setCurrentImage] = React.useState(0)

    const previousImage = () => {
        const value = currentImage -1;
        if(value >= 0) {
            setCurrentImage(currentImage - 1)
        }else{
            console.error("You've reached the start of the images")
        }
    }

    const nextImage = () => {
        const value = currentImage +1;
        if(value < images.length - 1) {
            setCurrentImage(currentImage)
        }else{
            console.error("You've reached the end of the images")
        }
        setCurrentImage(currentImage +1)
    }

    return (
        <div className="image-slider">
        <span className="image-slider__indicator">{currentImage +1} of {images.length}</span>
            <button onClick={previousImage}>Back</button>
            <img alt="Random sample" src={images[currentImage]}/>
            <button onClick={nextImage}>Next</button>
        </div>
    );
}

export default ImageSlider;