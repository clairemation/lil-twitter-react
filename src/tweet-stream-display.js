import React, {Component} from 'react';
import Tweet from './tweet'

class TweetStreamDisplay extends Component{
  constructor(args){
    super(args)
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }

  updateTweetRiver(tweets){
    this.props.setDisplayedTweets(tweets)
  }

  fetchHashtagTweets(hashtagName){
    fetch(`http://localhost:8000/tweets/search/${hashtagName}`)
      .then(response => response.json())
      .then(jsonObj => this.updateTweetRiver(jsonObj))
  }

  render(){
    return (
      <ul id="tweet-stream-display-react">
        {this.props.data.map((data, i) =>
          <Tweet data={this.props.data[i]} key={i} fetchHashtagTweets={this.fetchHashtagTweets} />
        )}
      </ul>
    )
  }
}

export default TweetStreamDisplay