import React from 'react';
import './text-bubble.css';

// const TextBubble = ({ text }) => {
//   return (
//     <div className="text-bubble">
//         <div className="text-bubble__arrow">
//         </div>
//       <div className="text-bubble__text">
//         {text}
//       </div>
//     </div>
//   );
// };

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