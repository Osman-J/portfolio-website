import React from "react";
import coding from '../../graphics/coding-2.svg';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome-section" id="home">
            <div className="welcome-greeting">
                <h1 id="title">Hello,<br />My name is Osman.</h1>
                <h3 id="subtitle">Software Developer</h3>
            </div>
            <div className="welcome-graphic">
                <img id="img-coding" src={coding} alt="person coding"></img>
            </div>
        </div>
    )
}

export default Welcome;