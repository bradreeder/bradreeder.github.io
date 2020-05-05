/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      <div className="menu" id="menu">
        <div id="menu-services" className="menu-item"><a className="toscroll" href="#services" onClick={() => this.props.changeContent('about')}><p>services</p></a></div>
        <div id="menu-reviews" className="menu-item"><a className="toscroll" href="#reviews" onClick={() => this.props.changeContent('about')}><p>reviews</p></a></div>
        <div id="menu-booking" className="menu-item"><a className="toscroll" href="#booking" onClick={() => this.props.changeContent('about')}><p>booking</p></a></div>
        <div id="menu-contact" className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>contact</p></a></div>
      </div>
    </div>
    );
  }
}

export default Menu;

//<div id="menu-about" className="menu-item"><a className="toscroll" href="#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
