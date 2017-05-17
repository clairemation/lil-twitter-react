import React, {Component} from 'react';
import Tweet from './tweet'
import tweetStubData from './tweets-stub-data'

const STUB_MODE = true

class TweetStream extends Component {
  constructor(args) {
    super(args)
    this.state = {data: []}
  }

  componentWillMount() {
    if (STUB_MODE) this.setState({data: tweetStubData})
  }

  render(){
    return (
      <Tweet data={this.state.data[0]} />
    )
  }
}

export default TweetStream