// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, date, imageSrc, description, skills, source }) => {
  return (
    <a href={source} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={imageSrc} alt={`${title} logo`} className="project-image" />
      <div className="project-content">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
