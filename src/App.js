import React from "react";
import { Spinner, Button, Container, Form } from "react-bootstrap";
import Tweets from "./Tweets";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      tweets: [],
      newTweet: "",
      canSubmit: false,
      creatingTweet: false
    };
  }

  componentDidMount() {
    fetch("/api/tweets")
      .then(res => res.json())
      .then(tweets => this.setState({ tweets: tweets, loading: false }));
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
              const newTweet = {
                author: "Javvad",
                tweet: this.state.newTweet
              };
              this.setState({ creatingTweet: true });
              fetch("/api/tweets", {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(newTweet)
              })
                .then(res => res.json())
                .then(createdTweet => {
                  this.setState({
                    tweets: [createdTweet].concat(this.state.tweets),
                    newTweet: "",
                    canSubmit: false,
                    creatingTweet: false
                  });
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
              disabled={!this.state.canSubmit || this.state.creatingTweet}
            >
              {this.state.creatingTweet ? (
                <Spinner animation="border" />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
          {this.state.loading ? (
            <Spinner animation="border" />
          ) : (
            <Tweets tweets={this.state.tweets} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
