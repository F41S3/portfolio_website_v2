import React from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";
import NameTitle from "../element/NameTitle";
import ParticleBackground from "../element/ParticleBackground";

export default function WorkHistory() {
    const linkedInURL = "https://www.linkedin.com/in/alexander-pettipas-277434277"
    const githubURL = "https://github.com/F41S3"
    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <Header></Header>
            <NameTitle></NameTitle>
            {/* Contact Information Section */}
            <section className="content-container">
                <h2>Contact Information</h2>
                <ul>
                    <li><strong>Name:</strong> Alex Pettipas</li>
                    <li><strong>Email:</strong> <a href="mailto:alexpettipas@gmail.com">alexpettipas@gmail.com</a></li>
                    <li><strong>Phone:</strong> +1(902)499-5268</li>
                    <li>
                        <strong>Social Media:</strong>&nbsp;
                        <a href={linkedInURL} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>&nbsp;|&nbsp;
                        <a href={githubURL} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </section>

            {/* Work Experience Section */}
            <section className="content-container">
                <h2>Work Experience</h2>
                <ul>
                    <li>
                        <strong>Ramp Attendant, Swissport, Halifax Stanfield Airport (July 2019 - March 2020)</strong>
                        <br />
                        Communicated effectively with pilots and other parties involved.
                        <br />
                        Collaborated with team members to safely and efficiently service cargo and passenger aircraft.
                    </li>
                    <li>
                        <strong>Ramp Coordinator, Executive Aviation, Halifax Stanfield Airport (June 2021 - April 2024)</strong>
                        <br />
                        Managed and allocated multiple teams to ensure contract requirements were met.
                        <br />
                        Communicated effectively with pilots and other parties involved.
                    </li>
                    <li>
                        <strong>Chargehand, Swissport, Halifax Stanfield Airport (July 2023 - Present)</strong>
                        <br />
                        Oversees multiple teams of employees to ensure safe and efficient aircraft servicing.
                        <br />
                        Handles payroll approval and staff management.
                    </li>
                </ul>
            </section>

            {/* Education Section */}
            <section className="content-container">
                <h2>Education</h2>
                <p>High School Diploma</p>
                <p>Bachelor of Computer Science (in progress)</p>
            </section>

            <Footer></Footer>
        </div>

    );
}