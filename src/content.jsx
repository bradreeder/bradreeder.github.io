/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';

class Content extends React.Component {
  render() {
    return (
      <div id="content-container">
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default Content;
