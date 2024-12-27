import {Link} from "react-router-dom";
import React from "react";
import './css/styles.css'


export default function NameTitle() {
    let selfie = '../media/selfie.png';
    let alt_attr = 'sites author'
    return (
        <div>
            <h1 className="nameTitle">Alex Pettipas</h1>
            <img className="selfie" src={selfie} alt={alt_attr}></img>
        </div>
    )
}