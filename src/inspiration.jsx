/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Inspiration extends React.Component {
  render() {
    const quote = '"but screw your courage to the sticking place and we’ll not fail" ' +
    '(Macbeth Act I Scene VII)';
    return (
      <div id="inspiration"><p>{quote}</p></div>
    );
  }
}

export default Inspiration;
