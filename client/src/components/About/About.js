import React from "react";
import './About.css';
import {SiCsharp, SiJavascript, SiPython, SiMicrosoft, SiMongodb, SiIbm} from "react-icons/si";
import {FaJava, FaDatabase, FaReact, FaGitAlt, FaGithub} from "react-icons/fa";
import {GrMysql, GrMicrofocus} from "react-icons/gr";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-me-div">
                <h1 id="about-header">About Me</h1>
                <p id="about-paragraph">
                    Hello, my name is Osman. I'm a Software Developer based in Toronto, ON. and I'm currently seeking full-time opportunities as a Front-End or Full-Stack developer.
                    <br />
                    <br />
                    I started my coding journey in my early teen years and have been hooked ever since. I'm skilled in multiple
                    languages/technologies and I'm continuously working to gain more knowledge each day!
                    <br />
                    <br />
                    When I'm not coding, you can find me engaged in other activities such as playing basketball
                    and video games, as well as spending time with family and friends.
                </p>
            </div>
            <div className="skills-div">
                <h1 id="skills-header">Skills</h1>
                <div className="skills-card-container">
                    <div className="languages-div">
                        <h2 id="lang-header">Languages</h2>
                        <p className="languages"><SiCsharp />&nbsp; C#</p>
                        <p className="languages"><FaJava />&nbsp; Java</p>
                        <p className="languages"><SiJavascript />&nbsp; JavaScript</p>
                        <p className="languages"><SiPython />&nbsp; Python</p>
                        <p className="languages"><SiMicrosoft />&nbsp; VBScript</p>
                        <p className="languages"><FaDatabase />&nbsp; SQL</p>
                    </div>
                    <div className="technologies-div">
                        <h2 id="tech-header">Technologies</h2>
                        <p className="technologies"><FaReact />&nbsp; React.js</p>
                        <p className="technologies"><SiMicrosoft />&nbsp; ASP.NET Core</p>
                        <p className="technologies"><FaGitAlt />&nbsp; Git</p>
                        <p className="technologies"><FaGithub />&nbsp; GitHub</p>
                        <p className="technologies"><SiIbm />&nbsp; IBM RTC</p>
                        <p className="technologies"><SiMongodb />&nbsp; MongoDB</p>
                        <p className="technologies"><FaDatabase />&nbsp; Oracle SQL</p>
                        <p className="technologies"><GrMicrofocus />&nbsp; Microfocus QTP/UFT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
