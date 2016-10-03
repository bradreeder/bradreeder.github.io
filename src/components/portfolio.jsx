/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Portfolio extends Component {
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
          <p className="year-text">2016 (4)</p>
          <p><a href="https://github.com/bradreeder/Tile-game">Tile-Game</a> A tile floor puzzle-game developed as a progressive web application. In progress.</p>
          <p><a href="https://github.com/CYPIAPT-LNDSE/breathing-with-kitty">Anna Freud Centre</a> A progressive web application aimed at young people with generalised anxiety disorders. The app improves resilience from stress by guiding the user through a variety of breathing and relaxation techniques, demonstrated using SVG and Greensock.js animations.</p>
          <p><a href="https://github.com/saferTogether/saferTogether">SaferTogether</a> A design prototype of a risk assessment survey targeted at victims of domestic abuse.</p>
          <p><a href="https://github.com/worthwhile-charity/hack-day">Worthwhile</a> A design prototype for Worthwhile that automates the process of generating and issuing contracts and invoices for clients who find a job through the charity, using handlebars.js for templating.</p>
        </div>
        <h2>technologies</h2>
        {technologies}
      </div>
    );
  }
}

export default Portfolio;
