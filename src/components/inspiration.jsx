/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Inspiration extends Component {
  render() {
    const quote = '"Understanding someone\'s suffering is the best gift you can give another person. Understanding is love\'s other name. If you don\'t understand, you can\'t love."';
    return (
      <div className="inspiration">
        <div id="inspiration">
          <p><em>{quote}</em></p>
          <p><strong id="thich-nhat-hanh">- Thich Nhat Hanh</strong></p>
          <h2><a className="toscroll bounce" href="#about"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
        </div>
      </div>
    );
  }
}

export default Inspiration;
