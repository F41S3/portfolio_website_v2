import React from "react";
import './css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import ParticleBackground from "../element/ParticleBackground";
import ContactDetails from "../element/ContactDetails";



export default function Contact() {
    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <Header></Header>
            <NameTitle></NameTitle>
            <ContactDetails></ContactDetails>
            <Footer></Footer>
        </div>

    );
}