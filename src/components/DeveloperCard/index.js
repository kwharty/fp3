import React from "react";

const DeveloperCard = props => {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>About:</strong> {props.about}
          </li>
          <li>
            <strong>Contact:</strong> {props.linkedIn}
          </li>
        </ul>
      </div>
      </div>
    );
}

export default DeveloperCard;