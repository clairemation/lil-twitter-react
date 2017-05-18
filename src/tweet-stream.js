import React, {Component} from 'react';
import Tweet from './tweet'
import TweetStreamDisplay from './tweet-stream-display'
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

        <div className="App">

          <header id="top-nav">
            <div id="brand">Lil Twitter API</div>
            <form id="search-form">
              <input id="search" type="text" name="query" />
            </form>
            <i className="fa fa-search"></i>
          </header>
          <section className="container">
            <section id="tweet-box">
              <p id="tweet-box-title">Compose New Tweet</p>
              <section id="tweet-form-root"></section>

            </section>
            <section id="trends-container">
              <h3>Trends</h3>
              <ul id="trends-root">
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
                <li>filler</li>
              </ul>
            </section>
            <section id="tweets-container">
              <h3>Tweets</h3>
              <TweetStreamDisplay data={this.state.data} />
            </section>
          </section>


        </div>




      )
    }
    else return (
      <ul></ul>
    )
  }
}

export default TweetStream