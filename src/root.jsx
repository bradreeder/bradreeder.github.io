/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Menu from './components/menu.jsx';
import Inspiration from './components/inspiration.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Inspiration />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
