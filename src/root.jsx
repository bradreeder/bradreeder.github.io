/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Menu from './components/menu.jsx';
import Inspiration from './components/inspiration.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: 'about' };
  }
  render() {
    return (
      <div>
        <Header />
        <Menu
          changeContent={(section) => this.setState({ activeSection: section })}
          activeSection={this.state.activeSection}
        />
        <Inspiration />
        <Content
          changeContent={(section) => this.setState({ activeSection: section })}
          activeSection={this.state.activeSection}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
