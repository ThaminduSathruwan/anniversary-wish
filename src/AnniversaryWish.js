import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SpecialMessage from "./SpecialMessage";

const AnniversaryWish = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="text-center anniversary-card">
            <Card.Body>
              <Card.Title className="display-4 title ">
                <span className="highlight">Happy Anniversary, My Love!</span>
              </Card.Title>
              <Button
                variant={showMessage ? "secondary" : "danger"}
                onClick={handleClick}
              >
                {showMessage ? "Hide Message" : "Click Me"}
              </Button>
              {showMessage && <SpecialMessage name="Her Name" />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnniversaryWish;
