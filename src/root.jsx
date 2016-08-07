/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
