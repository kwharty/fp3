import React, { Component } from 'react';

class Survey extends Component {
    render() {
        return (
            <div className=".container"  style={{
                backgroundImage: "url(" + "https://st3.depositphotos.com/10409000/19150/v/600/depositphotos_191509552-stock-video-realistic-dry-ice-smoke-clouds.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '7%',
                opacity: 10
              }}>
                <div className=".row">
                    <div className=".col-xs-4">
                        <form>
                        <div className="form-group">     
                            <h2>Please Answer the Following Questions</h2>
                            </div>
                            <div className=".row form-group">
                                <div className=".col-xs-4">
                                
                                    <label>
                                        What type of material will you be using in this Autobong?
                <select>
                                            <option value="" disabled selected>Select One</option>
                                            <option value="choiceOne">Flower</option>
                                            <option value="choiceTwo">Concentrates</option>
                                        </select>
                                    </label>
                                    
                                </div>
                            </div>
                            <div className=".row form-group">
                                <div className=".col-xs-4">
                                    <label>
                                        What style of stem do you prefer?
                <select>
                                            <option value="" disabled selected>Select One</option>
                                            <option value="choiceOne">Natural Downstem</option>
                                            <option value="choiceTwo">Normal Diffused</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className=".row form-group">
                                <div className=".col-xs-4">
                                    <label>
                                        When it comes to percolation, which style do you prefer?
                <select>
                                            <option value="" disabled selected>Select One</option>
                                            <option value="choiceOne">Honeycomb</option>
                                            <option value="choiceTwo">Tree Arm</option>
                                            <option value="choiceThree">Slotted</option>
                                            <option value="choiceFour">Slotted Barrel</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className=".row form-group">
                                <div className=".col-xs-4">
                                    <label>
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
                                    <label>
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
                                    <label>
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
            </div>
        );
    }
}

export default Survey;