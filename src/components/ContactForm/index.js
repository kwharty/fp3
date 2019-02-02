import React from "react";
import "./form.css";


const ContactForm = () => {
    return (
            <form  className="col-6-offset-2" style={{
                    margin: '50px',
                   
                    
                }}>
                <div className="form-group" style={{
                     marginLeft: '0%',
                }} >
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Michael Jordan"></input>
                </div>
                <div className="form-group" style={{
                     marginLeft: '0%',
                }}>
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Leave Your Message Below</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
            
         
 

    );
}

export default ContactForm;