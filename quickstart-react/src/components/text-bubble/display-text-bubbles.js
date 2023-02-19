import TextBubble from "./text-bubble";

//create an array of text_bubble objects


const DisplayTextBubbles = ({ text_bubbles }) => {
  return (
    <div className="display-text-bubbles">
      {text_bubbles.map((text_bubble, index) => (
        <TextBubble
          key={index}
          text={text_bubble.text}
          color={text_bubble.color}
        />
      ))}
    </div>
  );
};

export default DisplayTextBubbles;
