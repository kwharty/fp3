import React from "react";
import "./form.css";


const ContactForm = () => {
    return (
        // <div className="jumbotron jumbotron-fluid">
        <div className="container" id="formContainer">
            <div className="title" id="contactTitle">
                <h1 id="contactBanner">Contact Us</h1>
                <p className="lead">Here at Automatic Glass we love hearing from you, as well as to provide first class customer service. Contacting us for questions & concerns, as well as returns.</p>
                <p className="lead">Please enter your information below.</p>

            </div>
            <form className="form" id="infoBucket">
                <div className="newFormGroup">
                    <div className="row">
                        <label className="newFormLabel">Name</label>
                    </div>
                    <input type="text" className="formControl" id="formControlInput1" placeholder="Enter Name"></input>
                </div>
                <div className="newFormGroup">
                    <div className="row">
                        <label className="newFormLabel">Email address</label>
                    </div>
                    <input type="email" className="formControl" id="formControlInput2" placeholder="Email Here"></input>
                </div>
                <div className="newFormGroup">
                    <div className="row">
                        <label className="newFormLabel">Message</label>
                    </div>
                    <textarea type="text" className="formControl" id="formControlInput3" placeholder="Your Message Here"></textarea>
                </div>
                <div className="submitButton">
                    <div className="row">
                        <input type="submit" value="submit" id="submitButton" />
                    </div>
                </div>
            </form>
        </div>
        // </div>

    )
}

export default ContactForm;






