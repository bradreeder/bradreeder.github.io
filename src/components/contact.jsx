/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div id="contact"></div>
        <h2>contact</h2>
        <div className="content-background-colour">
          <div className="contact padding-top-40px padding-bottom-80px">
            <h3 id="contact-header">For more info or to book an appointment, contact me on the following and I will be in touch shortly:</h3>
            <p className="footer-text"><a target="_blank" href="mailto:bradjohnreeder@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>bradjohnreeder@gmail.com</a></p>
            <p className="footer-text"><a target="_blank" href="tel:+447479507365"><i className="fa fa-mobile" aria-hidden="true"></i>+44 7479 507365</a></p>
            <p className="footer-text">Based in London, UK</p>
            <p className="padding-top-40px footer-text">See further information on my service @ <a href="">facebook</a> and on my future events @ <a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/">meetup</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

/* <p className="footer-text"><a target="_blank" href="mailto:bradjohnreeder@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>bradjohnreeder@gmail.com</a></p>
<p className="footer-text"><a target="_blank" href="tel:+447479507365"><i className="fa fa-mobile" aria-hidden="true"></i>+44 7479 507365</a></p> */
