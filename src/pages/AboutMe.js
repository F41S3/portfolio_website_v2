import React from "react";
import '../element/css/style.scss'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import ParticleBackground from "../element/ParticleBackground";

export default function AboutMe() {
    return (
        <div>
            <ParticleBackground/>
            <Header/>
            <NameTitle/>
            <Footer/>
        </div>

    );
}