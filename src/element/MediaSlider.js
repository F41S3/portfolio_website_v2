import React, { useState } from 'react';
import './css/styles.css';
import YoutubeEmbed from "./YoutubeEmbed";
import PropTypes from "prop-types";

/**
 * MediaSlider component
 * This component displays a list of images and YouTube videos background information
 * in a single slideshow. The user can navigate with two buttons for fwd and back.
 *
 * @param {object} props - Component properties.
 * @param {array} props.medias - Array of media objects.
 *
 * @returns {JSX.Element} The JSX element representing the slider.
 */
export default function MediaSlider({ medias }) {
    //Initialize state to keep track of the current index in the medias array.
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Initialize state to keep track of the current index in the medias array.
     * */
    MediaSlider.propTypes = {
        medias: PropTypes.array
    }
    /**
     * Define defaultProps to provide default values when props are not provided.
     * Default value for medias is an empty object.
     */
    MediaSlider.defaultProps = {
        medias: {}
    }

    /**
     * Handle previous button click event.
     * Decrements the current index if it's greater than 0.
     *
     * @returns {void}
     */
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    /**
     * Handle next button click event.
     * Increments the current index if it's less than medias length minus one.
     *
     * @returns {void}
     */
    const handleNext = () => {
        if (currentIndex < medias.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="media-slider">
            {/* Conditionally render image or YouTube embed based on media type */}
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