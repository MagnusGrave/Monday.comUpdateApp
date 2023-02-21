import TextBubble from "./text-bubble";
import "./text-bubble.css"

//component to display the text bubbles from database based on number of posts in database
//text_bubbles is an array of objects with text and user_id

const DisplayTextBubbles = ({ text_bubbles }) => {
  return (
    <>
    <div className="display-text-bubbles">
      {text_bubbles.map((text_bubble, index) => (
        <TextBubble
          key={index}
          text={text_bubble.text}
          color={text_bubble.color}
          user_id={text_bubble.user_id}
        />
      ))}
    </div>
    </>
  );
};

export default DisplayTextBubbles;
