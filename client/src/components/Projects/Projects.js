import React from "react";
import dashboardImg from '../../graphics/dashboard_1.png';
import dashboard2Img from '../../graphics/dashboard_2.png';
import loginImg from '../../graphics/login.png';
import categoryImg from '../../graphics/categories.png';
import kanbanImg from '../../graphics/kanban_home.png';
import kanbanAddJob from '../../graphics/kanban-add-job.png';
import kanbanClosedJob from '../../graphics/kanban-job-closed.png';
import kanbanJobDetails from '../../graphics/kanban-job-details.png';
import movieDBHome from '../../graphics/moviedb-home.png';
import movieDBDetails from '../../graphics/moviedb-details.png';
import specialolympics from '../../graphics/specialolympics.png';
import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Projects() {

    return (
        <section className="projects-section" id="projects">

            <h1 id="section-header">Projects</h1>
            <hr />
            <div className="project-card">
                <div className="content-col">
                    <div>
                        <h1 className="project-title">SpendSmart</h1>
                        <p className="project-desc">
                            A Full-Stack web app I developed that automates budgeting by connecting to users'
                            bank accounts through the Plaid API. It allows users to categorize their transactions
                            and view spending statistics through an intuitive dashboard with interactive charts and graphs.
                            Developed using the MERN stack and styled with Tailwind, SpendSmart offers a secure and convenient
                            way to manage personal finances.
                        </p>
                    </div>
                    <div>
                        <h2 className="project-subtitle">Tools</h2>
                        <div className="project-tools-div">
                            <p className="project-tools">React.js</p>
                            <p className="project-tools">Express</p>
                            <p className="project-tools">Node.js</p>
                            <p className="project-tools">JavaScript</p>
                            <p className="project-tools">Tailwind</p>
                            <p className="project-tools">Mongoose</p>
                            <p className="project-tools">MongoDB</p>
                            <p className="project-tools">Passport.js</p>
                            <p className="project-tools">Plaid API</p>
                        </div>
                    </div>
                    <h2 className="project-subtitle">Check it out</h2>
                    <div className="btn-div">
                        <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/Osman-J/spend-smart">GitHub</a>
                    </div>
                </div>
                <div className="img-col">
                    <Carousel>
                        <div>
                            <img src={dashboardImg} className="project-img"></img>
                        </div>
                        <div>
                            <img src={dashboard2Img} className="project-img"></img>
                        </div>
                        <div>
                            <img src={loginImg} className="project-img"></img>
                        </div>
                        <div>
                            <img src={categoryImg} className="project-img"></img>
                        </div>
                    </Carousel>
                </div>
            </div>
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
                        <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/sdp1-kanban/kanban">GitHub</a>
                    </div>
                </div>
                <div className="img-col">
                    <Carousel>
                        <div>
                            <img src={kanbanImg} className="project-img"></img>
                        </div>
                        <div>
                            <img src={kanbanAddJob} className="project-img"></img>
                        </div>
                        <div>
                            <img src={kanbanClosedJob} className="project-img"></img>
                        </div>
                        <div>
                            <img src={kanbanJobDetails} className="project-img"></img>
                        </div>
                    </Carousel>
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
                        <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/Osman-J/MovieDatabase">GitHub</a>
                        <a className="btn" target="_blank" rel="noreferrer" href="https://the-movie-database--osmanjan11.repl.co/">View</a>
                    </div>
                </div>
                <div className="img-col">
                    <Carousel>
                        <div>
                            <img src={movieDBHome} className="project-img"></img>
                        </div>
                        <div>
                            <img src={movieDBDetails} className="project-img"></img>
                        </div>
                    </Carousel>
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
                        <a className="btn" target="_blank" rel="noreferrer" href="https://www1.specialolympicsontario.com/">View</a>
                    </div>
                </div>
                <div className="img-col">
                    <Carousel>
                        <div>
                            <img src={specialolympics} className="project-img"></img>
                        </div>
                    </Carousel>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default Projects;