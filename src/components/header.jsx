/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-me">
          <p className="header-name">Pachakuti healing</p>
          <p className="header-subtext">Shamanic & energy healing. London UK</p>
        </div>
        <div id="header-links">
          <p className="booking-info">For bookings or more info:</p>
          <p>
            <a target="_blank" href="mailto: bradjohnreeder@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>bradjohnreeder@gmail.com</a>
          </p>
          <p>
            <a target="_blank" id="phone-number" href="tel:+447479507365"><i className="fa fa-mobile" aria-hidden="true"></i>+44 7479 507365</a>&nbsp;
          </p>
        </div>
      </div>
    );
  }
}

export default Header;

// <div className="header-img">
//  <img src="public/resources/red-kite.JPG"/>
//</div>

/*<p>
  <a target="_blank" id="email" href="mailto:bradjohnreeder@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>bradjohnreeder@gmail.com</a>&nbsp;
</p>
<p>
  <a target="_blank" id="phone-number" href="tel:+447479507365"><i className="fa fa-mobile" aria-hidden="true"></i>+44 7479 507365</a>&nbsp;
</p>*/
