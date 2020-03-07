import React from "react";
import { Tweet } from "./Tweet";

function Tweets(props) {
  const tweetsHtml = [];
  for (var i = 0; i < props.tweets.length; i++) {
    tweetsHtml.push(<Tweet key={props.tweets[i].id} author={props.tweets[i].author} tweet={props.tweets[i].tweet} />);
  }
  return <div className="tweets">{tweetsHtml}</div>;
}

export default Tweets;
