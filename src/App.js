import React, {Component} from 'react';
import TweetStreamDisplay from './tweet-stream-display'
import TrendsStream from './trends-stream'
import TweetForm from './tweet-form'
import SearchBox from './search-box'
import tweetStubData from './tweets-stub-data'

const STUB_MODE = false

class App extends Component {
  constructor(args) {
    super(args)
    this.state = {displayedTweets: []}
    this.setDisplayedTweets = this.setDisplayedTweets.bind(this)
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
    this.fetchRecentTweets = this.fetchRecentTweets.bind(this)
  }

  setDisplayedTweets(tweets){
    this.setState({displayedTweets: tweets})
  }

  componentDidMount(){
    this.fetchRecentTweets()
  }

  fetchRecentTweets() {
    if (STUB_MODE) this.setState({displayedTweets: tweetStubData})
    else {
      fetch("http://localhost:8000/tweets/recent")
        .then(response => response.json())
        .then(jsonObj => this.setState({displayedTweets: jsonObj}))
    }
  }

  fetchHashtagTweets(hashtagName){
    fetch(`http://localhost:8000/tweets/search/${hashtagName}`)
      .then(response => response.json())
      .then(jsonObj => this.setState({displayedTweets: jsonObj}))
  }

  render(){
    if(this.state.displayedTweets[0]){
      return (

        <div className="App">

          <header id="top-nav">
            <div id="brand">Lil Twitter API</div>
            <SearchBox fetchHashtagTweets={this.fetchHashtagTweets} />
            <i className="fa fa-search"></i>
          </header>
          <section className="container">
            <section id="tweet-box">
              <p id="tweet-box-title">Compose New Tweet</p>
              <TweetForm fetchRecentTweets={this.fetchRecentTweets} />
            </section>
            <section id="trends-container">
              <h3>Trends</h3>
              <TrendsStream setDisplayedTweets={this.setDisplayedTweets} />
            </section>
            <section id="tweets-container">
              <h3>Tweets</h3>
              <TweetStreamDisplay data={this.state.displayedTweets} fetchHashtagTweets={this.fetchHashtagTweets} />
            </section>
          </section>


        </div>




      )
    }
    else return (
      <div></div>
    )
  }
}

export default App