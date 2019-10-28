/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Healing extends Component {
  render() {
    return (
      <div id="healing" className="main-article">
        <img className="bg" src="//uploads.strikinglycdn.com/static/backgrounds/blurred-bg/58.jpg"/>
        <h2 className="padding-top-2em">shamanic energy healing</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px service-text"><strong>Shamanic healing can help find solutions to any range of challenges or obstacles be they physical, emotional, mental or spiritual. I’m a deep believer in self-empowerment and that all the answers and capacity to connect, grow and heal lies within each of us.</strong></p>
          <p className="service-text">My role is to hold and create space for you for this healing within yourself to occur. I tune-in to the underlying root cause of your issue to channel the exact healing and guidance you need in that moment for your highest good & well-being.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px padding-bottom-80px" src="public/resources/Energy-healing-5.JPG"/>
          </div>
        </div>
        <h2>benefits</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px service-text">Some of the many benefits that can result from a shamanic healing include:</p>
          <ul className="padding-bottom-80px no-margin-bottom">
            <li>Increased sense of well-being</li>
            <li>Renewed energy levels</li>
            <li>Clarity of purpose, concentration & focus</li>
            <li>Reignites passion, optimism & enthusiasm</li>
            <li>Relieves symptoms of depression & anxiety</li>
            <li>Feelings of relaxation, calm & positive thinking</li>
            <li>Aids in letting go of addictive patterns, habits & behaviours</li>
            <li>Releases traumas, negative energies, stuckness and blocks</li>
          </ul>
        </div>
        <h2>session format</h2>
        <div className="content-background-colour">
          <p className="section-header padding-top-40px">shamanic energy healing</p>
          <p className="padding-top-40px service-text">I am available to do in-person healing sessions on evenings and weekends at your home address, or another suitable location, for those living in and around London.</p>
          <p className="service-text">Each healing session is a one-time occurrence, or “ceremony”, that is tailored to your individual needs. Sessions usually last up to an hour and I draw on a range of techniques that may include:</p>
          <ul className="no-margin-bottom">
            <li>Smudging & space clearing</li>
            <li>Energy healing</li>
            <li>Chakra cleansing & activation</li>
            <li>Spinal alignment</li>
            <li>Blessings</li>
            <li>Shamanic tools: feathers, rattle, stones, pendulum</li>
          </ul>
          <p className="service-text">The session will include time for you to integrate and I will be available to offer after-care guidance and suggestions based on what I observed during the healing. I will make sure to check-in with you within a week of the session to check-in & provide any after-care that is needed.</p>
            <div className="case-study-img-container">
              <img className="padding-top-40px" src="public/resources/Energy-healing-9.JPG"/>
            </div>
          <p className="section-header padding-top-40px">shamanic distance healing</p>
          <p className="padding-top-40px service-text">If you don’t live in London, are in hospital or are too ill to travel, we can do a distance healing from your current location. In my experience healing is only limited by the imagination and you can expect the same benefits and effects as an in-person healing.</p>
          <p className="service-text">We can do the session over an online video-call or in the evening while you're sleeping if you prefer that. Otherwise, after arranging a mutually convenient time, you would be asked to lie down and rest and I will tune-in to you remotely to conduct the healing.</p>
          <p className="service-text padding-bottom-80px">I will be in touch at a convenient time after the session to provide any insight based on what I observed and to offer after-care guidance and suggestions.</p>
        </div>
        <h2>what to expect</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px service-text">Healing differs from person to person. However, it’s common for people to report experiencing some of the following during a healing:</p>
          <ul className="no-margin-bottom">
            <li>Relaxation, sleepiness, feelings of calm</li>
            <li>Soothing of stress and tension</li>
            <li>Emotional release</li>
            <li>Heat or coolness</li>
            <li>Tingling, pins & needles, or goosebumps</li>
            <li>Feelings of vibrational buzzing or electric currents in the body</li>
            <li>Visions, imagery, hearing inner voices & guidance</li>
            <li>Among other effects</li>
          </ul>
          <p className="service-text padding-bottom-80px">Most effects will ground shortly after the session. However, the healing will be working within you in the days following so it’s advised to take good care of your mind & body in this time to best integrate it.</p>
        </div>
        <h2>pricing</h2>
          <div className="content-background-colour">
            <h2 className="no-margins">For a limited time, I will be offering shamanic healings free of any financial charge</h2>
            <hr />
            <div className="case-study padding-top-40px padding-bottom-80px">
              <div className="case-study-section">
                <strong><p className="decrease-padding">By way of reciprocity, in return for our time together I ask you help me by:</p></strong>
                <ul className="no-margins decrease-padding">
                  <li>Providing your feedback on the healing session and/or this website.</li>
                  <li>Giving a testimonial or review that I can include on my public facing materials.</li>
                  <li>Allowing me to add your email to my mailing list to be updated of future events.</li>
                </ul>
              </div>
              <div className="case-study-section">
                <div className="img-container">
                  <img className="img-border" src="public/resources/Energy-healing-6.JPG"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Healing;

//<p className="footer-navigation padding-bottom-80px padding-top-40px"><a href="#work" onClick={() => this.props.changeContent('about')}>return to case studies</a></p>
