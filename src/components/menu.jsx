/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-item"><a href="index.html#about" onClick={() => this.props.changeContent('about')}><p>about</p></a></div>
        <div className="menu-item"><a href="index.html#process" onClick={() => this.props.changeContent('about')}><p>process</p></a></div>
        <div className="menu-item"><a href="index.html#skills" onClick={() => this.props.changeContent('about')}><p>skills</p></a></div>
        <div className="menu-item"><a href="index.html#work" onClick={() => this.props.changeContent('about')}><p>work</p></a></div>
      </div>
    );
  }
}

export default Menu;
