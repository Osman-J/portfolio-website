import React from "react";
import "./Footer.css";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a className="icon-link" href="mailto:osman.jan.career@gmail.com"><AiFillMail /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/osman-jan" target="_blank"><AiFillLinkedin /></a>
                <a className="icon-link" href="https://github.com/Osman-J" target="_blank"><AiFillGithub /></a>
            </div>
            <div>
                <p className="copyright">&copy; 2022 Osman J</p>
            </div>
        </footer>
    );
}

export default Footer;