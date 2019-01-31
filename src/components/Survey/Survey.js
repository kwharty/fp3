import React, { Component } from 'react';



class Survey extends Component {
    render() {
        return (
            <div className=".container">
            <div className="border">
    
                <div className=".row ">
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
                                    <label>
                                        When it comes to percolation, which style do you prefer?
                <select>
                                            <option value="" disabled selected>Select One</option>
                                            <option value="choiceOne">Honeycomb</option>
                                            {/* <p>The shape of honeycomb percs give them the functionality they need to filter smoke with such efficiency. The round discs fit perfectly in the tube of the bong, and the small holes excel in diffusing the smoke. Most of all, they accomplish this without slowing down the smoking process.</p> */}

                                            <option value="choiceTwo">Tree Arm</option>
{/* <p>Tree percolators are fairly simple. Within the tube of the bong, there is a collection of rods that resemble tree limbs. With a few slits per “limb”, there will be plenty of diffusion. */}

                                            
                                            <option value="choiceThree">Tornado Perc</option>
{/* <p>Turbine percolators excel in function while also delivering a unique aesthetic. The shape of the percolator causes water to travel up the sides of the pipe, providing effective filtration in addition to incredible visuals.</p> */}

                                            <option value="choiceFour">Slotted Barrel</option>
{/* <p>Matrix percolators are located in the center, with plenty of space around them, making for quite the aesthetic. Because the top holes do not have much resistance, the lower holes are not likely to bring enough smoke in. A matrix percolator operates in a similar way to showerhead percss.</p> */}

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
                                            {/* <i>Glass is the standard and most smokers prefer the classic feel and tast glass gives, As nice as it is they are fragile.</i> */}
                                            <option value="choiceTwo">Silicone</option>
                                            {/* <i>Silicone is heat resiantant, shatter-proof, and can be made in ways glass can't</i> */}
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
            </div>
        );
    }
}

export default Survey;