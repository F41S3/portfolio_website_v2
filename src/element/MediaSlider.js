import React, { useState } from 'react';
import './css/style.scss';
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


    /**
     * Handle thumbnail click event.
     * Changes displayed media index to the clicked on thumbnail.
     *
     * @returns {void}
     */
    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="media-slider">
            {/* Conditionally render image or YouTube embed based on media type */}
            {medias[currentIndex].type === 'image' ? (
                <img src={process.env.PUBLIC_URL + medias[currentIndex].src} alt="Placeholder"/>
            ) : (
                <YoutubeEmbed
                    embedID={medias[currentIndex].src}
                />
            )}





            <div className="button-container">


                {/* Thumbnail container */}
                <div className="thumbnail-container">
                    <div className="arrow" onClick={() => handlePrev()}></div>
                    {medias.map((media, index) => (
                        // Only display image thumbnails
                        media.type === 'image' ? (
                            <button
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + media.src}
                                    alt={`Thumbnail ${index}`}
                                    className="thumbnail-image"
                                />
                            </button>
                        ) : (
                            // Display YouTube icon for video type
                            <button
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                            >
                                <img
                                    src={"https://img.youtube.com/vi/" + media.src + "/1.jpg"}
                                    alt={`Thumbnail ${index}`}
                                    className="thumbnail-image"
                                />
                            </button>

                        )
                    ))}
                    <div className="arrow_right" onClick={() => handleNext()}></div>
                </div>


            </div>
        </div>
    );
}