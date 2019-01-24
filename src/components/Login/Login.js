import React, { Component } from 'react';
import './Login.module.css';

class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting the calue and name of the input
        //  which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
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
        if (!this.state.firstName || !this.state.lastName) {
            alert("Please include your first and last name.");
        } else if (this.state.password.length < 6) {
            alert(`Please choose a more secure password 
                ${this.state.firstName} ${this.state.lastName}`
            );
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}. Welcome
                to Autobongs!`)
        }

        this.setState({
            firstName: "",
            lastName: "",
            password: ""
        });
    };

    render() {
        // This is where the 'value', 'name', and 
        // 'onChange' props are
        return (
            <container>
            <div className="row">
            <div className="col-sm-6">
            <h1>Please Enter New User Information</h1>
                {/* <p>
                    Hello {this.state.firstName} {this.state.lastName}
                </p> */}
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
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

export default Form;



