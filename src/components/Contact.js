import React from "react";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="Contact">
      <img src={props.avatar} className="avatar" />
      <div>
        <h4 className="name"> {props.name} </h4>
        <div className="status">
          <div
            className={
              props.status === "online" ? "status-online" : "status-offline"
            }
          />
          <p className="status-text">{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
