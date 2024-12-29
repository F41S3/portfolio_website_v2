import React from "react";
import './css/styles.css'


export default function YoutubeEmbed({embedID}) {
    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={"https://www.youtube.com/embed/" + embedID}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}