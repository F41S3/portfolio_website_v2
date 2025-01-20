import React from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import Showcase from "../element/Showcase";
import ParticleBackground from "../element/ParticleBackground";

export default function HomePage() {
    return (
        <div>
            <ParticleBackground/>
            <Header/>
            <NameTitle/>
            <Showcase/>
            <Footer/>
        </div>

    );
}
