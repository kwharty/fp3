import React from "react";
import { Link } from "react-router-dom";
import bong from "./bong5.jpg";


const DeveloperCard = props => {
    return (

        <div className="container" style ={{
          backgroundColor: "grey",
          backgroundImage: 'radial-gradient(white, grey, black)',

        }}  >

      <div className="img-container ">
        <img  className="allign-center" alt={props.name} src={props.image} style ={{

width: "30%",
height: "30%",
alignContent: "center",
display: "block",
marginLeft: "auto",
marginRight: "auto",
paddingTop: "100px",
paddingBottom: "30px",

        }}/>
      </div>
      <div className="content text-center " style ={{
// backgroundColor: "grey",
color: "white",
fontSize: "25px",
textShadow: "2px 2px 4px #000000",
textAlign: "center",
paddingBottom: "50px",
border: "2px solid white",
borderRadius: "8px",
borderStyle: "solid",
borderWidth: "5px",
        }} >
         <ul style={{listStyle: "none"}} >
         <br></br> <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>About:</strong> {props.about}
          </li>
          <li>
            <a href={props.contact}>Contact</a>
          </li>
        </ul>
      </div>
      </div>
    );
}

export default DeveloperCard;