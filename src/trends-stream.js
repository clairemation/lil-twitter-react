import React, {Component} from 'react';
import Trend from './trend'

const STUB_MODE = true
const hashtagsStubData = ['asdf', 'fdsa', 'sdfg', 'gfds', 'dfgh', 'hgfd', 'fghj', 'jhgf', 'ghjk', 'kjhg']

class TrendsStream extends Component {
  constructor(args){
    super(args)
    this.state = {hashtagNames: []}
  }

  componentWillMount(){
    if (STUB_MODE) this.setState({hashtagNames: hashtagsStubData})
  }

  render() {
    return (
      <section id="trends-stream-react">
        {this.state.hashtagNames.map((hashtagName, i) => <Trend key={i} hashtagName={this.state.hashtagNames[i]} />)}
      </section>
    )
  }
}

export default TrendsStream