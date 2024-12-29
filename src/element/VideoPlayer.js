import React from "react";
import './css/styles.css'


export default function VideoPlayer({video}) {

    return (
        <div className="video-player">
            <video src={video} width="750" height="500" controls></video>
        </div>
    )
}