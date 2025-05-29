import React from "react";
import './css/styles.scss'
import PropTypes from "prop-types";

/**
 * ParticleBackground component
 * This component displays a particle background effect with interactive features.
 *
 * @param {object} props - Component properties.
 * @param {array} props.embedID - String representing the YouTube video identifier
 *
 * @returns {JSX.Element} The JSX element representing YouTube video display .
 */
export default function YoutubeEmbed({embedID}) {
    /**
     * Define propTypes for validation and documentation purposes.
     * Ensure that props.embedID is a string, defaults to the empty string ""
     */
    YoutubeEmbed.propTypes = {
        embedID: PropTypes.string
    }
    YoutubeEmbed.defaultProps = {
        embedID: ""
    }

    return (
        <div className="video-responsive">
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + embedID}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}