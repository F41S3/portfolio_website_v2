import React from "react";
import './css/styles.css'

/**
 * NameTitle component
 * This component displays a title with the author's name and a selfie image.
 *
 * @returns {JSX.Element} The JSX element representing the name title section.
 */
export default function NameTitle() {
    /**
     * Define variables for the selfie image source and alt attribute.
     */
    let selfie = '../media/selfie.jpg';
    let alt_attr = 'sites author'
    return (
        <div>
            <h1 className="nameTitle">Alex Pettipas</h1>
            <img
                className="selfie"
                src={selfie}
                alt={alt_attr}
            />
        </div>
    )
}