import React from "react";
import'./header.css'
import { ReactTyped } from "react-typed";
import Avatar from '../../assets/Avatar.svg';
import { FaGithub,FaLinkedin,FaFileAlt   } from "react-icons/fa";


const Header = () => {
    return (
        <header className="App-header">
        <img src={Avatar} className="Avatar-logo" alt="Avatar" />
        <p className='texts'>
          <strong> {""}
            <ReactTyped strings={["Hello world, I am <span class='text-blue'>Jeanine Le</span>"]} typeSpeed={80} />
            </strong> 
          <p className='subheading'>Full Stack Developer</p>
        </p>
        <div className="socials">
          <a href="https://github.com/jel084" target="_blank" rel="noopener noreferrer" className="socialitem">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jeaninele/" target="_blank" rel="noopener noreferrer" className="socialitem">
            <FaLinkedin />
          </a>
          <a href="https://drive.google.com/file/d/1f_xcg9SnFJtn7ST61p5RdivJrtWAV5hV/view" target="_blank" rel="noopener noreferrer" className="socialitem">
            <FaFileAlt />
          </a>
        </div>

      </header>
    )
}

export default Header