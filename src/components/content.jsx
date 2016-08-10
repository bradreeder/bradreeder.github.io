/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';

class Content extends Component {
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
