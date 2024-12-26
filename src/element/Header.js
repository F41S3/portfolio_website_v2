import {Link} from "react-router-dom";
import React from "react";
import './css/styles.css'


export default function Header() {
    return (
        <header>
            <h1 className="pageTitle">Fun Website</h1>
            <div className="dropdown">
                <button className="dropbtn" >Menu</button>
                <div className="dropdown-content">
                    <Link to="/Profile">Go to Profile</Link>
                    <Link to="/Dashboard">Go to Dashboard</Link>
                </div>
            </div>
        </header>
    )
}