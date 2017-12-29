/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      <div className="menu">
        <div className="menu-item"><a className="toscroll" href="#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
        <div className="menu-item"><a className="toscroll" href="#process" onClick={() => this.props.changeContent('about')}><p>process</p></a></div>
        <div className="menu-item"><a className="toscroll" href="#skills" onClick={() => this.props.changeContent('about')}><p>skills</p></a></div>
        <div className="menu-item"><a className="toscroll" href="#work" onClick={() => this.props.changeContent('about')}><p>work</p></a></div>
        <div className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>contact</p></a></div>
      </div>
    </div>
    );
  }
}

export default Menu;
