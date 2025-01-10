import React from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import ParticleBackground from "../element/ParticleBackground";
import JobHistory from "../element/JobHistory";
import Education from "../element/Education";


export default function WorkHistory() {

    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <Header></Header>
            {/* Work Experience Section */}
            <JobHistory></JobHistory>

            {/* Education Section */}
            <Education></Education>

            <Footer></Footer>
        </div>

    );
}