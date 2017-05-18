import React, {Component} from 'react';
import Trend from './trend'

const STUB_MODE = true
const hashtagsStubData = ['atque', 'aspernatur', 'qui', 'omnis']

class TrendsStream extends Component {
  constructor(args){
    super(args)
    this.state = {hashtagNames: []}
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }

  componentWillMount(){
    if (STUB_MODE) this.setState({hashtagNames: hashtagsStubData})
    else this.fetchHashtagNames()
  }

  updateTweetRiver(tweets){
    this.props.setDisplayedTweets(tweets)
  }

  fetchHashtagNames(){
    fetch(`http://localhost:8000/hashtags/popular`, {mode: 'no-cors'})
      .then(response => response.json())
      .then(jsonObj => console.log(jsonObj))
  }

  fetchHashtagTweets(hashtagName){
    fetch(`http://localhost:8000/tweets/search/${hashtagName}`)
      .then(response => response.json())
      .then(jsonObj => this.updateTweetRiver(jsonObj))
  }

  render() {
    return (
      <section id="trends-stream-react">
        {this.state.hashtagNames.map((hashtagName, i) => <Trend key={i} fetchHashtagTweets={this.fetchHashtagTweets} hashtagName={this.state.hashtagNames[i]} />)}
      </section>
    )
  }
}

export default TrendsStream