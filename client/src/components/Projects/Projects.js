import React from "react";
import kanban from '../../graphics/kanban-img.svg';
import moviedb from '../../graphics/moviedb.svg';
import './Projects.css';

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <h1 id="section-header">Projects</h1>
            <hr />
            <div className="project-card">
                <div className="content-col">
                    <div>
                        <h1 className="project-title">PFC KANBAN</h1>
                        <p className="project-desc">
                            A capstone project developed using the MERN stack.
                            Our team designed and developed a fully functional KANBAN board web application
                            to provide PFC Flexible Circuits with a reliable method for managing and
                            visualizing their jobs in development.
                        </p>
                    </div>
                    <div>
                        <h2 className="project-subtitle">Tools</h2>
                        <div className="project-tools-div">
                            <p className="project-tools">React.js</p>
                            <p className="project-tools">MongoDB</p>
                            <p className="project-tools">Express</p>
                            <p className="project-tools">Node.js</p>
                            <p className="project-tools">Mongoose</p>
                            <p className="project-tools">Styled Components</p>
                        </div>
                    </div>
                    <h2 className="project-subtitle">Check it out</h2>
                    <div className="btn-div">
                        <a className="btn" href="/#">GitHub</a>
                        <a className="btn" href="/#">View</a>
                    </div>
                </div>
                <div className="img-col">
                    <img src={kanban} className="project-img"></img>
                </div>
            </div>
            <hr />
            <div className="project-card">
                <div className="content-col">
                    <div>
                        <h1 className="project-title">Movie Database</h1>
                        <p className="project-desc">
                            Movie Database uses RESTful API's and JavaScript to retrieve newly
                            released movies and displays information such as its trailer, synopsis,
                            etc. in a stylish manner using HTML5 and CSS.
                        </p>
                    </div>
                    <div>
                        <h2 className="project-subtitle">Tools</h2>
                        <div className="project-tools-div">
                            <p className="project-tools">HTML5</p>
                            <p className="project-tools">CSS</p>
                            <p className="project-tools">JavaScript</p>
                            <p className="project-tools">RESTful API's</p>
                        </div>
                    </div>
                    <h2 className="project-subtitle">Check it out</h2>
                    <div className="btn-div">
                        <a className="btn" href="/#">GitHub</a>
                        <a className="btn" href="/#">View</a>
                    </div>
                </div>
                <div className="img-col">
                    <img src={moviedb} className="project-img"></img>
                </div>
            </div>
            <hr />
            <div className="project-card">
                <div className="content-col">
                    <div>
                        <h1 className="project-title">Special Olympics Ontario</h1>
                        <p className="project-desc">
                            Using HTML5, CSS and WordPress our team was successfully
                            able to revamp the company's outdated website to be
                            completely responsive with a modern look and feel.
                        </p>
                    </div>
                    <div>
                        <h2 className="project-subtitle">Tools</h2>
                        <div className="project-tools-div">
                            <p className="project-tools">HTML5</p>
                            <p className="project-tools">CSS</p>
                            <p className="project-tools">WordPress</p>
                        </div>
                    </div>
                    <h2 className="project-subtitle">Check it out</h2>
                    <div className="btn-div">
                        <a className="btn" href="/#">View</a>
                    </div>
                </div>
                <div className="img-col">
                    <img src={kanban} className="project-img"></img>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default Projects;