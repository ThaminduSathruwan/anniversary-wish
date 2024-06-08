import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SpecialMessage from "./SpecialMessage";
import "./AnniversaryWish.css";

const AnniversaryWish = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 mx-0">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="text-center anniversary-card">
            <Card.Body>
              <Card.Title className="display-4 title">
                Happy Anniversary, My Love!
              </Card.Title>
              <Card.Text className="lead">
                To the most amazing girlfriend in the world, happy anniversary!
                You make my life complete, and I can't wait to spend many more
                anniversaries with you.
              </Card.Text>
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
