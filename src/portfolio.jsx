/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h2>portfolio</h2>
        <div className="text-wrapper">
          <p>For a full list of my projects please see my <a href="https://github.com/bradreeder?tab=repositories">
          github page</a>.</p>
          <p className="year">2016 (3)</p>
          <p><a href="https://github.com/bradreeder/Tile-game">Tile-Game</a> TBC</p>
          <p><a href="https://github.com/saferTogether">SaferTogether</a> TBC</p>
          <p><a href="https://github.com/SafeLives">SafeLives</a> TBC</p>
        </div>
        <h2>technologies</h2>
        <p className="text-wrapper">html5</p>
        <p>css3</p>
        <p className="text-wrapper">sass</p>
        <p>javascript</p>
        <p className="text-wrapper">jquery</p>
        <p>react.js</p>
        <p className="text-wrapper">node.js</p>
        <p>hapi.js</p>
        <p className="text-wrapper">postgresql</p>
        <p>redis</p>
        <p className="text-wrapper">git</p>
      </div>
    );
  }
}

export default Portfolio;
