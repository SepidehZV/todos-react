import React from 'react';
import { Card } from 'react-bootstrap';
import './Task.scss';

const Task = (props) => {
  return (
  <Card bg="info" className="task">
    <Card.Body>
      <Card.Text>
        this is a simple task
      </Card.Text>
    </Card.Body>
  </Card>
  );
}


export default Task;