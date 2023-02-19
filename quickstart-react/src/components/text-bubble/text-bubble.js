import React from 'react';
import './text-bubble.css';

const TextBubble = ({ text }) => {
  return (
    <div className="text-bubble">
      <div className="text-bubble__text">
        {text}
      </div>
    </div>
  );
};

export default TextBubble;