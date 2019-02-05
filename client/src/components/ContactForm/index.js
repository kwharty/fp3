import React from "react";
import "./form.css";


const ContactForm = () => {
    return (

        <div className="container-fluid">
            <form  className="col-8" style={{
                    margin: '50px',
                    alignContent: "left",


                    
                }}>
                <div className="form-group col-12" style={{
                    //  marginLeft: '0%',
                    alignContent: "left",

                }} >
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="email" className="form-control alig" id="exampleFormControlInput1" placeholder="Michael Jordan"></input>
                </div>


                <div className="form-group col-12" style={{
                    //  marginLeft: '0%',
                    alignContent: "left",



                }}>
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>


                <div className="form-group col-12" style={{
                    //  marginLeft: '0%',



                }}>
                    <label for="exampleFormControlTextarea1">Leave Your Message Below</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
            </div>
         
 

    );
}

export default ContactForm;