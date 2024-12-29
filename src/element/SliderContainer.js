import React from "react";
import './css/styles.css'


export default function SliderContainer({image}) {

    return (
        <div className="imageSlider">
            <img src={image} alt="Placeholder"/>
        </div>
    )
}