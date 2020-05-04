/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      <div className="menu" id="menu">
        <div id="menu-services" className="menu-item"><a className="toscroll" href="#services" onClick={() => this.props.changeContent('about')}><p>services</p></a></div>
        <div id="menu-reviews" className="menu-item"><a className="toscroll" href="#reviews" onClick={() => this.props.changeContent('about')}><p>reviews</p></a></div>
        <div id="menu-pricing" className="menu-item"><a className="toscroll" href="#pricing" onClick={() => this.props.changeContent('about')}><p>pricing</p></a></div>
        <div id="menu-contact" className="menu-item"><a className="toscroll" href="#contact" onClick={() => this.props.changeContent('about')}><p>contact</p></a></div>
        <div id="menu-fb" className="menu-item"><a target="_blank" href=""><img className="social-media-icons" src="public/resources/facebook-icon.PNG"/></a></div>
        <div id="menu-medium" className="menu-item"><a target="_blank" href="https://medium.com/@bradjohnreeder/what-is-natural-wisdom-b861383a8368"><img className="social-media-icons" src="public/resources/medium-icon.PNG"/></a></div>
        <div id="menu-meetup" className="menu-item"><a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/"><img className="social-media-icons" src="public/resources/meetup-icon.PNG"/></a></div>
      </div>
    </div>
    );
  }
}

export default Menu;

//<div id="menu-about" className="menu-item"><a className="toscroll" href="#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
