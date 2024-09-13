import React from 'react';
import ProjectCard from './projectcard.js';
import './projects.css';
import SC from '../../assets/sc.png';
import SG from '../../assets/sg.png';
import chatbot from '../../assets/chatbot.gif';


const projects = [
  {
    title: "Schoolhouse Ghana",
    date: "APR 2024 - PRESENT",
    imageSrc: SG,
    description: "This project is focused on building a server to host websites and other resources locally, providing the students with a mock version of the internet, which will improve their computer literacy by providing them with new educational tools.",
    skills: ["MongoDB", "Express", "Node", "React"],
    source: "https://globalties.ucsd.edu/what/projects/schoolhouse-solar-ghana.html"
  },
  {
    title: "UCSD CSE Queues",
    date: "JAN 2024 - PRESENT",
    imageSrc: null,
    description: "Develop Queues, a full-stack web app used in UCSD courses for one-on-one tutoring.",
    skills: ["Typescript", "Flask"],
    source: "https://docs.google.com/presentation/d/1s1nhblsqjr03gLPMFIJTDR4hZKOra973231ICm178Pc/edit?usp=sharing"
  },
  {
    title: "MentorMentee Application",
    date: "JAN 2024 - MAY 2024",
    imageSrc: SC,
    description: "Mentor Mentee matching tool website for nonprofit Saigon Children.",
    skills: ["FastAPI", "React"],
    source: "https://github.com/lahrry/MentorMentee_App"
  },
  {
    title: "Quarterly Software/Hardware Project",
    date: "APR 2023 - JUN 2023",
    imageSrc: null,
    description: "Worked in a group of undergraduate students to develop a device that can provide assistance and enhance personal safety when individuals find themselves in dangerous situations, along with a complementary mobile application to accompany keychain device.",
    skills: ["Kotlin", "AndroidStudio"],
    source: "https://github.com/mwdai049/campus-safety-app"
  },
  {
    title: "Thaddeus Resource Center ChatBot",
    date: "SEPT 2024",
    imageSrc: chatbot,
    description: "I created an AI chatbot for the TRC website to improve user engagement/provide real-time assistance. I set up the Botpress environment, designed conversational flows, and configured the NLU to recognize user intents and respond accurately. After testing and refining the bot's behavior, I deployed it to the website to offer interactive support for users.",
    skills: ["Botpress Studio", "JavaScript", "NLP"],
    source: "https://www.thaddeus.org/"
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
