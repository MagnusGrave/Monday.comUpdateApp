//component to display the profile bubble
//Disaplays the profile picture of the user
//Displays the name of the user

import React from "react";
import "./profile-bubble.css";
import profileImg from "../../images/profileImg.png";

const ProfileBubble = ({ name }) => {
  return (
    //displays users name and profile picture
    <div className="container">
      <div className="row">
        <div className="col-8 d-flex">
          <img className="w-25" src={profileImg} alt="profile" />
          <div className="d-flex align-items-center ps-3">{name}</div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileBubble;
