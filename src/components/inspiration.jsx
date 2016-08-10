/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Inspiration extends Component {
  render() {
    const quote = '"but screw your courage to the sticking place and we’ll not fail" ' +
    '(Macbeth Act I Scene VII)';
    return (
      <div>
        <div id="inspiration"><p>{quote}</p></div>
        <div id="inspiration-mobile"><p>'"but screw your courage to the sticking
        place and we'll not fail"'</p></div>
      </div>
    );
  }
}

export default Inspiration;
