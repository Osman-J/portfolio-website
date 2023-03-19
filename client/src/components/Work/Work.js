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
                        <li className="details">Enhanced the automation suite by optimizing and refactoring existing scripts to reduce execution time by 20%.</li>
                        <li className="details">Simplified test data creation by creating an object repository to store all test data, eliminating the need to manually enter the same data.</li>
                        <li className="details">Monitored test execution quality, ensuring results were recorded accurately. Debugged defects and re-executed tests for verification.</li>
                        <li className="details">Facilitated the seamless integration of 6 new team members by conducting knowledge transfer sessions and providing training.</li>
                    </ul>
                </div>
            </Collapsible>

            <Collapsible
                trigger={<Trigger triggerTitle="Front End Developer" openState={card2Open} />}
                onTriggerOpening={() => { setCard2OpenState(true) }}
                onTriggerClosing={() => { setCard2OpenState(false) }}
                transitionTime={200}>
                <div className="work-experience-container">
                    <p className="location">Special Olympics Ontario</p>
                    <ul>
                        <li className="details">Used WordPress themes and plugins to build a custom website, ensuring it was responsive and mobile-friendly.</li>
                        <li className="details">Developed mockups and wireframes to guide the design process and ensure the final product met client expectations.</li>
                        <li className="details">Conducted quality control checks on all website elements, ensuring that they met the company's design and performance standards.</li>
                        <li className="details">Provided training to team leads on how to add new content on the website for their respective departments.</li>
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
                        <li className="details">Deliver prompt and effective technical support to corporate users and over 300 stores nationwide, resolving hardware and software issues with a 75% first-call resolution rate.</li>
                        <li className="details">Consistently achieve the highest call rate among IT Support Services Analysts, handling an average of 30 calls per day</li>
                        <li className="details">Maintain an accurate record of each call through incident management tracking tool (ServiceNow), ensuring that all tickets are resolved in a timely and efficient manner.</li>
                        <li className="details">Help non-technically oriented end-users troubleshoot complex technical issues by translating technical concepts into easy-to-understand language.</li>
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
                        <li className="details">Adapted quickly to new environments and successfully worked under pressure, managing multiple priorities and meeting tight deadlines on a daily basis.</li>
                        <li className="details">Performed follow-up calls to solicit feedback on sales and promote additional products and services, resulting in a 15% increase in customer retention and upselling.</li>
                        <li className="details">Installed and maintained computer operating systems including hardware and software packages.</li>
                        <li className="details">Managed customer ticketing system by updating tickets, providing timely resolution of technical issues, and communicating effectively with customers to ensure their satisfaction.</li>
                    </ul>
                </div>
            </Collapsible>
        </div>
    )
}

export default Work;