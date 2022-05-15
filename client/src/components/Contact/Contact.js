import React from "react";
import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Success from "./Success";
import Error from "./Error";

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_e17um5q', 'template_4bx98mc', e.target, 'A8CF1LJrJQ-CzOTzD')
            .then((result) => {
                setSent(true);
                setError(false);
            }, (error) => {
                setSent(false);
                setError(true);
            });

        e.target.reset();
    }

    const newEmail = {
        name: "",
        email: "",
        message: "",
    };

    const [email, setEmail] = useState(newEmail);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="container" id="contact">
            <h1 className="section-header">Contact</h1>
            {sent ? <Success /> : null}
            {error ? <Error /> : null}
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input required={true} onChange={(e) => { setEmail({ ...email, name: e.target.value }) }} type="text" id="name" name="name" placeholder="Your name..." />

                <label htmlFor="email">Email</label>
                <input required={true} onChange={(e) => { setEmail({ ...email, email: e.target.value }) }} type="email" id="email" name="email" placeholder="Your email..." />

                <label htmlFor="message">Message</label>
                <textarea required={true} onChange={(e) => { setEmail({ ...email, message: e.target.value }) }} id="message" name="message" placeholder="Your message..."></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;