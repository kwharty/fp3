import React, { Component } from 'react';
import './Registration.module.css';
import Api from "../../services/api";
import flower from "./flower.jpg";
import Wax from "./Wax.jpg";
import natural from "./natural.jpg";
import downstem from "./downstem.jpg";
import honey from "./honeycomb.jpg";
import tree2 from "./tree2.jpg";
import barrel from "./barrel.jpg";
import tornado from "./tornado.jpg";
import Tier1 from "../Tier1";
import Tier2 from "../Tier2";
import Tier3 from "../Tier3";
import Navbar from "../Navbar";
import bowl1 from "./bowl1.jpg";
import bowl2 from "./bowl2.jpg";
import bowl3 from "./bowl3.jpg";
import bowl4 from "./bowl4.jpg";
import silicone from "./silicone.jpg";



class Registration extends Component {
    // Setting the component's initial state
    state = {
        userName: "",
        userEmail: "",
        userPwd: "",
        userAns0: 0,
        userAns1: 0,
        userAns2: 0,
        userAns3: 0,
        userAns4: 0,
        userAns5: 0,
        nav: "registration"
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

    handleClick(name, value) {
        console.log('clicked');
        this.setState({
            [name]: value
        }, () => { console.log("state after click: ", this.state) });
    }

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

        //calculate score
        //    const userAnsTotal: (this.state.userAns0 + this.state.userAns1 + this.state.userAns3 + this.state.userAns4 + this.state.userAns5),
        //based on score set nat to resultOne, Two, or Three
        this.setState({ nav: "welcome" }, () => console.log("state after submit", this.state));

        if (this.state.userAns5 === this.state.userAns0) {
            this.setState({ nav: "resultOne" }, () => console.log("state after submit", this.state));
        }

        else if (this.state.userAns5 > this.state.userAns4) {
            this.setState({ nav: "resultTwo" }, () => console.log("state after submit", this.state));
        }

        else {
            this.setState({ nav: "resultThree" }, () => console.log("state after submit", this.state));
        }

        //for API call 
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
                //redirect
                //this.props.history.push(`/users/${user._id}`)
            }).catch(error => {
                console.log(error.response.data)
            })
        //END API CALL
    };

    render() {
        // This is where the 'value', 'name', and 
        // 'onChange' props are
        console.log('nav in render ', this.state.nav);
        const style = {
            selected: { border: "3px solid red", "height": "500px", "overflow-y": "auto" },
            border: { "height": "500px", "overflow-y": "auto" },
            grey: { "background": "rgba(192, 189, 214, 0.521)"},
            dev: {  textAlign: "center"}
        }
        switch (this.state.nav) {
            case "registration":
                return (
                    <div className="containerFluid">
                    <div className="row">
                    
                        <div className="row" style={{"marginLeft": "16%", "marginBottom": "15px", "background": "rgba(192, 189, 214, 0.721)", "marginTop": "10px", "color": "white", "textAlign": "center", "width": "68%"}}>
                            <div className="col-12">
                            <h1>Please Enter New User Information</h1>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-offset-8" style={{"margin": "auto"}}>
                                <form className="form justify-content-center">
                                    <div className="form-group">
                                        <input className="form-Control"
                                            style={{'width': "420px", "fontWeight": "bold"}}
                                            value={this.state.userName}
                                            name="userName"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            style={{'width': "420px", "fontWeight": "bold"}}
                                            value={this.state.userEmail}
                                            name="userEmail"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            style={{'width': "420px", "fontWeight": "bold"}}
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
                        <div>
                            <div className="row ">
                                <div className="col-8 offset-2" style={style.grey}>
                                    <form>
                                        <h2>Please Answer the Following Questions</h2>
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <h3>What type of material will you be using in this Autobong?</h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns0 == 1 ? style.selected : style.border} onClick={() => { this.handleClick("userAns0", 1) }}>
                                                            <img className="card-img-top" alt="flower" src={flower} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 clasName="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Flower</h5>
                                                                <p className="card-text"> <i>The orginal form of the plant. For the smoking purist who like to keep things traditional.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns0 == 2 ? style.selected : style.border} onClick={() => { this.handleClick("userAns0", 2) }}>
                                                            <img className="card-img-top" alt="concentrate" src={Wax} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Concentrates</h5>
                                                                <p className="card-text"> <i> It comes in various forms but it's a concentrated verion of the plant where its been extracted into an oil or shatter.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        {/* question 2 */}
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <h3>What style of downstem do you prefer?</h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns1 == 1 ? style.selected : style.border} onClick={() => { this.handleClick("userAns1", 1) }}>
                                                            <img className="card-img-top" style={{"width": "343px"}} alt="natural down stem" src={natural} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>    
                                                                <h5 className="card-title" style={{ "fontSize": "25px","fontWeight": "bolder"}}>Direct Inject</h5>
                                                                <p className="card-text"><i> is a popular choice for less moving parts and functional, the direct inject downstem will come in a 90 degree angle</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns1 == 2 ? style.selected : style.border} onClick={() => { this.handleClick("userAns1", 2) }}>
                                                            <img className="card-img-top" style={{"width": "340px", "marginLeft": "50px"}} alt="downstem" src={downstem} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Diffused Downstem</h5>
                                                                <p className="card-text"><i>Normal Diffused are inserted into the bong and removeable for cleaning and are diffused for extra percalation </i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        {/* question three */}
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <h3>When it comes to percolation, which style do you prefer?</h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns2 == 1 ? style.selected : style.border} onClick={() => { this.handleClick("userAns2", 1) }}>
                                                            <img className="card-img-top" style={{"width": "220px", "marginLeft": "110px"}} alt="flower" src={honey} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 clasName="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Honeycomb</h5>
                                                                <p className="card-text"><i>The round discs fit perfectly in the tube of the bong, and the small holes excel in diffusing the smoke. Most of all, they accomplish this without slowing down the smoking process.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns2 == 2 ? style.selected : style.border} onClick={() => { this.handleClick("userAns2", 2) }}>
                                                            <img className="card-img-top" style={{"width": "185px", "marginLeft": "110px"}} alt="natural down stem" src={tree2} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Tree Arm</h5>
                                                                <p className="card-text"> <i>The tree percolator provides ample cooling and percolation. Tree percs do a great job at diffusing smoke by utilizing multiple stems.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                                    <div className="row form-group">
                                                        <div className="col-12">
                                                        <h3></h3>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="card" style={this.state.userAns2 == 3 ? style.selected : style.border} onClick={() => { this.handleClick("userAns2", 3) }}>
                                                                        <img className="card-img-top" style={{"width": "285px", "marginLeft": "58px"}} alt="tornado" src={tornado} />
                                                                        <div className="card-body" style={{"textAlign": "center"}}>
                                                                            <h5 clasName="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Tornado</h5>
                                                                            <p className="card-text" > <i>Functional, and beautiful. The shape of the percolator causes water to travel up the sides of the pipe, providing effective filtration in addition to incredible visuals.</i></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="card" style={this.state.userAns2 == 4 ? style.selected : style.border} onClick={() => { this.handleClick("userAns2", 4) }}>
                                                                        <img className="card-img-top" style={{"width": "245px", "marginLeft": "78px"}} id="barrelImg" alt="slotted barrel" src={barrel} />
                                                                        <div className="card-body" style={{"textAlign": "center"}}>
                                                                            <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Slotted Barrel</h5>
                                                                            <p className="card-text"> <i>Slotted percolators are located in the center, with plenty of space around them, making for quite the aesthetic.</i></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        <br></br>
                                        <br></br>
                                        <br></br>


                                         <h3>Just a few more questions...</h3>



                                            <br></br>


                                            <div className="row form-group">
                                            <div className="col-12">
                                                <h3>Which joint size would you like?</h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns3 == 1 ? style.selected : style.border} onClick={() => { this.handleClick("userAns3", 1) }}>
                                                            <img className="card-img-top" style={{"width": "285px", "marginLeft": "55px"}} alt="flower" src={bowl2} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 clasName="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>14mm Female</h5>
                                                                <p className="card-text"><i>The smaller common universal joint size with a indented joint.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns3 == 2 ? style.selected : style.border} onClick={() => { this.handleClick("userAns3", 2) }}>
                                                            <img className="card-img-top" style={{"width": "289px", "marginLeft": "55px"}} alt="natural down stem" src={bowl4} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>14mm Male</h5>
                                                                <p className="card-text"> <i>The smaller common universal joint size with a outwards slant.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                                    <div className="row form-group">
                                                        <div className="col-12">
                                                        <h3></h3>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="card" style={this.state.userAns3 == 3 ? style.selected : style.border} onClick={() => { this.handleClick("userAns3", 3) }}>
                                                                        <img className="card-img-top" style={{"width": "285px", "marginLeft": "53px"}} alt="tornado" src={bowl1} />
                                                                        <div className="card-body" style={{"textAlign": "center"}}>
                                                                            <h5 clasName="card-title" style={{"fontSize": "25px", "fontWeight": "bolder", "paddingTop": "10px"}}>18mm Female</h5>
                                                                            <p className="card-text" > <i>The larger uninversal common joint size </i></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="card" style={this.state.userAns3 == 4 ? style.selected : style.border} onClick={() => { this.handleClick("userAns3", 4) }}>
                                                                        <img className="card-img-top" style={{"width": "235px", "marginLeft": "83px"}} id="barrelImg" alt="slotted barrel" src={bowl3} />
                                                                        <div className="card-body" style={{"textAlign": "center"}}>
                                                                            <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>18mm Male</h5>
                                                                            <p className="card-text"> <i>The larger uninversal common joint size</i></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


{/*                                             
                                        <div className="row" style={style.dev}>
                                            <div className="col-12">
                                                <label className="label">
                                                    Which joint size would you like?
                                                    <br></br>
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
                                        </div> */}


                                        <br></br>
                                        <br></br>
                                        <br></br>


                                        <div className="row form-group">
                                            <div className="col-12">
                                                <h3>What material would you like?</h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns4 == 1 ? style.selected : style.border} onClick={() => { this.handleClick("userAns4", 1) }}>
                                                            <img className="card-img-top" style={{"width": "350px", "paddingTop": "15px", "paddingBottom": "15px"}} alt="natural down stem" src={natural} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>    
                                                                <h5 className="card-title" style={{ "fontSize": "25px","fontWeight": "bolder"}}>Glass</h5>
                                                                <p className="card-text"><i> The classic choice and smooth.</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card" style={this.state.userAns4 == 2 ? style.selected : style.border} onClick={() => { this.handleClick("userAns4", 2) }}>
                                                            <img className="card-img-top" style={{"width": "270px", "marginLeft": "60px", "paddingTop": "10px"}} alt="downstem" src={silicone} />
                                                            <div className="card-body" style={{"textAlign": "center"}}>
                                                                <h5 className="card-title" style={{"fontSize": "25px", "fontWeight": "bolder"}}>Silicone</h5>
                                                                <p className="card-text"><i>Medical grade and unbreakable</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="row form-group" style={style.dev}>
                                            <div className="col-12">
                                                <label className="label">
                                                    What material would you like?
                                                    <br></br>
                <select value={this.state.userAns4}
                                                        name="userAns4"
                                                        onChange={this.handleInputChange}>
                                                        <option value="" disabled selected>Select One</option>
                                                        <option value="1">Glass</option>
                                                        <option value="2">Silicone</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div> */}

                                        <br></br>
                                        <br></br>
                                        <br></br>



                                        <div className="row form-group" style={style.dev}>
                                            <div className="col-12">
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
                                        <div className="row form-group" style={style.dev}>
                                            <div className="col-12">
                                                <button type="button" id="elButton" className="btn btn-success" 
                                                    onClick={(event) => { this.handleFormSubmit(event) }}>Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                )
                break;
            case "resultOne":
                return <div>
                    <Navbar />
                    <Tier1 />
                </div>;
            case "resultTwo":
                return <div>
                    <Navbar />
                    <Tier2 />
                </div>;
            case "resultThree":
                return <div>
                    <Navbar />
                    <Tier3 />
                </div>;
                break;
        }//end switch
    }
}
export default Registration;
