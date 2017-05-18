import React, { Component } from 'react';
import TweetStream from './tweet-stream';
import TweetForm from './tweet-form';
import TrendsStream from './trends-stream';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
            <TweetStream />
          </section>
        </section>


      </div>
    );
  }
}

export default App;
