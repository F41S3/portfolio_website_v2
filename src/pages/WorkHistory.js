import React from "react";
import '../element/css/style.scss'
import Header from "../element/Header";
import Footer from "../element/Footer";
import ParticleBackground from "../element/ParticleBackground";
import JobHistory from "../element/JobHistory";
import Education from "../element/Education";

export default function WorkHistory() {

    return (
        <div>
            <ParticleBackground/>
            <Header/>
            {/* Work Experience Section */}
            <JobHistory/>

            {/* Education Section */}
            <Education/>

            <Footer/>
        </div>

    );
}