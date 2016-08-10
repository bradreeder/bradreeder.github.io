/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
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
