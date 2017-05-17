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
      <section id="tweet-stream-react">
        {this.state.data.map((data, i) => <Tweet data={this.state.data[i]} key={i} />)}
      </section>
    )
  }
}

export default TweetStream