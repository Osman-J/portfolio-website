import React from "react";
import { useState } from "react";
import Collapsible from 'react-collapsible';
import Trigger from "./Trigger";
import "./Work.css";

function Work() {

    //TODO: find a better way to manage state for collapsible cards.
    /*  
        ISSUE: The issue is when we use 1 state for managing which
        icon to display (+ or -) when the state is changed
        all the cards icons change. */
    /* 
        Workaround: Instead of using 1 state, I created a state for each card.
        This isn't the ideal scenario but it is a temp fix. Using ref's may fix
        this issue or somehow calling a function which updates the state
        in the child component from the parent component may fix it.
    */
    const [card1Open, setCard1OpenState] = useState(false);
    const [card2Open, setCard2OpenState] = useState(false);
    const [card3Open, setCard3OpenState] = useState(false);
    const [card4Open, setCard4OpenState] = useState(false);

    return (
        <div className="work-div" id="work-experience">
            <h1 className="section-header">Work Experience</h1>
            <Collapsible
                trigger={<Trigger triggerTitle="Jr. App Programmer" openState={card1Open} />}
                onTriggerOpening={() => { setCard1OpenState(true) }}
                onTriggerClosing={() => { setCard1OpenState(false) }}
                transitionTime={200}>
                <div className="work-experience-container">
                    <p className="location">Ministry of Children, Community and Social Services</p>
                    <ul>
                        <li className="details">Developed and maintained a hybrid automation framework using QTP/UFT</li>
                        <li className="details">Conducted smoke, integration, and regression testing during the various phases of development.</li>
                        <li className="details">Developed customized UFT scripts with parameterization, check points, library files, and regular expressions to automate functional test cases.</li>
                        <li className="details">Assisted in the onboarding process for new co-op students by providing knowledge transfer sessions.</li>
                        <li className="details">Developed a wiki site containing detailed technical documentation on our automation library</li>
                    </ul>
                </div>
            </Collapsible>

            <Collapsible
                trigger={<Trigger triggerTitle="Front-end Web Developer" openState={card2Open} />}
                onTriggerOpening={() => { setCard2OpenState(true) }}
                onTriggerClosing={() => { setCard2OpenState(false) }}
                transitionTime={200}>
                <div className="work-experience-container">
                    <p className="location">Special Olympics Ontario</p>
                    <ul>
                        <li className="details">Assisted in developing the front-end of the company’s outdated website to be responsive/modernized.</li>
                        <li className="details">Participated in discussions with the project manager to clarify website requirements.</li>
                        <li className="details">Developed web-site mock-ups to ensure quality control before project development phase.</li>
                        <li className="details">Communicated with the project manager to establish project parameters, web site content and progress throughout the length of the project.</li>
                    </ul>
                </div>
            </Collapsible>

            <Collapsible
                trigger={<Trigger triggerTitle="IT Support Services Analyst" openState={card3Open} />}
                onTriggerOpening={() => { setCard3OpenState(true) }}
                onTriggerClosing={() => { setCard3OpenState(false) }}
                transitionTime={200}>
                <div className="work-experience-container">
                    <p className="location">Staples</p>
                    <ul>
                        <li className="details">Provide technical support to corporate users along with over 300 stores nationwide</li>
                        <li className="details">Provide an accurate record of each call through incident management tracking tool (ServiceNow)</li>
                        <li className="details">Effectively translate complex, technical concepts into easy-to-understand language to assist non-technically oriented end-users</li>
                    </ul>
                </div>
            </Collapsible>

            <Collapsible
                trigger={<Trigger triggerTitle="Computer Technician" openState={card4Open} />}
                onTriggerOpening={() => { setCard4OpenState(true) }}
                onTriggerClosing={() => { setCard4OpenState(false) }}
                transitionTime={200}>
                <div className="work-experience-container">
                    <p className="location">Staples</p>
                    <ul>
                        <li className="details">Demonstrated adaptability by thriving in new environments and productively working under pressure.</li>
                        <li className="details">Installed and maintained computer operating systems hardware and software packages</li>
                        <li className="details">Regularly maintained customer ticketing system (updating tickets, contacting customers etc.)</li>
                        <li className="details">Performed follow up calls to solicit feedback on sales, promote additional products and services.</li>
                    </ul>
                </div>
            </Collapsible>
        </div>
    )
}

export default Work;