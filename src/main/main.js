import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './main.css';
const Main = vars => {
  return (
<div className="Main">      
    <Accordion defaultActiveKey="0">
    <Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
        <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
</div>
  );
};
export default Main;