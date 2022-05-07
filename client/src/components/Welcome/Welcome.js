import React from "react";
import coding from '../../graphics/coding.svg';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome-section">
            <div class="welcome-greeting">
                <h1 id="title">Hello,<br />My name is Osman.</h1>
                <h3 id="subtitle">Software Developer</h3>
            </div>
            <div class="welcome-graphic">
                <img id="img-coding" src={coding} alt="person coding"></img>
            </div>
        </div>
    )
}

export default Welcome;