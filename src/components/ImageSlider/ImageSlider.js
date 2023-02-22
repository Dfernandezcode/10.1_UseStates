import "./ImageSlider.css";
import React from "react";

const ImageSlider = () => {

    const images = [
        "https://picsum.photos/id/1000/400/200",
        "https://picsum.photos/id/1002/400/200",
        "https://picsum.photos/id/1003/400/200",
        "https://picsum.photos/id/1004/400/200",
        "https://picsum.photos/id/1005/400/200",
        "https://picsum.photos/id/999/400/200",
        "https://picsum.photos/id/998/400/200",
        "https://picsum.photos/id/997/400/200",
        "https://picsum.photos/id/996/400/200",
        "https://picsum.photos/id/995/400/200",
    ];

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
        if(value < images.length) {
            setCurrentImage(currentImage - 1)
        }else{
            console.error("You've reached the end of the images")
        }
        setCurrentImage(currentImage + 1)
    }

    return (
        <div className="image-slider">
        <h2 className="image-slider__title">Image Slider</h2>
        <span className="image-slider__indicator">{currentImage + 1} of {images.length}</span>
            <button onClick={previousImage}>Back</button>
            <img alt="Random sample" src={images[currentImage]}/>
            <button onClick={nextImage}>Next</button>
        </div>
    );
}

export default ImageSlider;