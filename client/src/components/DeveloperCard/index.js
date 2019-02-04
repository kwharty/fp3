import React from "react";
import { Link } from "react-router-dom";


const DeveloperCard = props => {
    return (




        <div className="card" style ={{
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



        }}/>
      </div>
      <div className="content text-center" style ={{
// backgroundColor: "grey",
color: "white",
fontSize: "25px",
textShadow: "2px 2px 4px #000000",


      }} >
        <ul >
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>About:</strong> {props.about}
          </li>
          <li>
            <a href={props.contact}>Link</a>
          </li>
        </ul>
      </div>
      </div>
    );
}

export default DeveloperCard;