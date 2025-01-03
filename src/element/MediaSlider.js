import React, { useState } from 'react';
import './css/styles.css';
import YoutubeEmbed from "./YoutubeEmbed";

// MediaSlider component
export default function MediaSlider({ medias }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < medias.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="media-slider">
            {medias[currentIndex].type === 'image' ? (
                <img src={process.env.PUBLIC_URL + medias[currentIndex].src} alt="Placeholder" />
            ) : (
                <YoutubeEmbed
                    embedID={medias[currentIndex].src}
                    />
            )}
            <div className="button-container">
                <button onClick={() => handlePrev()} className="prev-button">
                    Previous
                </button>
                <button onClick={() => handleNext()} className="next-button">
                    Next
                </button>
            </div>
        </div>
    );
}