import React from 'react';
import { Card } from 'react-bootstrap';
import './Tweets.css';


function Tweets() {
  return <div className="tweets">
    <Card className="tweet">
      <Card.Header>Javvad</Card.Header>
      <Card.Body>
        <Card.Text>
          Hello Javvad
          </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Javvad</Card.Header>
      <Card.Body>
        <Card.Text>
          Hello Javvad
          </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default Tweets