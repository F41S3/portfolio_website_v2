import React from "react";
import './css/style.scss'
import ImageLink from "./ImageLink";


/**
 * Export default function ContactDetails.
 * This component displays contact information, including email, location, and social media links.
 *
 * @returns {JSX.Element} The JSX element representing the contact details section.
 */
export default function ContactDetails() {

    return (
        <div className="contact-container">
            <div className="content-container">
                <h1>Contact Me</h1>
                {/* Introduction and call to action */}
                <p>Get in touch with me to discuss your projects, ideas, or work opportunities!</p>
                <p>I am a recent graduate from Dalhousie University, waiting to receive my Bachelor of Computer Science
                    diploma</p>
                <p>Email: alexpettipas@gmail.com</p>
                <p>Located in Halifax</p>
                {/* Container for social media links
                  * Makes use of the ImageLink component to display logos and links to
                  * various pages.
                */}
                <div className="social-media-links">
                    <ImageLink
                        url={"https://www.linkedin.com/in/alexander-pettipas-277434277"}
                        img={"/media/linkedin_logo.png"}
                        className={"linkedInLogo"}
                    />
                    <ImageLink
                        url={"https://github.com/F41S3"}
                        img={"/media/github_logo.png"}
                        className={"githubLogo"}
                    />
                    <ImageLink
                        url={"mailto:alexpettipas@gmail.com"}
                        img={"/media/gmail_logo.png"}
                        className={"gmailLogo"}
                    />
                </div>
            </div>
        </div>
    )
}