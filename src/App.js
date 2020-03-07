import React from 'react';
import { Container } from 'react-bootstrap';
import Tweets from './Tweets';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Tweets />
      </Container>
    </div>
  );
}

export default App;
