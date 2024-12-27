import React from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import ParticleBackground from "../element/ParticleBackground";




export default function Contact() {
    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <Header></Header>
            <NameTitle></NameTitle>
            <Footer></Footer>
        </div>

    );
}