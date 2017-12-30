/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      <div className="menu" id="menu">
        <div id="menu-about" className="menu-item"><a className="toscroll" href="#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
        <div id="menu-process" className="menu-item"><a className="toscroll" href="#process" onClick={() => this.props.changeContent('about')}><p>process</p></a></div>
        <div id="menu-skills" className="menu-item"><a className="toscroll" href="#skills" onClick={() => this.props.changeContent('about')}><p>skills</p></a></div>
        <div id="menu-work" className="menu-item"><a className="toscroll" href="#work" onClick={() => this.props.changeContent('about')}><p>work</p></a></div>
        <div id="menu-contact" className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>contact</p></a></div>
      </div>
    </div>
    );
  }
}

export default Menu;
