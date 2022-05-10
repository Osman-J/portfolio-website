import React from "react";
import './About.css';

function About() {
    return (
        <section className="about-section">
            <div className="about-me-div">
                <h1 id="about-header">About Me</h1>
                <p id="about-paragraph">
                    I am a forward-thinking Software Engineer with background working
                    productively in dynamic environments.
                    I'm a proud team player focused on achieving project
                    objectives with speed and accuracy.
                </p>
            </div>
            <div className="skills-div">
                <h1 id="skills-header">Skills</h1>
                <h2 id="lang-header">Languages</h2>
                <div className="languages-div">
                    <p className="languages">C#</p>
                    <p className="languages">Java</p>
                    <p className="languages">JavaScript</p>
                    <p className="languages">Python</p>
                    <p className="languages">VBScript</p>
                    <p className="languages">SQL</p>
                </div>
                <h2 id="tech-header">Technologies</h2>
                <div className="technologies-div">
                    <p className="technologies">React.js</p>
                    <p className="technologies">Git</p>
                    <p className="technologies">GitHub</p>
                    <p className="technologies">ASP.NET Core</p>
                    <p className="technologies">MySQL</p>
                </div>
            </div>
        </section>
    );
}

export default About;