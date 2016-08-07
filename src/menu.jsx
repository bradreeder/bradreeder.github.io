/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/">blog</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
