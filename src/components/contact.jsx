/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2>contact</h2>
        <div className="content-background-colour">
          <div className="contact padding-top-40px padding-bottom-80px">
            <h2 id="contact-header">I am open to new design challenges and would love to hear from you (:</h2>
            <p><a href="mailto:bradjohnreeder@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>bradjohnreeder@gmail.com</a></p>
            <p><a href="tel:+447479507365"><i className="fa fa-mobile" aria-hidden="true"></i>+44 7479 507365</a></p>
            <p>Based in London, UK</p>
            <p><a href="public/resources/bradley-reeder-cv-ux.PDF" download>Download CV</a></p>
            <p className="padding-top-40px">See source code for my projects on <a target="_blank" href="https://github.com/bradreeder">github</a> and endorsements on <a target="_blank" href="https://uk.linkedin.com/in/bradley-reeder-246623119">linkedin</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
