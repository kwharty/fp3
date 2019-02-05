import React from "react";
import "./form.css";


const ContactForm = () => {
    return (
        // <div className="jumbotron jumbotron-fluid">
        <div className="container" id="formContainer">
            <div className="title" id="contactTitle">
                <h1>Contact Us</h1>
                <p className="lead">Please enter your information below.</p>
            </div>
            <form className="form" id="infoBucket">
                <div className="newFormGroup">
                    <label className="newFormLabel">Name</label>
                    <input type="text" className="formControl" id="formControlInput1" placeholder="Enter Name"></input>
                </div>
                <div className="newFormGroup">
                    <label className="newFormLabel">Email address</label>
                    <input type="email" className="formControl" id="formControlInput2" placeholder="Email Here"></input>
                </div>
                <div className="newFormGroup">
                    <label className="newFormLabel">Message</label>
                    <textarea type="text" className="formControl" id="formControlInput3" placeholder="Your Message Here"></textarea>
                </div>
                <div className="submitButton">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
        // </div>

    )
}

export default ContactForm;






