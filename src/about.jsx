/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h2>about</h2>
        <p>I am a full-stack Javascript developer based in London, UK.
          I am currently studying and freelancing at <a href="http://www.foundersandcoders.com">
          Founders & Coders C.I.C</a>, a highly-selective sixteen week coding bootcamp.
          I am a passionate learner and problem solver, eager to explore new languages
          and frameworks and learn with like-minded individuals.
        </p>
        <p>I have an MA in English Literature with a special interest in
        web & hyper comics, electronic fiction, and location-based hypertext.</p>
        <h2>contact</h2>
        <p>You can reach me @ bradjohnreeder@gmail.com.</p>
        <p className="last">I am currently available for hire and freelance consulting.
          My resume can be found <a href="/">here.</a></p>
      </div>
    );
  }
}

export default About;
