import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="container" id="contact">
            <h1 className="section-header">Contact</h1>
            <form onSubmit={console.log("hi")}>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name..." />

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email..." />

                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..."></textarea>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;