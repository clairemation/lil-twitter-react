import React, {Component} from 'react';

class Tweet extends Component {
  localFetchHashtagTweets(hashtag){
    this.props.fetchHashtagTweets(hashtag)
  }

  render(){
    return (
      <li className="tweet">
        <img className="avatar" src={this.props.data.avatar_url} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.data.username}</span>
            <span className="username">{this.props.data.handle}</span>
            <span className="timestamp">- 6m</span>
          </p>
          <p>
            {this.props.data.content}
            {this.props.data.hashtag_names.map((hashtag, i) => <span onClick={() => this.localFetchHashtagTweets(hashtag)} className="hashtag" key={i}> #{hashtag} </span>)}
          </p>
        </div>
      </li>
    )
  }
}

export default Tweet