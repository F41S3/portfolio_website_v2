import React from "react";
import './css/styles.css'
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
            <div className="contact-container">
                <div className="content-container">
                    <h1>Contact Me</h1>
                    <p>Get in touch with me to discuss your projects, ideas, or work opportunities!</p>
                    <p>Email: alexpettipas@gmail.com</p>
                    <p>LinkedIn: Alexander Pettipas</p>
                    <p>Located in Halifax</p>


                    <div className="social-media-links">
                        <a target='_blank'
                           rel="noopener noreferrer"
                           href={"https://www.linkedin.com/in/alexander-pettipas-277434277"}
                           className="linkedInLogo">
                            <img src={process.env.PUBLIC_URL + "/media/linkedin_logo.png"} alt={"LinkedIn Logo"}/>
                        </a>
                        <a target='_blank'
                           href={"https://github.com/F41S3"}
                           rel="noopener noreferrer"
                           className="githubLogo">
                            <img src={process.env.PUBLIC_URL + "/media/github_logo.png"} alt={"Github Logo"}/>
                        </a>
                        <a target="_blank"
                           href={"mailto:alexpettipas@gmail.com"}
                           rel="noopener noreferrer"
                           className="gmailLogo">
                            <img src={process.env.PUBLIC_URL + "/media/gmail_logo.png"} alt={"Gmail Logo"}/>
                        </a>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>

    );
}