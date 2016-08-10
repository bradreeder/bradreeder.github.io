/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <h2>about</h2>
        <div className="text-wrapper">
          <p>I am a full-stack Javascript developer based in London, UK.
            I am currently studying and freelancing at <a href="http://www.foundersandcoders.com">
            Founders & Coders C.I.C</a>, a highly-selective sixteen week coding bootcamp.
            I am a passionate learner and problem solver, eager to explore new languages
            and frameworks and learn with like-minded individuals.
          </p>
        </div>
        <h2>interests</h2>
        <div className="text-wrapper">
          <p>I have an MA in English Literature and in my spare time enjoy experimenting with and
          researching web & hyper comics, electronic fiction, and location-based hypertext. I am
          keen to explore AR and IOT technologies in the near future.</p>
        </div>
        <h2>contact</h2>
        <div className="text-wrapper">
          <p>You can reach me @ <a href="mailto:bradjohnreeder@gmail.com">
          bradjohnreeder@gmail.com</a>.</p>
          <p>I am currently available for hire and freelance consulting.
            My resume can be found <a href="/">here.</a></p>
        </div>
      </div>
    );
  }
}

export default About;
