import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../element/Header';
import './css/styles.css'
import Footer from "../element/Footer";

export default function Profile() {
    const location = useLocation();
    const { fname, lname, email, season } = location.state || {};

    return (
        <div className="profile">
            <Header></Header>
            <h2>Profile Page</h2>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Email:{email}</p>
            <p>Favorite Season:{season}</p>
            <Footer></Footer>
        </div>
    );
}
