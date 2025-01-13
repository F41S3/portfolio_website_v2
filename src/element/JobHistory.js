import React from "react";
import ImageLink from "./ImageLink";

/**
 * JobHistory component
 * This component displays a list of job experiences, including title, company, description, and tags.
 *
 * @returns {JSX.Element} The JSX element representing the job history section.
 */
export default function JobHistory() {
    /**
     * Define an array of objects containing job information.
     * TODO: query server to obtain this data
     */
    const jobs = [
        {
            "title": "Charge Hand",
            "company": "Swissport",
            "desc": "A charge hand oversees a team responsible for ensuring efficient airport operations, managing " +
                "aircraft servicing equipment, and coordinating workflow to meet airline schedules. Key responsibilities " +
                "include leading a team of ramp attendants, delegating tasks, maintaining equipment, and troubleshooting " +
                "issues to ensure safe and timely cargo and baggage handling.",
            "img": "/media/swissport_logo.png",
            "tags": ["Aviation", "Transportation"],
            "link": "https://www.swissport.com/en/about",
        },
        {
            "title": "Ramp Coordinator",
            "company": "Executive Aviation",
            "desc": "This role involves managing ramp operations, ensuring safe and efficient movement of baggage and " +
                "ground equipment in support of airline operations. Key responsibilities include managing manpower, " +
                "equipment, and shifts, maintaining competency, prioritizing team safety, and providing operational " +
                "support to stakeholders. The successful candidate must be adaptable, able to work safely in all " +
                "conditions, and perform specialized tasks as needed.",
            "img": "/media/executive_aviation_logo.png",
            "tags": ["Aviation", "Transportation"],
            "link": "https://www.executiveaviation.ca/about/",
        },
        {
            "title": "Ramp Attendant",
            "company": "Swissport",
            "desc": "Ensure the efficient operation of airports by providing ground support services to airlines, " +
                "air service companies, and government agencies. Key responsibilities include operating specialized " +
                "vehicles and equipment, handling cargo and baggage, and performing various tasks to prepare aircraft " +
                "for passenger boarding and departure. Specific duties involve driving and operating ramp-servicing " +
                "vehicles, marshaling aircraft, sorting and loading cargo and baggage, transporting freight, and " +
                "maintaining the cleanliness of aircraft interiors and exteriors. This role requires a high level of " +
                "physical fitness and attention to detail to ensure safe and efficient airport operations.",
            "img": "/media/swissport_logo.png",
            "tags": ["Aviation", "Transportation"],
            "link": "https://www.swissport.com/en/about",
        },
        ]


    return (
        <div>
            <h2>Job History</h2>
            {/*
              * Map over the jobs array and render each item.
              * Use index as key to ensure unique keys for React reconciliation.
            */}
            {jobs.map((job, index) => (
                <div key={index} className="content-container">
                    <h3>{job.title}</h3>
                    <div className={"logo-container"}>
                        <ImageLink className={"logo"}
                                   url={job.link}
                                   img={job.img}
                                   alt={job.company}
                        />
                    </div>
                    <p>{job.desc}</p>
                    {/* Tags or keywords associated with the job, displayed as a comma-separated list */}
                    <p>Tags: {job.tags.join(", ")}</p>
                </div>
            ))}
        </div>
    )



}