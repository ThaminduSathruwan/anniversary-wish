import React from "react";
import { Card } from "react-bootstrap";
import "./SpecialMessage.css";

const SpecialMessage = ({ name }) => {
  return (
    <Card className="special-message">
      <Card.Body>
        <Card.Text>
          <span className="highlight">To my baby 😘,</span>
        </Card.Text>
        <Card.Text>
          As we celebrate our 6th anniversary together, I find myself reflecting
          on the incredible journey we've embarked upon side by side. Six years
          ago, I never could have imagined the depth of love and happiness you
          would bring into my life. Yet here we are, stronger and more in love
          than ever before. 💖
        </Card.Text>
        <Card.Text>
          Your unwavering love and unwavering support have been my guiding light
          through both the brightest days and the darkest nights. From the
          moment we met, you've filled my life with kisses😘, hugs🫂,
          laughter😍, joy, and endless moments of happiness😊. Your presence
          alone is enough to brighten even the gloomiest of days, and for that,
          I am endlessly grateful. 😊
        </Card.Text>
        <Card.Text>
          With each passing year, our bond only grows deeper, our connection
          stronger. You are not just my partner, but my best friend, my
          soulmate, and the love of my life. Every day spent by your side is a
          gift, and I cherish each moment we share together. 💏
        </Card.Text>
        <Card.Text>
          On this special day, I want to express my deepest gratitude for your
          love, your kindness, and your unwavering support. You are the heart
          and soul of our relationship, the one who completes me in every way
          imaginable. I am eternally thankful for the love we share and the life
          we've built together. ❤
        </Card.Text>
        <Card.Text>
          Here's to another year filled with love❤, laughter😊, kisses😘,
          hugs🫂, and countless unforgettable memories👩‍❤‍👨. I am beyond
          excited to continue our journey together, hand in hand, as we navigate
          the joys and challenges that lie ahead. With you by my side, I know
          that anything is possible. 🌟
        </Card.Text>
        <Card.Text>
          <span className="highlight">
            Happy 6th anniversary, my love. Here's to many more years of love,
            laughter, kisses, hugs, and endless adventures together. I love you
            more than words can say. 💖
          </span>
        </Card.Text>
        <Card.Text>
          <span className="highlight">Love you baby ❤😘</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpecialMessage;
