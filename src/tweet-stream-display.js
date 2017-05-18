import React, {Component} from 'react';
import Tweet from './tweet'

class TweetStreamDisplay extends Component{
  constructor(args){
    super(args)
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }

  fetchHashtagTweets(hashtagName){
    this.props.fetchHashtagTweets(hashtagName)
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