import React from 'react';
import ReactDOM from 'react-dom';
import TweetStream from './tweet-stream';
import TweetForm from './tweet-form';
import TrendsStream from './trends-stream';
import './index.css';

ReactDOM.render(
  <TweetStream />,
  document.getElementById('tweet-stream-root')
);

ReactDOM.render(
  <TweetForm />,
  document.getElementById('tweet-form-root')
);

ReactDOM.render(
  <TrendsStream />,
  document.getElementById('trends-root')
);