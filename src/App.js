import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Tweets from "./Tweets";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [
        { tweet: "Hello Javvad", author: "Javvad" },
        { tweet: "Hello Javvad 2", author: "Sattar" },
        { tweet: "Hello Javvad 3", author: "Addu" }
      ],
      newTweet: "",
      canSubmit: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Form
            className="mt-3"
            onSubmit={e => {
              e.preventDefault();
              this.setState({
                tweets: [
                  {
                    author: "Javvad",
                    tweet: this.state.newTweet
                  }
                ].concat(this.state.tweets),
                newTweet: "",
                canSubmit: false
              });
            }}
          >
            <Form.Group controlId="newTweet">
              <Form.Control
                as="textarea"
                name="newTweet"
                rows="3"
                onChange={e => {
                  let canSubmit = e.target.value === "" ? false : true;
                  this.setState({
                    newTweet: e.target.value,
                    canSubmit: canSubmit
                  });
                }}
                value={this.state.newTweet}
                placeholder="Your new tweet here ..."
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!this.state.canSubmit}
            >
              Submit
            </Button>
          </Form>
          <Tweets tweets={this.state.tweets} />
        </Container>
      </div>
    );
  }
}

export default App;
