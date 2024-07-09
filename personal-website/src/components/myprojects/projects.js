// Projects.js
import React from 'react';
import ProjectCard from './projectcard.js';
import './projects.css';


const projects = [
  {
    title: "Schoolhouse Ghana",
    date: "APR 2024 - PRESENT",
    imageSrc: "../../assets/R.png",
    description: "This project is focused on building a server to host websites and other resources locally, providing the students with a mock version of the internet, which will improve their computer literacy by providing them with new educational tools.",
    skills: ["MongoDB", "Express", "Node", "React"],
    source: "https://globalties.ucsd.edu/what/projects/schoolhouse-solar-ghana.html"
  },
  {
    title: "UCSD CSE Queues",
    date: "JAN 2024 - PRESENT",
    imageSrc: "../../assets/R.png",
    description: "Develop Queues, a full-stack web app used in UCSD courses for one-on-one tutoring.",
    skills: ["Typescript", "Flask"],
    source: "https://globalties.ucsd.edu/what/projects/schoolhouse-solar-ghana.html"
  },
  {
    title: "MentorMentee Application",
    date: "JAN 2024 - MAY 2024",
    imageSrc: "../../assets/R.png",
    description: "Mentor Mentee matching tool website for nonprofit Saigon Children.",
    skills: ["FastAPI", "React"],
    source: "https://github.com/lahrry/MentorMentee_App"
  },
  {
    title: "Quarterly Software/Hardware Project",
    date: "APR 2023 - JUN 2023",
    imageSrc: "../../assets/R.png",
    description: "Worked in a group of undergraduate students to develop a device that can provide assistance and enhance personal safety when individuals find themselves in dangerous situations, along with a complementary mobile application to accompany keychain device.",
    skills: ["Kotlin", "AndroidStudio"],
    source: "https://github.com/mwdai049/campus-safety-app"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <p className="title">Portfolio</p>
        <div className="projects-container">
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
        </div>
    </section>
  );
};

export default Projects;
