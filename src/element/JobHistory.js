import React from "react";


export default function JobHistory() {

    const jobs = [
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
            "title": "Charge Hand",
            "company": "Swissport",
            "desc": "A charge hand oversees a team responsible for ensuring efficient airport operations, managing " +
                "aircraft servicing equipment, and coordinating workflow to meet airline schedules. Key responsibilities " +
                "include leading a team of ramp attendants, delegating tasks, maintaining equipment, and troubleshooting " +
                "issues to ensure safe and timely cargo and baggage handling.",
            "img": "/media/swissport_logo.png",
            "tags": ["Aviation", "Transportation"],
            "link": "https://www.swissport.com/en/about",
        }]



    return (
        <div>
            <h2>Job History</h2>
            {jobs.map((job, index) => (
                <div key={index} className="content-container">
                    <h3>{job.title}</h3>
                    <h4>{job.company}</h4>
                    <p>{job.desc}</p>
                    <img src={job.img} alt={"Company logo"}></img>
                    <p>Tags: {job.tags.join(", ")}</p>
                    <a href={job.link}>Website</a>
                </div>
            ))}
        </div>
    )



}