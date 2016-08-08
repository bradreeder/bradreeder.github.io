/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';
import Buffer from './buffer.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Buffer />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
