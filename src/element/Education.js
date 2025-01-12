import React from "react";
import './css/styles.css'
import ImageLink from "./ImageLink";

/**
 * Education function
 * This component displays educational background information.
 *
 * @returns {JSX.Element} The JSX element representing the education section.
 */
export default function Education() {
    // Define an array of objects containing education details
    // TODO: setup database hooks to fetch up to date information
    const education = [
        {
            "degree": "Bachelors Degree",
            "field": "Computer Science",
            "desc": "Dalhousie's comprehensive program provided me with a deep understanding of computer science theory," +
                " design, and application, covering areas such as software development, algorithms, networking, and " +
                "artificial intelligence. Through academic rigor and mentorship from award-winning professors, I gained " +
                "the knowledge and skills to build, influence, and evaluate technology, preparing myself for careers " +
                "in innovative tech fields.",
            "img": "/media/dalhousie_logo.png",
            "tags": ["Computer Science", "Agile", "Software Development", "Java", "JavaScript", "C", "Computer Animation"],
            "link": "https://www.dal.ca/about.html",
        }]



    return (
        <div>
            <h2>Education</h2>
            {/*
            * Map over the education array and render each item.
            * Use index as key to ensure unique keys for React reconciliation.
            */}
            {education.map((school, index) => (
                <div key={index} className="content-container">
                    {/* Container for the institution's logo */}
                    <div className={"logo-container"}>
                        {/* Render ImageLink component with school details */}
                        <ImageLink
                            url={school.link}
                            img={school.img}
                            alt={"Logo"}
                        />
                    </div>
                    <h3>{school.degree}</h3>
                    <h4>{school.field}</h4>
                    <p>{school.desc}</p>
                    <p>Tags: {school.tags.join(", ")}</p>
                </div>
            ))}
        </div>
    )
}