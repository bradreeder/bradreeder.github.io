/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-me">
          <p className="header-name">bradley reeder</p>
          <p>ux researcher & designer</p>
          <p>london, uk. <a id="phone-number" href="tel:+447479507365">+44 7479 507365</a></p>
        </div>
        <div id="header-links">
          <p>bradley @</p>
          <p>
            <a href="https://uk.linkedin.com/in/bradley-reeder-246623119">linkedin </a>&nbsp;
            <a href="https://github.com/bradreeder">github </a>&nbsp;
            <a href="public/resources/bradley-reeder-cv-ux.PDF" download>CV</a>&nbsp;
          </p>
          <p>
            <a id="email" href="mailto:bradjohnreeder@gmail.com">bradjohnreeder@gmail.com </a>&nbsp;
          </p>
        </div>
        <div className="header-img">
          <img src="public/resources/me.JPG"/>
        </div>
      </div>
    );
  }
}

export default Header;
