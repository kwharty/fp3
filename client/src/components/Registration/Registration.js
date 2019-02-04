import React, { Component } from 'react';
import './Registration.module.css';
// import User from '../api/userModel.js'
import Api from "../../services/api";
import flower from "./flower.jpg";
import Wax from "./Wax.jpg";
import natural from "./natural.jpg";
import downstem from "./downstem.jpg";
import honey from "./honeycomb.jpg";
import tree from "./tree.jpg";
import barrel from "./barrel.jpg";
import tornado from "./tornado.jpg";

class Registration extends Component {
    // Setting the component's initial state
    state = {
        userName: "",
        userEmail: "",
        userPwd: "",
        userAns: 0
    };

    handleInputChange = event => {
        // Getting the calue and name of the input
        //  which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "userPwd") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the 
        // form submit ( which is to refresh the page)
        event.preventDefault();
        if (!this.state.userName || !this.state.userEmail) {
            alert("Please include your username and email.");


        } else if (this.state.userPwd.length < 6) {
            alert(`Please choose a more secure password 
                ${this.state.userName}`
            );


        } else {
            alert(`Hello ${this.state.userName}. Welcome
                to Autobongs!`)
        }

        this.setState({
            userName: "",
            userEmail: "",
            userPwd: "",
            userAns0: 0,
            userAns1: 0,
            userAns2: 0,
            userAns3: 0,
            userAns4: 0,
            userAns5: 0

        });

        const userToCreate = {
            userName: this.state.userName,
            userPwd: this.state.userPwd,
            userEmail: this.state.userEmail,
            userAns0: this.state.userAns0,
            userAns1: this.state.userAns1,
            userAns2: this.state.userAns2,
            userAns3: this.state.userAns3,
            userAns4: this.state.userAns4,
            userAns5: this.state.userAns5
        }

        return Api.register(userToCreate)
            .then(user => {
                console.log(user)
                this.props.history.push(`/users/${user._id}`)
            })

        //MAKE API CALL TO POST USER DATA TO DB

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3001/user',
        //     data: {
        //         userName: this.state.userName,
        //         userEmail: this.state.userEmail,
        //         userPwd: this.state.userPwd
        //     }

        // })

        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

        console.log(this.state);
    };

    render() {
        // This is where the 'value', 'name', and 
        // 'onChange' props are
        return (
            <div className="container-fluid">
                <div className=".row">
                    <div className=".col-xs-4">
                        <h2 className="title">Please Enter New User Information</h2>

                        <div className=".row">
                            <div className=".col-xs-4">
                                <form className="form-inline form1" action="/submit" method="post">
                                    <div className="form-group">
                                        <input className=".form-Control"
                                            value={this.state.userName}
                                            name="userName"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={this.state.userEmail}
                                            name="userEmail"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={this.state.userPwd}
                                            name="userPwd"
                                            onChange={this.handleInputChange}
                                            type="userPwd"
                                            placeholder="Password"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className=".row">
                            <div className=".col-xs-4"> */}
                        {/* <button type="button" className="btn btn-success"
                                    onClick={this.handleFormSubmit}>Submit</button> */}
                        {/* </div>
                        </div> */}

                        <div>
                            {/* <div className=".container .box1"> */}
                            <div className=".row ">
                                <div className=".col-xs-4">
                                    <form>
                                        <h2>Please Answer the Following Questions</h2>

                                        {/* question 1 */}

                                        <div className="form-group">
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-12">

                                                <h3>      What type of material will you be using in this Autobong? </h3>
                                                <div className="row">

                                                    <div className="card col-6" style={{ width: "100%" }}>
                                                        <img className="allign-center card flower" alt="flower" src={flower} style={{

                                                            width: "100%",
                                                            height: "100%",
                                                            alignContent: "left",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Flower</b><i> the plant version that is the orginal form of the plant.</i></p>
                                                        </div>
                                                    </div>

                                                    <div className="card col-6" style={{ width: "100%" }}>
                                                        <img className="allign-center card flower" alt="concentrate" src={Wax} style={{

                                                            width: "100%",
                                                            height: "100%",
                                                            alignContent: "right",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Concentrates</b> <i> It comes in various forms but it's a concentrated verion of the plant where its been extracted into an oil or shatter.</i></p>
                                                        </div>

                                                    </div>
                                                </div>


                                                <label className="label">
                                                    {/* <h3>      What type of material will you be using in this Autobong? </h3> */}
                                                    {/* INPUTTING SURVEY SELECTIONS BELOW */}
                                                    <select className="select"
                                                        value={this.state.userAns0}
                                                        name="userAns"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">Flower</option>
                                                        <option value="2">Concentrates</option>
                                                    </select>

                                                </label>

                                            </div>
                                        </div>


                                        <br></br>
                                        <br></br>


                                        {/* question 2 */}

                                        <div className=".row form-group">
                                            <div className="col-12">

                                                <h3>  What style of downstem do you prefer?</h3>

                                                <div className="row">

                                                    <div className="card col-6" style={{ width: "50%" }}>
                                                        <img className="allign-center card " alt="natural down stem" src={natural} style={{

                                                            width: "40%",
                                                            height: "40%",
                                                            alignContent: "left",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Direct Inject</b><i> is a popular choice for less moving parts and functional, the direct inject downstem will come in a 90 degree angle</i></p>
                                                        </div>
                                                    </div>

                                                    <div className="card col-6" style={{ width: "50%" }}>
                                                        <img className="allign-center card flower" alt="downstem" src={downstem} style={{

                                                            width: "40%",
                                                            height: "40%",
                                                            alignContent: "left",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Diffused Downstem</b> <i>Normal Diffused are inserted into the bong and removeable for cleaning and are diffused for extra percalation </i></p>
                                                        </div>
                                                    </div>



                                                </div>



                                                <label className="label">
                                                    <select value={this.state.userAns1}
                                                        name="userAns1"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">Direct Inject</option>
                                                        <option value="2">Normal Diffused</option>
                                                    </select>
                                                </label>


                                            </div>
                                        </div>

                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>



                                        {/* question three */}



                                        <div className="row form-group">
                                            <div className="col-12">

                                                <h3> When it comes to percolation, which style do you prefer?</h3>

                                                <div className="row">
                                                    <br></br>
                                                    <div className="card col-6" style={{ width: "50%" }}>
                                                        <img className="allign-center card " alt="natural down stem" src={honey} style={{
                                                            // padding: "10px",
                                                            width: "50%",
                                                            height: "35%",
                                                            alignContent: "left",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Honeycomb</b><i>The shape of honeycomb percs give them the functionality they need to filter smoke with such efficiency. The round discs fit perfectly in the tube of the bong, and the small holes excel in diffusing the smoke. Most of all, they accomplish this without slowing down the smoking process.  </i></p>
                                                        </div>
                                                    </div>



                                                    <div className="card col-6" style={{ width: "50%" }}>
                                                        <img className="allign-center card flower" alt="tree perc" src={tree} style={{
                                                            // padding: "10px",
                                                            width: "60%",
                                                            height: "40%",
                                                            alignContent: "right",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Tree Arm</b> <i> Tree percolators are fairly simple. Within the tube of the bong, there is a .collection of rods that resemble tree limbs. With a few slits per “limb”, there will be plenty of diffusion. </i></p>
                                                        </div>
                                                    </div>








                                                    <div className="row">
                                                    
                                                    <div className="card col-6" style={{ width: "100%" }}>
                                                        <img className="allign-center card " alt="tornado" src={tornado} style={{

                                                            width: "50%",
                                                            height: "50%",
                                                            alignContent: "left",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Tornado</b><i> Turbine percolators excel in function while also delivering a unique aesthetic. The shape of the percolator causes water to travel up the sides of the pipe, providing effective filtration in addition to incredible visuals </i></p>
                                                        </div>
                                                    </div>



                                                    <div className="card col-6" style={{ width: "100%" }}>
                                                        <img className="allign-center card flower" alt="berrel perc" src={barrel} style={{
                                                            padding: "10px",
                                                            width: "100%",
                                                            height: "50%",
                                                            alignContent: "right",
                                                            // display: "block",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            // backgroundImage: "{{flower}}"
                                                        }} />   <div className="card-body">
                                                            <p className="card-text"> <b>Slotted Barrel</b> <i> Tree percolators are fairly simple. Within the tube of the bong, there is a .collection of rods that resemble tree limbs. With a few slits per “limb”, there will be plenty of diffusion. </i></p>
                                                        </div>
                                                    </div>
                                                    


                                                </div>
                                            </div>
                                        </div>



                                        <label className="label">


                                            <select value={this.state.userAns2}
                                                name="userAns2"
                                                onChange={this.handleInputChange}>
                                                <option value="" disabled selected>Select One</option>
                                                <option value="1">Honeycomb</option>
                                                {/* <p>The shape of honeycomb percs give them the functionality they need to filter smoke with such efficiency. The round discs fit perfectly in the tube of the bong, and the small holes excel in diffusing the smoke. Most of all, they accomplish this without slowing down the smoking process.</p> */}

                                                <option value="2">Tree Arm</option>
                                                {/* <p>Tree per.colators are fairly simple. Within the tube of the bong, there is a .collection of rods that resemble tree limbs. With a few slits per “limb”, there will be plenty of diffusion. */}


                                                <option value="3">Tornado Perc</option>
                                                {/* <p>Turbine per.colators excel in function while also delivering a unique aesthetic. The shape of the per.colator causes water to travel up the sides of the pipe, providing effective filtration in addition to incredible visuals.</p> */}

                                                <option value="4">Slotted Barrel</option>
                                                {/* <p>Matrix per.colators are located in the center, with plenty of space around them, making for quite the aesthetic. Because the top holes do not have much resistance, the lower holes are not likely to bring enough smoke in. A matrix per.colator operates in a similar way to showerhead percss.</p> */}

                                            </select>

                                        </label>




                                        </div>

                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>






                                        {/* question 4 */}
                                        <div className=".row form-group">
                                            <div className=".col-xs-4">
                                                <label className="label">
                                                    Which joint size would you like?
                <select value={this.state.userAns3}
                                                        name="userAns3"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">18mm Female</option>
                                                        <option value="2">14mm Female</option>
                                                        <option value="3">18mm Male</option>
                                                        <option value="4">14mm Male</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className=".row form-group">
                                            <div className=".col-xs-4">
                                                <label className="label">
                                                    What material would you like?
                <select value={this.state.userAns4}
                                                        name="userAns4"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">Glass</option>
                                                        <option value="2">Silicone</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className=".row form-group">
                                            <div className=".col-xs-4">
                                                <label className="label">
                                                    Do you like ice, and would you like an ice catcher?
                <select value={this.state.userAns5}
                                                        name="userAns5"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">Yes, I would like an ice catcher</option>
                                                        <option value="2">No, I prefer to not have an ice catcher</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className=".row form-group">
                                            <div className=".col-xs-4">
                                                <button type="button" className="btn btn-success"
                                                    onClick={this.handleFormSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Registration;





