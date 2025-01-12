import React from "react";
import './css/styles.css'
import PropTypes from "prop-types";


export default function YoutubeEmbed({embedID}) {
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