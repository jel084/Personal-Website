import React from "react";
import'./navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='aboutme' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
        </nav>
    )
}

export default Navbar