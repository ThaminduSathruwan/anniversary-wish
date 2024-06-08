import React from "react";
import "./FloatingHearts.css";
import { generateRandomPositions } from "./utils/generatePositions";

const FloatingHearts = () => {
  const emojis = ["❤️", "😘", "💖", "💕", "😍", "🥰"];
  const positions = generateRandomPositions(100); // Generate 100 random positions
  const emojiElements = Array.from({ length: 100 }).map(
    () => emojis[Math.floor(Math.random() * emojis.length)]
  );

  return (
    <div className="hearts-container">
      {emojiElements.map((emoji, index) => (
        <div
          key={index}
          className="emoji"
          style={{
            ...positions[index],
            fontSize: `${Math.random() * 2 + 1}rem`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
