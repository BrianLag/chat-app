import React from 'react';
import './Contact.css';

const online = true;

const Contact = ({ firstName, avatar }) => {
    return (
        <div className="Contact">
            <img src={avatar} className="Avatar" />
            <div>
                <h4 className="name"> {firstName} </h4>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">{online ? 'Online' : 'Offline'}</div>
                </div>
            </div>
        </div>
    )
};

export default Contact
