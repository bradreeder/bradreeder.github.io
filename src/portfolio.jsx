/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Portfolio extends React.Component {
  render() {
    const technologies =
    ['html5', 'css3', 'javascript', 'jquery', 'react.js', 'node.js',
    'hapi.js', 'postgresql', 'redis', 'git']
    .map((item, index) => {
      if (index % 2 === 0) {
        return <p className="text-wrapper" key={index}>{item}</p>;
      } return <p key={index}>{item}</p>;
    });
    return (
      <div id="portfolio">
        <h2>portfolio</h2>
        <div className="text-wrapper">
          <p>For a full list of my projects please see my <a href="https://github.com/bradreeder?tab=repositories">
          github page</a>.</p>
          <p className="year-text">2016 (3)</p>
          <p><a href="https://github.com/bradreeder/Tile-game">Tile-Game</a> TBC</p>
          <p><a href="https://github.com/saferTogether">SaferTogether</a> TBC</p>
          <p><a href="https://github.com/SafeLives">SafeLives</a> TBC</p>
        </div>
        <h2>technologies</h2>
        {technologies}
      </div>
    );
  }
}

export default Portfolio;
