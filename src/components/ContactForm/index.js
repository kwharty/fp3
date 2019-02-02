import React from "react";

const ContactForm = () => {
    return (
        <div>
            <form style={{
                    margin: '50px'
                }}>
                <div className="form-group" >
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Michael Jordan"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Leave Your Message Below</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    );
}

export default ContactForm;