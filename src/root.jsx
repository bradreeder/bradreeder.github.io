/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

class Root extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
