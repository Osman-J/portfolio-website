import React from "react";
import { Link } from "react-scroll";
import "./NavLinks.css"

function NavLinks({closeMenu}) {

    return(
        <ul>
            <li><Link onClick={closeMenu} className="navlink" to="home" spy={true} smooth={true} duration={500} offset={-200}>Home</Link></li>
            <li><Link onClick={closeMenu} className="navlink" to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link onClick={closeMenu} className="navlink" to="projects" spy={true} smooth={true} offset={-200} duration={500}>Projects</Link></li>
            <li><Link onClick={closeMenu} className="navlink" to="work-experience" spy={true} smooth={true} offset={-200} duration={500}>Work Experience</Link></li>
            <li><Link onClick={closeMenu} className="navlink" to="contact" spy={true} smooth={true} offset={-200} duration={500}>Contact</Link></li>
        </ul>
    );
}

export default NavLinks;