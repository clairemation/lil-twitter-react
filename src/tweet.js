import React, {Component} from 'react';

class TweetStream extends Component {

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
          <p>{this.props.data.content}</p>
        </div>
      </li>
    )
  }
}

export default TweetStream