import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";


export default function HomePage() {
    return (
        <div>
            <Header></Header>
                <NameTitle></NameTitle>
            <Footer></Footer>
        </div>

    );
}

