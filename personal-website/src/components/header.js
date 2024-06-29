import React from "react";
import'./header.css'
import { ReactTyped } from "react-typed";
import Avatar from '../assets/Avatar.svg';


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
      </header>
    )
}

export default Header