import {Link} from "react-router-dom";
import React, { useEffect} from "react";
import './css/styles.css'

/**
 * Header component
 * This component represents the header section of the website.
 *
 * @returns {JSX.Element} The JSX element representing the header.
 */
export default function Header() {
    /**
     * Use useEffect to set the document title when the component mounts.
     * Update the title to "Portfolio of Alex Pettipas".
     */
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