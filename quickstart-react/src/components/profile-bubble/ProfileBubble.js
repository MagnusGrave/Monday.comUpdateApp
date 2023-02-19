//component to display the profile bubble
//Disaplays the profile picture of the user
//Displays the name of the user

import React from "react";
import "./profile-bubble.css";

const ProfileBubble = ({ name, color }) => {
    return (
//displays users name and profile picture
        <div className="profile-bubble">
            <div className="profile-bubble__img">
                {TODO ("Display Users Profile Image") }
            </div>
            <div className="profile-bubble__text">
                {TODO ("Display Name of User")}
                {name}
            </div>
        </div>
    );
    };

export default ProfileBubble;