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
            "desc": "The Flight-Sim Final Project is a C-based simulation that creates an animated " +
                "flight over mountainous terrain generated using Perlin noise. The project was " +
                "developed as a final assignment for a computer animation course, with the goal of " +
                "implementing and visualizing perlin noise in a dynamic 3D environment.\n",
            "features": ["Mountain Generation: Utilizes Perlin noise algorithm to generate realistic-looking mountain terrains.",
                "Flight Simulation: Simulates the experience of flying over these mountains, providing an immersive visualization.",
                "OpenGL Rendering: Implements graphics using OpenGL for high-performance rendering in a windowed environment.",
                "FreeGLUT Framework: Leverages FreeGLUT for handling windowing and user interaction."],
            "vid": "lKt3g4m6IyA",
            "img": ["/media/plane_im1.png", "/media/plane_im2.png"],
            "tags": ["C", "OpenGL", "GLSL", "gcc"],
            "repositoryURL": "https://github.com/F41S3/Flight-Sim",
        },
        {
            "title": "Expense Management App",
            "desc": "Developed by a team of 8 dedicated students as part of our Mobile Computing " +
                "course. Expense Manager is a simple, intuitive, stable, and feature-rich " +
                "expense tracking app developed using Kotlin and Android Studio. The app allows" +
                " users to control their spending, plan budgets, track expenses, and income.",
            "features": ["Expense Tracking: Users can log daily expenses with categories (e.g., food, transportation, entertainment)",
            "Budget Planning: The app allows users to set budgets and track progress.",
            "Expense Splitting: Users can add expenses and split bills between multiple groups of people.",
            "Income Tracking: Users can record income from various sources."],
            "vid": ["", ""], // Empty video link
            "img": ["../media/expense_manager_1.png", "../media/expense_manager_2.png", "../media/expense_manager_3.png"],
            "tags": ["Android", "Kotlin", "Firebase", "NoSQL", "AndoridX", "Gradle"],
            "repositoryURL": "https://github.com/F41S3/Expense-Manager-Project",
        },
        {
            "title": "My Portfolio",
            "desc": "Welcome to my portfolio website built using React! This modern and responsive" +
                " web application showcases my skills, projects, experiences, and contact " +
                "information. The website is designed with simplicity and functionality in mind, " +
                "ensuring an optimal user experience across all devices.",
            "features": [
                "Responsive Design: The website adapts seamlessly to different screen sizes, providing a " +
                "consistent and visually appealing layout on desktops, tablets, and mobile devices.",
                "Project Gallery: A showcase of my most recent and impactful projects. Each project includes a brief " +
                "description, technologies used, and live or demo links where applicable.",
                "Skill Set Display: An interactive section highlighting the programming languages, frameworks, " +
                "tools, and methodologies I am proficient in.",
                "Contact Information: Easy-to-find contact details to facilitate potential collaborations or inquiries.",
                "Clean and Modern UI/UX: A minimalist design approach that emphasizes readability and ease of " +
                "navigation. Smooth animations and transitions enhance user engagement without overwhelming the interface."
            ],
            // No video link provided
            "img": ["../media/website_uml.png", "../media/work_history_uml.png"],
            "tags": ["JavaScript", "Node.js", "React.js", ""],
            "repositoryURL": "https://github.com/F41S3/portfolio_website_v2",
        }
    ]

    return (
        <div className="showcase-container">
            {/** Map over the project_data array and render each project entry. Use index as key to ensure unique keys for React reconciliation */}
            {project_data.map((project, index) => (
                <div key={index} className="project-entry">
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    <h3>Key Features</h3>
                    <div className={"feature-list"}>{project.features.map((feature) => (
                        <ul>
                            <li>{feature}</li>
                        </ul>
                    ))}</div>

                    {/* Check if the project has images or a valid video link to render MediaSlider */}
                    {(project.img?.length > 0 || (typeof project.vid === 'string' && project.vid.trim() !== '')) && (
                        <div className="sliderContainer">
                            <MediaSlider
                                medias={[
                                    ...project.img?.map((image) => ({type: 'image', src: image})),
                                    ...(typeof project.vid === 'string' && project.vid.trim() !== '')
                                        ? [{type: 'video', src: project.vid}]
                                        : []
                                ]}
                            />
                        </div>
                    )}

                    <p>Tags: {project.tags.join(", ")}</p>

                    <a
                        className={"btn-github"}
                        href={project.repositoryURL}
                        role={"button"}

                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                                fill="currentcolor"
                            />
                        </svg>
                        <span>View on Github</span>
                    </a>
                </div>
            ))}
        </div>
    )
}