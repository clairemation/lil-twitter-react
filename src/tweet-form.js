import React, {Component} from 'react';

class TweetForm extends Component{
  constructor(args){
    super(args)
    this.state = {
      tweetContent: '',
      tweetUsername: 'Claire'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({tweetContent: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    let postBody = JSON.stringify(
      {
        "tweet":{
          "avatar_url":"http://robohash.org/marco_schumm",
          "content":"This is a sample submitted tweet.",
          "handle":"@marco_schumm",
          "username":"Adaline Bins"
        },
        "hashtags":[
          "foo",
          "bar",
          "baz"
        ]
      }
    )
    fetch("http://localhost:8000/tweets",
      {
        method: "post",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        mode: "no-cors",
        body: postBody,
      }
    ).then(r => console.log(r))
  }

  render() {
    return (
      <form id="tweet-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <textarea id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet" value={this.state.tweetContent}></textarea>
        <input type="submit" value="Tweet" />
      </form>
    )
  }
}

export default TweetForm