/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import About from './about.jsx';
import Healing from './healing.jsx';
import AnnaFreud from './annafreudcentre.jsx';
import FoundersAndCoders from './foundersandcoders.jsx';
import Contact from './contact.jsx';

class Content extends Component {
  render() {
    return (
      <div id="margin-top" className="content-container">
        {this.getContent()}
      </div>
    );
  }

  getContent() {
    switch(this.props.activeSection) {
      case 'about':
        return <About changeContent={this.props.changeContent}/>
        break;
      case 'healing':
        return <Healing changeContent={this.props.changeContent}/>
        break;
      case 'annaFreud':
        return <AnnaFreud changeContent={this.props.changeContent}/>
        break;
      case 'foundersAndCoders':
        return <FoundersAndCoders changeContent={this.props.changeContent}/>
        break;
    }
  }
}

export default Content;
