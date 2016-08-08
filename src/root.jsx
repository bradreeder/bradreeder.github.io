/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';
import Inspiration from './inspiration.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

class Root extends React.Component {
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
