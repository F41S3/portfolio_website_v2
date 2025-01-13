import React from 'react'
import MediaSlider from "./MediaSlider.js"

/**
 * Showcase component
 * This component represents a showcase for a list of projects, generated sequentially.
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export default function Showcase() {

    const project_data = [
        {
            "title": "Plane Flight Sim",
            "desc": "This is an end of term project I wrote in C using OpenGL. Some notably interesting\n" +
                "features are the propellers speed up or slow down based on the users speed.\n" +
                "Additionally, the mountains are procedurally generated using a self-written Perlin\n" +
                "noise algorithm.",
            "vid": "lKt3g4m6IyA",
            "img": ["/media/plane_im1.png", "/media/plane_im2.png"],
            "tags": ["C", "OpenGL", "GLSL", "gcc"],
            "repositoryURL": "google.com",
        },
        {
            "title": "Expense Management App",
            "desc": "Developed by a team of 8 dedicated students as part of our Mobile Computing course, Expense Manager" +
                " is the culmination of our collective efforts to create an intuitive and user-friendly application " +
                "that meets the evolving needs of modern finance management. Our goal was to design an app that would " +
                "empower users with comprehensive tools for managing their personal finances, making it easier to make " +
                "group purchases and equally share collaborative expenses.",
            "vid": [""],
            "img": ["../media/expense_manager_1.png", "../media/expense_manager_2.png", "../media/expense_manager_3.png"],
            "tags": ["Android", "Kotlin", "Firebase", "NoSQL", "AndoridX", "Gradle"],
            "repositoryURL": "https://github.com/F41S3/Expense-Manager-Project",
        },
        {
            "title": "Various Machine Learning Models",
            "desc": "This is a collection of various machine learning algorithms I have implemented\n" +
                "in python both from scratch and using various libraries and frameworks.",
            "vid": [""],
            "img": ["../media/logo.svg"],
            "tags": ["Python", "Numpy", "Torch", "Matplotlib", "Google Colab", "Vectorization"],
            "repositoryURL": "https://github.com/F41S3/ML_Models",
        },
        {
            "title": "My Portfolio",
            "desc": "This is a project I developed using Node.js to showcase my work. \n",
            "vid": [""],
            "img": ["../media/website_uml.png", "../media/work_history_uml.png"],
            "tags": ["JavaScript", "Node.js", "React.js", ""],
            "repositoryURL": "https://github.com/F41S3/portfolio_website_v2",
        }]



    return (
        <div className="showcase-container">
            {/**
             * Map over the project_data array and render each project entry.
             * Use index as key to ensure unique keys for React reconciliation.
             */}
            {project_data.map((project, index) => (
                <div key={index} className="project-entry">
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    {/*
                     * Check if the project has images or a video, and render the MediaSlider component if true.
                     * This is done using the conditional expression (project.img.length > 0 || project.vid !== "").
                     */}
                    {(project.img.length > 0 || project.vid !== "") && (
                        <div className="sliderContainer">
                            <MediaSlider
                                medias={[
                                    ...project.img.map((image) => ({type: 'image', src: image})),
                                    {type: 'video', src: project.vid},
                                ]}
                            />
                        </div>
                    )}
                    <p>Tags: {project.tags.join(", ")}</p>
                    <a href={project.repositoryURL}>Repository</a>
                </div>
            ))}
        </div>
    )
}