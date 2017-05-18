import React, {Component} from 'react';
import Tweet from './tweet'
import tweetStubData from './tweets-stub-data'

const STUB_MODE = false

class TweetStream extends Component {
  constructor(args) {
    super(args)
    this.state = {data: []}
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }

  fetchHashtagTweets(hashtagName){
    console.log("asdf")
    fetch(`http://localhost:8000/tweets/search/${hashtagName}`)
      .then(response => response.json())
      .then(jsonObj => this.setState({data: jsonObj}))
  }

  componentDidMount() {
    if (STUB_MODE) this.setState({data: tweetStubData})
    else {
      fetch("http://localhost:8000/tweets/recent")
        .then(response => response.json())
        .then(jsonObj => this.setState({data: jsonObj}))
    }
  }

  render(){
    if(this.state.data[0]){
      return (
        <ul id="tweet-stream-react">
          {this.state.data.map((data, i) =>
            <Tweet data={this.state.data[i]} key={i} fetchHashtagTweets={this.fetchHashtagTweets} />
          )}
        </ul>
      )
    }
    else return (
      <ul></ul>
    )
  }
}

export default TweetStream