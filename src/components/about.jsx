/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="main-article">
        <img className="bg" src="//uploads.strikinglycdn.com/static/backgrounds/blurred-bg/58.jpg"/>
        <div id="about"></div>
        <h2 id="top-h2" className="padding-top-2em">about me</h2>
        <div className="content-background-colour">
          <div className="my-story padding-top-40px padding-bottom-80px">
            <img className="my-story-image" src="../../public/resources/me2.JPG"/>
            <h2 id="bio-header"><em>Bradley John Reeder</em></h2>
            <p className="bio-text">Throughout the last few years, I’ve been blessed to undertake training with master shamans Davina Mackail & Nizami Ele of the <a target="_blank" href="https://ayni.foundation/about-us/">Ayni Foundation</a> in a broad range of traditional & indigenous healing and esoteric modalities.</p>
            <p className="bio-text">In 2019, I received initiations in the <a target="_blank" href="https://en.wikipedia.org/wiki/Q%27ero">Andean shamanic traditions</a> of Peru as a shamanic practitioner of this tradition. I’ve since been on pilgrimages to Peru to learn from maestro <a target="_blank" href="https://pumadventuresperu.com/our-team">Puma Fredy Quispe Singona</a> & Shipibo maestro <a target="_blank" href="https://www.ayahuascaretreat.pe/maestro-heberto-garcia/">Heberto Garcia</a>, where I received the "mesa" & healing energies that I primarily work with today.</p>
            <p className="bio-text">I’m always supplementing this foundation with further training, most recently in energy healing & natural medicine as a student of <a target="_blank" href="https://copaldaselva.com/">Copal Daselva</a> & <a target="_blank" href="https://www.eleanorsara.com/">Eleanor Sara Darley</a>. And continuing to cultivate and put into practice the wisdom from my (thus far) life-long passion for spirituality, philosophy, psychology, creativity, and self-mastery.</p>
            <p className="bio-text">I’m deeply humbled to put this together as Pachakuti Healing in service to you. I do so with the utmost integrity and heart-felt intention to enable your healing, transformation and connection with the best version of yourself possible. :-)</p>
            <p className="bio-text">Till we meet, Haux Haux!</p>
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
            <div className="my-process-column purple padding-top-40px padding-bottom-40px">
              <h3><strong>Graduate of <a target="_blank" href="https://ayni.foundation/nwl/">Natural Wisdom Leaders</a> programme</strong></h3>
              <a target="_blank" href="https://ayni.foundation/"><img className="affiliated-img" src="../../public/resources/Ayni-foundation.PNG"/></a>
            </div>
            <div className="my-process-column green padding-bottom-40px">
              <h3><strong>Current student of <a target="_blank" href="https://copaldaselva.com/">Shamanic energy healing</a></strong></h3>
              <a target="_blank" href="https://copaldaselva.com/"><img className="affiliated-img" src="../../public/resources/copal.JPEG"/></a>
            </div>
            <div className="padding-bottom-80px my-process-column green">
              <h3><strong>Founding member of <a target="_blank" href="https://brightsky.community/">BrightSky Community</a></strong></h3>
              <a target="_blank" href="https://brightsky.community/"><img id="bright-sky" src="../../public/resources/bright-sky.PNG"/></a>
            </div>
          </div>
        </div>
        <div id="services"></div>
        <h2 className="padding-top-2em">services</h2>
        <div className="content-background-colour padding-top-40px padding-bottom-80px">
          <p className="section-title"><a href="#healing" onClick={() => this.props.changeContent('healing')}>Shamanic Energy Healing</a></p>
          <p className="section-sub-heading">30 min to 2 hour in-person <strong><i>by donation</i></strong></p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <h4>Shamanic Energy Healing</h4>
              <p>I offer in-person shamanic energy healing sessions from my peaceful home location in Richmond. No fixed costs - all by donation.</p>
              <p>I am happy to do home visits in London for a minimum donation of £45. <a href="#healing" onClick={() => this.props.changeContent('healing')}>Read more here.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <a href="#healing" onClick={() => this.props.changeContent('healing')}><img className="img-border" src="public/resources/Energy-healing-6.JPG"/></a>
              </div>
            </div>
          </div>

          <p className="section-title"><a href="#healing" onClick={() => this.props.changeContent('healing')}>Shamanic Distance Energy Healing</a></p>
          <p className="section-sub-heading">30 min to 1 hour online <strong><i>by donation</i></strong></p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <h4>Shamanic Distance Energy Healing</h4>
              <p>I offer powerful distance energy healing sessions that can be done remotely from your location. No fixed costs - all by donation.</p>
              <p>Healing is only limited by the imagination and you can expect the same benefits as an in-person healing. <a href="#healing" onClick={() => this.props.changeContent('healing')}>Read more here.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <a href="#healing" onClick={() => this.props.changeContent('healing')}><img className="img-border" src="public/resources/mesa-2.JPEG"/></a>
              </div>
            </div>
          </div>

          <p className="section-title">Group ceremonies & meditations</p>
          <p className="section-sub-heading">Run monthly through <a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/">meetup</a></p>
          <div className="case-study padding-top-40px">
            <div className="case-study-section">
              <h4>Group ceremonies & meditations</h4>
              <p>I run regular shamanic ceremonies, group meditations, and other events online and in London.</p>
              <p>Join my <a target="_blank" href="https://www.meetup.com/London-Shamanic-Community/">meetup group</a> or <a target="_blank" href="https://github.us4.list-manage.com/subscribe/post?u=7281ec38aacaa29248a5bf895&amp;id=c2698af877">subscribe to my mailing list</a> to receive monthly updates!</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img className="img-border" src="public/resources/ceremony.JPG"/>
              </div>
            </div>
          </div>
        </div>

        <div id="reviews"></div>
        <h2>reviews</h2>
        <div className="content-background-colour padding-top-40px">

          <h3 className="review-title">Shamanic Energy Healing Reviews</h3>
          <p className="service-text review-header"><strong>An overall brilliant experience</strong></p>
          <p className="service-text"><i>"The healing itself was very powerful and profound, I am still integrating the experience now. Bradley told me about the visions and energies he felt during the healing and they all matched with things I had been previously told or visions and inuitions I had. Following the healing I had very vivid and profound dreams which shed light on a lot of difficult issues my life, they also directly correlated with Bradley's visions and the two together have provided deep insight for me.</i></p>
          <p className="service-text padding-bottom-20px"><i>An overall brilliant experience that I feel has shed clarity on my path, illuminated reasons for past difficulties as well as affirmed things I already knew. Bradley is a talented and very connected energy healer, I would recommend him to anyone looking for shamanic healing."</i></p>
          <strong><hr/></strong>
          <strong><p className="service-text review-header">Gabriella Thompson (London, UK)</p></strong>

          <p className="service-text review-header padding-top-60px"><strong>Really interesting and inspiring</strong></p>
          <p className="service-text padding-bottom-20px"><i>"I found Bradley to be incredibly helpful and warm. He explained everything in detail. I had distant healing which is something I have never had before so I really didnt know what to expect. My overall experience was really interesting and inspiring. It's something I'm now interested in exploring further. I feel Bradley is incredibly intuitive and I would happily work with him again and highly recommend him to others."</i></p>
          <strong><hr/></strong>
          <strong><p className="service-text review-header">Hannan Benjelloul (London, UK)</p></strong>

          <p className="service-text review-header padding-top-60px"><strong>I felt very positive in all aspects</strong></p>
          <p className="service-text padding-bottom-20px"><i>"The healing session was very peaceful. Throughout the day after the session I felt so energetic and got all things done very smoothly. I felt very positive in all aspects. Thank you so much for this."</i></p>
          <strong><hr/></strong>
          <strong><p className="service-text review-header">Snigdha Jaiswal (London, UK)</p></strong>

          <p className="service-text review-header padding-top-60px"><strong>A knowledgeable professional energy healer</strong></p>
          <p className="padding-bottom-20px service-text"><i>“My experience so far with Bradley Reeder, is that not only is he a knowledgeable professional energy healer, but also teaches one about their own sovereign and standing in ones own power. He also teaches how the energy that resides in each of us corresponds with the universe for self growth and evolution.”</i></p>
          <strong><hr/></strong>
          <strong><p className="service-text review-header padding-bottom-80px">Corrie Nielsen (London, UK)</p></strong>
        </div>
      </div>
    );
  }
}

export default About;

//<h3 id="about-header"><em>hi, my name is Bradley, and I am a shamanic practitioner & energy healer</em></h3>
//<hr />

//<div className="case-study padding-top-40px">
//  <div className="case-study-section">
//    <strong><p className="decrease-padding">I am offering distance energy healings by donation to be of service during the global pandemic.</p></strong>
//    <strong><p className="decrease-padding">Donations can be made via paypal <a target="_blank" href="https://www.paypal.me/bradleyreeder">here</a> before or after sessions. Give what you are able to. I also welcome contributions such as reviews.</p></strong>
//    <strong><p className="decrease-padding">Book a slot below or write to me at <a target="_blank" href="mailto: bradjohnreeder@gmail.com">bradjohnreeder@gmail.com</a> with a short description of what you'd like help with and I will be in touch!</p></strong>
//  </div>
//  <div className="case-study-section">
//    <div className="img-container">
//      <img className="img-border" src="public/resources/Energy-healing-6.JPG"/>
//    </div>
//  </div>
//</div>


//<p className="section-title">Despacho Ceremony</p>
//<p className="section-sub-heading">More information coming soon!</p>
//<div className="case-study padding-top-40px">
//  <div className="case-study-section">
//    <h4>Despacho ceremony</h4>
//    <p>A traditional Andean ceremony that blesses & ensures good fortune to new ventures. Perfect for: opening a new business, a wedding, a newborn child, or moving to a new home.</p>
//    <p>The ceremony usually lasts 2-3 hours and can be held at your address or mine (in London) if preferred. More information coming soon!</p>
//  </div>
//  <div className="case-study-section">
//    <div className="img-container">
//      <img className="img-border" src="public/resources/despacho.JPG"/>
//    </div>
//  </div>
//</div>


//<ul className="no-margins decrease-padding">
//  <li>Providing feedback on the healing session and/or this website.</li>
//  <li>Giving a testimonial or review that I can include on my public facing materials.</li>
//  <li>Allowing me to add your email to my mailing list to be updated of future events.</li>
//</ul>


//<p className="section-title"><a href="#healing" onClick={() => this.props.changeContent('healing')}>Shamanic Energy Healing</a></p>
//  <p className="section-sub-heading">1 hour to 90 minutes in-person</p>
//<div className="case-study padding-top-40px padding-bottom-80px">
//  <div className="case-study-section">
//    <h4>Shamanic Energy Healing</h4>
//    <p>Shamanic healing can help reveal solutions & offer guidance for any range of challenges or obstacles be they physical, emotional, mental, or spiritual.</p>
//    <p>I am currently only offering distance healing due to Covid-19 lock-down. <a href="#healing" onClick={() => this.props.changeContent('healing')}>Read more here.</a></p>
//  </div>
//  <div className="case-study-section">
//    <div className="img-container">
//      <a href="#healing" onClick={() => this.props.changeContent('healing')}><img className="img-border" src="public/resources/Energy-healing-9.JPG"/></a>
//    </div>
//  </div>
//</div>
