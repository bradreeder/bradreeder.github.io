/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h2>portfolio</h2>
        <p className="last">For a full list of my projects please see my <a href="https://github.com/bradreeder?tab=repositories">
        github page</a>.</p>
        <p className="year">2016 (3)</p>
        <p><a href="https://github.com/bradreeder/Tile-game">Tile-Game</a> A tile-floor puzzle game (in progress)</p>
        <p><a href="https://github.com/saferTogether">SaferTogether</a> TBC</p>
        <p className="last"><a href="https://github.com/SafeLives">SafeLives</a> TBC</p>
      </div>
    );
  }
}

export default Portfolio;
