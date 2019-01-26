import React, { Component } from 'react';
import './Registration.module.css';

const axios = require('axios');

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

        //MAKE API CALL TO POST USER DATA TO DB

        axios({
            method: 'post',
            url: 'localhost:3001/user',
            data: {
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                userPwd: this.state.userPwd
            }

        })
        
        console.log(this.state);
    };

    render() {
        // This is where the 'value', 'name', and 
        // 'onChange' props are
        return (
            <container>
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Please Enter New User Information</h1>
                       
                        <form className="form" action ="/submit"  method="post">
                            <input
                                value={this.state.userName}
                                name="userName"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Username"
                            />
                            <input
                                value={this.state.userEmail}
                                name="userEmail"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                value={this.state.userPwd}
                                name="userPwd"
                                onChange={this.handleInputChange}
                                type="userPwd"
                                placeholder="Password"
                            />
                            <button type="button" className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </container>
        );
    }
}

export default Registration;



