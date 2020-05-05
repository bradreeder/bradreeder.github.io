/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Inspiration extends Component {
  render() {
    const quote = '"Understanding someone\'s suffering is the best gift you can give another person. Understanding is love\'s other name. If you don\'t understand, you can\'t love."';
    return (
      <div className="inspiration">
        <div id="inspiration">
          <div className="absolute">
            <h2>Welcome, my Global Community</h2>
            <p className="absolute-text">My name is Bradley, I am an authentic lineage holder & healer of the Inca <a className="insp-anchor" target="_blank" href="https://en.wikipedia.org/wiki/Q%27ero">(Q'ero)</a> shamanic tradition of Peru.</p>
            <p className="absolute-text padding-bottom-40px">I have certified training with master shamans in a range of healing methods and offer healing sessions & sacred ceremonies tailored to your individual needs.</p>
            <div id="anchor-header"><a className="toscroll" href="#services" onClick={() => this.props.changeContent('about')}><p className="absolute-text absolute-anchor">Read more below.</p></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inspiration;


//<a target="_blank" href=""><img id="absolute-img-1" src="public/resources/facebook.PNG"/></a>
//<a target="_blank" href="https://medium.com/@bradjohnreeder/what-is-natural-wisdom-b861383a8368"><img id="absolute-img-2" src="public/resources/medium.PNG"/></a>
//<a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/"><img id="absolute-img-3" src="public/resources/meetup.PNG"/></a>

// <img src="public/resources/Healing-1.JPG"/>

//<p><em>{quote}</em></p>
//<p><strong id="thich-nhat-hanh">- Thich Nhat Hanh</strong></p>
//<h2><a className="toscroll bounce" href="#about"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
//<h2><a className="toscroll bounce" href="#about"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
