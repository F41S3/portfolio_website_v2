import React from 'react'
import VideoPlayer from "./YoutubeEmbed.js"
import ImageSlider from "./ImageSlider.js"


export default function Showcase() {

    const project_data = [
        {
            "title": "Plane Flight Sim",
            "desc": "This is an end of term project I wrote in C using OpenGL. Some notably interesting\n" +
                "features are the propellers speed up or slow down based on the users speed.\n" +
                "Additionally, the mountains are procedurally generated using a self-written Perlin\n" +
                "noise algorithm.",
            "img": ["/media/plane_im1.png", "/media/plane_im2.png"],
            "vid": "lKt3g4m6IyA",
            "tags": ["C", "OpenGL", "GLSL", ""],
            "repositoryURL": "google.com",
        },
        {
            "title": "Various Machine Learning Models",
            "desc": "This is a collection of various machine learning algorithms I have implemented\n" +
                "in python both from scratch and using various libraries and frameworks.",
            "img": ["../media/logo.svg"],
            "vid": [""],
            "tags": ["Python", "Numpy", "Torch", "Matplotlib", "Google Colab", "Vectorization"],
            "repositoryURL": "https://github.com/F41S3/TBD",
        },
        {
            "title": "My Portfolio",
            "desc": "This is a project I developed using Node.js to showcase my work. \n",
            "img": ["../media/logo.svg"],
            "vid": [""],
            "tags": ["JavaScript", "Node.js", "React.js", ""],
            "repositoryURL": "https://github.com/F41S3/Flight-Sim",
        }]



    return (
        <div className="showcase-container">
            {project_data.map((project, index) => (
                <div key={index} className="project-entry">
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    {(project.img.length > 0 || project.vid.length > 0) && (
                        <div className="sliderContainer">
                            <ImageSlider
                                images={project.img}
                            />
                            <VideoPlayer
                                embedID={project.vid}
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