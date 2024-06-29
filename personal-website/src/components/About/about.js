import React from "react";
import './about.css';

const About = () => {
    return (
        <section id='aboutme'>
            <p className="abouttitle">About Me</p>
            <p className = "description">
                <p>Hello, my name is <span className="blue-underline">Jeanine Le</span>. I am a 2nd generation Vietnamese American and a 1st generation college student from SoCal. Currently, I am pursuing a degree in <span className="blue-underline">computer science at UC San Diego</span>. After graduating, I aspire to work in <span className="blue-underline">web development or software engineering</span>.</p>
                <p>In addition to the CSE courses I have taken, I have self-taught many software technologies through personal projects. I have gained proficiency in <span className="blue-underline">JavaScript, React, HTML, CSS, Node.js, MongoDB</span>, and more. From my coursework, I have also learned to code in multiple languages, including <span className="blue-underline">Python, C++, and Java</span>. I thrive on tackling new challenges and constantly seek opportunities to learn and grow.</p>
                <p>I've collaborated with various non-profits to develop web platforms and enjoy working with friends and classmates on projects we are passionate about. In my spare time, I volunteer at a homeless shelter in San Diego, making genuine connections with the community. I also love playing soccer and volleyball. Creatively, I enjoy filming vlogs of my friends and family and drawing sketches of landscapes wherever I am. You can always catch me trying new foods around SoCal or taking photos of the scenery around me!</p>
            </p>
        </section>
    )
}

export default About