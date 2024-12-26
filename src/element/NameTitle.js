import {Link} from "react-router-dom";
import React from "react";
import './css/styles.css'


export default function NameTitle() {
    let selfie = '../images/selfie.png';
    return (
        <div>
            <h1 className="nameTitle">Alex Pettipas</h1>
            <img className="selfie" href={selfie}></img>
        </div>
    )
}