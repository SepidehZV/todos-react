import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Task from './components/Task';

function App() {
  return (
    <Container fluid className="App">
      <Task/>
    </Container>

  );
}

export default App;
