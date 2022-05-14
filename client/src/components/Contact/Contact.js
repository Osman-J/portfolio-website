import React from "react";
import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_e17um5q', 'template_4bx98mc', e.target, 'A8CF1LJrJQ-CzOTzD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    const newEmail = {
        name: "",
        email: "",
        message: "",
    };

    const [email, setEmail] = useState(newEmail);

    return (
        <div className="container" id="contact">
            <h1 className="section-header">Contact</h1>
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