/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Inspiration extends Component {
  render() {
    const quote = 'New site coming soon...';
    return (
      <div>
        <div id="inspiration"><p>{quote}</p></div>
        <div id="inspiration-mobile"><p>{quote}</p></div>
      </div>
    );
  }
}

export default Inspiration;
