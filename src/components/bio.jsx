/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div id="bio" className="main-article">
        <img className="bg" src="//uploads.strikinglycdn.com/static/backgrounds/blurred-bg/58.jpg"/>
        <div id="about"></div>
        <h2 id="top-h2" className="padding-top-2em">about me</h2>
        <div className="content-background-colour">
          <div className="my-story padding-top-40px padding-bottom-80px">
            <h3 id="about-header"><em>hi, my name is Bradley, and I am a shamanic practitioner & energy healer</em></h3>
            <hr />
            <img className="my-story-image" src="../../public/resources/me2.JPG"/>
            <p>Throughout the last few years, I’ve been blessed to undertake training with master shamans in a broad range of traditional & indigenous healing and esoteric modalities.</p>
            <p>In 2019, I was formally initiated into the <a target="_blank" href="https://en.wikipedia.org/wiki/Q%27ero">Andean (Q’ero) shamanic lineage</a> of Peru as an authentic practitioner -- or <a target="_blank" href="http://andeanmasters.com/andean-paqo-shaman/">Paqo</a> -- of this tradition. I’ve since been on pilgrimages to Peru to learn from Q’ero maestro <a target="_blank" href="https://pumadventuresperu.com/our-team">Puma Fredy Quispe Singona</a> & Shipibo maestro <a target="_blank" href="https://www.ayahuascaretreat.pe/maestro-heberto-garcia/">Heberto Garcia</a>, where I received the healing energies that I primarily work with today.</p>
            <p>I’m always supplementing this foundation with further training, most recently in energy healing & natural medicine as a student of <a target="_blank" href="https://copaldaselva.com/">Copal Daselva</a> & <a target="_blank" href="https://www.eleanorsara.com/">Eleanor Sara Darley</a>. And continuing to cultivate and put into practice the wisdom from my (thus far) life-long passion for spirituality, philosophy, psychology, creativity, and self-mastery.</p>
            <p>I’m deeply humbled to put this together in service to you. I do so with the utmost integrity and heart-felt intention to enable your healing, transformation and connection with the best version of yourself possible. :-)</p>
            <p>Till we meet, Haux Haux!</p>
          </div>
        </div>
        <div id="experience"></div>
        <h2>affiliated with</h2>
        <div className="content-background-colour">
          <div className="my-process-column padding-top-40px">
            <h3 className="process-heading"><strong>I have completed certified training as a shamanic practitioner and am humbled to be associated with:</strong></h3>
            <p></p>
          </div>
          <div className="my-process">
            <div className="my-process-column purple">
              <h2><i className="fa fa-heart" aria-hidden="true"></i></h2>
              <h3><strong>Graduate of <a target="_blank" href="https://ayni.foundation/nwl/">Natural Wisdom Leaders</a> programme</strong></h3>
              <a target="_blank" href="https://ayni.foundation/"><img src="../../public/resources/Ayni-foundation.PNG"/></a>
            </div>
            <div className="my-process-column green">
              <h2><i className="fa fa-heart" aria-hidden="true"></i></h2>
              <h3><strong>Current student of <a target="_blank" href="https://copaldaselva.com/">Shamanic energy healing</a></strong></h3>
              <a target="_blank" href="https://copaldaselva.com/"><img src="../../public/resources/copal.JPEG"/></a>
            </div>
            <div className="padding-bottom-80px my-process-column green">
              <h2><i className="fa fa-heart" aria-hidden="true"></i></h2>
              <h3><strong>Founding member of <a target="_blank" href="https://brightsky.community/">BrightSky Community</a></strong></h3>
              <a target="_blank" href="https://brightsky.community/"><img src="../../public/resources/bright-sky.PNG"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
