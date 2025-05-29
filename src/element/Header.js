import {Link} from "react-router-dom";
import React, { useEffect} from "react";
import './css/styles.scss'

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
            <h1 className="pageTitle">Portfolio of Alex Pettipas</h1>
            <div className="dropdown">
                <nav className="nav">
                    <input type="checkbox" className="nav__cb" id="menu-cb"/>
                    <div className="nav__content">
                        <ul className="nav__items">
                            <li className="nav__item">
                            <span className="nav__item-text">
                                <Link to="/">Home</Link>
                            </span>
                            </li>
                            <li className="nav__item">
                            <span className="nav__item-text">
                                <Link to="/WorkHistory">Resume</Link>
                            </span>
                            </li>
                            <li className="nav__item">
                            <span className="nav__item-text">
                                <Link to="/Contact">Contact</Link>
                            </span>
                            </li>
                        </ul>
                    </div>
                    <label className="nav__btn" htmlFor="menu-cb"></label>
                </nav>
            </div>
        </header>
)
}