/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-me">
          <p className="header-name">Bradley Reeder</p>
          <p>Shamanic practitioner & Energy healer</p>
          <p>London, UK.</p>
          <div id="menu-contact" className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>Out of office until July 2020</p></a></div>
        </div>
        <div id="header-links">
          <p>bradley @</p>
          <p>
            <a target="_blank" href="https://medium.com/@bradjohnreeder">medium </a>&nbsp;
            <a href="">facebook </a>&nbsp;
            <a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/">meetup </a>&nbsp;
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
