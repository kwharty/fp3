import React, { Component } from 'react';
import './Registration.module.css';
// import User from '../api/userModel.js'
import Api from "../../services/api";

class Registration extends Component {
    // Setting the component's initial state
    state = {
        userName: "",
        userEmail: "",
        userPwd: ""
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
            userPwd: ""
        });

        const userToCreate = {
            userName: this.state.userName,
            userPwd: this.state.userPwd,
            userEmail: this.state.userEmail
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
                            <div className=".row">
                                <div className=".col-xs-4">
                                    <button type="button" className="btn btn-success"
                                        onClick={this.handleFormSubmit}>Submit</button>
                                </div>
                            </div>
                        
                        <div>
                            {/* <div className=".container .box1"> */}
                                <div className=".row ">
                                    <div className=".col-xs-4">
                                        <form>
                                                <h2>Please Answer the Following Questions</h2>
                                            <div className="form-group">
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">

                                                    <label className="label">
                                                        What type of material will you be using in this Autobong?
                <select className="select">
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">Flower</option>
                                                            <option value="choiceTwo">Concentrates</option>
                                                        </select>

                                                    </label>

                                                </div>
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">
                                                    <label className="label">
                                                        What style of stem do you prefer?
                <select>
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">Direct Inject</option>
                                                            {/* <p>A popular choice for less moving parts and functional, the direct inject downstem will come in a 90 degree angle</p> */}
                                                            <option value="choiceTwo">Normal Diffused</option>
                                                            {/* <p>this downstem is inserted into the bong and removeable for cleaning and are diffused for extra percalation</p> */}
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">
                                                    <label className="label">
                                                        When it comes to percolation, which style do you prefer?
                <select>
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">Honeycomb</option>
                                                            {/* <p>The shape of honeycomb percs give them the functionality they need to filter smoke with such efficiency. The round discs fit perfectly in the tube of the bong, and the small holes excel in diffusing the smoke. Most of all, they accomplish this without slowing down the smoking process.</p> */}

                                                            <option value="choiceTwo">Tree Arm</option>
                                                            {/* <p>Tree per.colators are fairly simple. Within the tube of the bong, there is a .collection of rods that resemble tree limbs. With a few slits per “limb”, there will be plenty of diffusion. */}


                                                            <option value="choiceThree">Tornado Perc</option>
                                                            {/* <p>Turbine per.colators excel in function while also delivering a unique aesthetic. The shape of the per.colator causes water to travel up the sides of the pipe, providing effective filtration in addition to incredible visuals.</p> */}

                                                            <option value="choiceFour">Slotted Barrel</option>
                                                            {/* <p>Matrix per.colators are located in the center, with plenty of space around them, making for quite the aesthetic. Because the top holes do not have much resistance, the lower holes are not likely to bring enough smoke in. A matrix per.colator operates in a similar way to showerhead percss.</p> */}

                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">
                                                    <label className="label">
                                                        Which joint size would you like?
                <select>
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">18mm Female</option>
                                                            <option value="choiceTwo">14mm Female</option>
                                                            <option value="choiceThree">18mm Male</option>
                                                            <option value="choiceFour">14mm Male</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">
                                                    <label className="label">
                                                        What material would you like?
                <select>
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">Glass</option>
                                                            <option value="choiceTwo">Silicone</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=".row form-group">
                                                <div className=".col-xs-4">
                                                    <label className="label">
                                                        Do you like ice, and would you like an ice catcher?
                <select>
                                                            <option value="" disabled selected>Select One</option>
                                                            <option value="choiceOne">Yes, I would like an ice catcher</option>
                                                            <option value="choiceTwo">No, I prefer to not have an ice catcher</option>
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

            </div>
        );
    }
}

export default Registration;





