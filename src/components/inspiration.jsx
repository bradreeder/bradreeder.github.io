/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Inspiration extends Component {
  render() {
    const quote = '"Most of the wonderful places in the world were not made by architects but by the people" - Christopher Alexander';
    return (
      <div>
        <div id="inspiration"><p>{quote}</p></div>
        <div id="inspiration-mobile"><p>{quote}</p></div>
      </div>
    );
  }
}

export default Inspiration;
