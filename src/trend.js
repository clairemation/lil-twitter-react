import React, {Component} from 'react';

class Trend extends Component {
  constructor(args){
    super(args)
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }


  fetchHashtagTweets(){
    this.props.fetchHashtagTweets(this.props.hashtagName)
  }

  render() {
    return (
      <li onClick={this.fetchHashtagTweets}>{this.props.hashtagName}</li>
    )
  }
}

export default Trend