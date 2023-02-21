import React from 'react';
import './text-bubble.css';

//component to display the text bubble
//text_bubble is an object with text and user_id
//user_id is used to determine if the text bubble should be on the left or right side of the screen
//user_id is also used to determine the color of the text bubble
//user_id is also used to determine the profile picture of the user
//user_id is also used to determine the name of the user

//component is used in display-text-bubbles.js

//testing user id
//TODO: replace with actual user id from database
const isUser = (user_id) => {
    if (user_id === 1) {
        return true;
    } else {
        return false;
    }
};

const TextBubble = ({ text, user_id }) => {
    return (
        <div className={`text-bubble`}>
            {isUser(user_id) ? (
                <div className="text-bubble__arrow--right">
                </div>
            ) : (
                <div className="text-bubble__arrow--left">
                </div>
            )}
            <div className="text-bubble__text">
                {text}
            </div>
        </div>
    );
};

export default TextBubble;