import React from 'react';
import './css/styles.css';

let currentImageIndex = 0
export default function ImageSlider({ images }) {


    return (
        <div className="image-slider">
            <img src={process.env.PUBLIC_URL + images[currentImageIndex]} alt="Placeholder" />
            <button onClick={() => handlePrev(images, currentImageIndex)}>Previous</button>
            <button onClick={() => handleNext(images, currentImageIndex)}>Next</button>
        </div>
    )
}

const handlePrev = (images, index) => {
    if (currentImageIndex > 0) {
        currentImageIndex = index - 1;
    }
};

const handleNext = (images, index) => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex = index + 1;
    }
};