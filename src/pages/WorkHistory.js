import React from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import ParticleBackground from "../element/ParticleBackground";
import ContactDetails from "../element/ContactDetails";
import JobHistory from "../element/JobHistory";


export default function WorkHistory() {

    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <Header></Header>
            <NameTitle></NameTitle>
            {/* Work Experience Section */}
            <JobHistory></JobHistory>

            {/* Education Section */}
            <section className="content-container">
                <h2>Education</h2>
                <p>High School Diploma</p>
                <p>Bachelor of Computer Science</p>
            </section>

            {/* Contact Information Section */}
            <ContactDetails></ContactDetails>
            <Footer></Footer>
        </div>

    );
}