//component to display the profile bubble

import React from "react";
import "./profile-bubble.css";

const ProfileBubble = ({ name, color }) => {
    return (
//displays users name and profile picture
        <div className="profile-bubble">
            <div className="profile-bubble__img">
            </div>
            <div className="profile-bubble__text">
                {name}
            </div>
        </div>
    );
    };

export default ProfileBubble;