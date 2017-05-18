import React, {Component} from 'react';
import Tweet from './tweet'

class TweetStreamDisplay extends Component{
  constructor(args){
    super(args)
    this.state = {data: this.props.data}
  }

  render(){
    return (
      <ul id="tweet-stream-display-react">
        {this.state.data.map((data, i) =>
          <Tweet data={this.state.data[i]} key={i} fetchHashtagTweets={this.fetchHashtagTweets} />
        )}
      </ul>
    )
  }
}

export default TweetStreamDisplay