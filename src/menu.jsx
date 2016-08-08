/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <div className="menu-item"><a href="/"><p>home</p></a></div>
        <div className="menu-item"><a href="/"><p>blog</p></a></div>
      </div>
    );
  }
}

export default Menu;

// <ul>
//   <li><a href="/">home</a></li>
//   <li><a href="/">blog</a></li>
// </ul>
