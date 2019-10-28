/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      <div className="menu" id="menu">
        <div id="menu-about" className="menu-item"><a className="toscroll" href="#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
        <div id="menu-experience" className="menu-item"><a className="toscroll" href="#experience" onClick={() => this.props.changeContent('about')}><p>experience</p></a></div>
        <div id="menu-services" className="menu-item"><a className="toscroll" href="#services" onClick={() => this.props.changeContent('about')}><p>services</p></a></div>
        <div id="menu-pricing" className="menu-item"><a className="toscroll" href="#pricing" onClick={() => this.props.changeContent('about')}><p>pricing</p></a></div>
        <div id="menu-contact" className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>contact</p></a></div>
      </div>
    </div>
    );
  }
}

export default Menu;
