import React, {Component} from 'react';

class SearchBox extends Component{
  constructor(args){
    super(args)
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchHashtagTweets = this.fetchHashtagTweets.bind(this)
  }

  fetchHashtagTweets(hashtagName){
    this.props.fetchHashtagTweets(hashtagName)
  }

  handleChange(e){
    this.setState({content: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.fetchHashtagTweets(this.state.content)
  }

  render(){
    return (
      <form id="search-form" onChange={this.handleChange} onSubmit={this.handleSubmit} >
        <input id="search" type="text" name="query" value={this.state.content} />
      </form>
    )
  }
}

export default SearchBox