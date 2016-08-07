/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header-me">
          <p id="header-name">bradley reeder</p>
          <p>full-stack javascript developer</p>
          <a href="http://www.foundersandcoders.com">founders & coders</a>
        </div>
        <div id="header-links">
          <p>bradley @</p>
          <p>
            <a href="https://uk.linkedin.com/in/bradley-reeder-246623119">linkedin </a>
            <a href="https://github.com/bradreeder">github </a>
            <a href="https://www.codewars.com/users/Aquila">codewars</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
