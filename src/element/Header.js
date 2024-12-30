import {Link} from "react-router-dom";
import React, { useEffect} from "react";
import './css/styles.css'


export default function Header() {
    useEffect(() => {
        document.title = "Portfolio of Alex Pettipas";
    }, []);
    return (
        <header>
            <h1 className="pageTitle">Portfolio</h1>
            <div className="dropdown">
                <button className="dropbtn" >Menu</button>
                <div className="dropdown-content">
                    <Link to="/">Homepage</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/WorkHistory">See Work History</Link>
                </div>
            </div>
        </header>
    )
}