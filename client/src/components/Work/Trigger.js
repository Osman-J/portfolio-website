import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import "./Work.css";

function Trigger(props) {
    return (
        <div className="trigger-div">
            <p className="trigger-title">{props.triggerTitle}</p>
            <div className="trigger-arrow">
                {props.openState ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
    );
}

export default Trigger;