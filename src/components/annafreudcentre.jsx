/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class AnnaFreud extends Component {
  render() {
    return (
      <div id="breathe-with-me" className="main-article">
        <h2 className="padding-top-2em">Breathe With Me</h2>
        <div className="content-background-colour padding-top-40px">
          <p><em>Breathe With Me was the result of a team collaboration for a hackathon with the <a target="_blank" href="http://www.annafreud.org/">Anna Freud Centre</a> - a charity dedicated to providing training & support for child mental health services.</em></p>
          <p>My teammates and I took a self-care themed design challenge through the design thinking stages of inspiration, ideation, and implementation to create a prototype of our solution, which we were able to test with young people in services.</p>

          <p className="padding-top-40px"><strong>Services:</strong> Front-end Development, Rapid Prototyping, Usability Testing</p>
          <div className="case-study-img-container">
            <img className="portrait padding-top-40px padding-bottom-80px" src="../../public/resources/annafreud-assets/Breathe-with-me.png"/>
          </div>
        </div>
        <h2>the challenge</h2>
        <div className="content-background-colour padding-top-40px">
          <p>We began running a design sprint with our Anna Freud product owner, Charlotte. Her vision was to create a game that young people could access in moments of anxiety to learn stress-relieving techniques and build resilience.</p>
          <p>We began with a discussion understanding the context of the problem, her organisational and user needs, and what is currently being done in the field to address them. We looked at a few relaxation apps to inspire us, then ran a brain-storming and ‘crazy-eights’ session to generate ideas and sketch some pages and flows.</p>
          <p>We all liked the app <a target="_blank" href="http://www.wired.co.uk/article/flowy">Flowy</a> and voted upon the idea of a tool for learning deep breathing & mindfulness visually guided by the focal point of breathing animal avatars.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px padding-bottom-80px" src="../../public/resources/annafreud-assets/Anna_Freud_Hackathon.jpg"/>
          </div>
        </div>
        <h2>the approach</h2>
        <div className="content-background-colour padding-top-40px">
          <p className="section-header">empathy</p>
          <p className="padding-top-40px">Our team then went into a phase of discovery learning all we could about the scientific research behind these practices, how they’re taught in services, and existing apps for design inspiration.</p>
          <p>We crafted an interview guide from our notes and with Charlotte spoke with some young people to learn more about their experiences and behaviour. We did competitor analysis by watching them play with Flowy to identify their likes and dislikes, and showed them our paper prototypes to test our ideas and find areas for improvement.</p>
          <p className="section-header padding-top-40px">synthesis</p>
          <p className="padding-top-40px">Our team then re-grouped to synthesise what we had learned, and conduct an affinity sorting session in which we identified themes, refined our insights, and broke-down our user stories and user flows for our prototype from the following journey:</p>
          <blockquote>“As a young person experiencing anxiety, I want to access guided relaxation techniques, so that in any moment of distress I can calm myself down."</blockquote>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="../../public/resources/annafreud-assets/breathe-with-me-teamwork.png"/>
          </div>
          <p className="section-header padding-top-40px">prototype</p>
          <p className="padding-top-40px">Our team built a usable prototype for our proposed solution in HTML5, CSS3, and Javascript.</p>
          <p>We focused on creating a safe connection between the user and the app through a welcoming instructional narrative, the soft colourful ambience of flowing animations, and the calming rhythmic breathing of the avatar to sync their breath with.</p>
          <p className="section-header padding-top-40px">test</p>
          <p className="padding-top-40px">The last phase of our challenge was to usability test the prototype with the same young people. Watching their delight playing with it stands out among my rewarding memories in UX.</p>
          <p>Some of the things we observed was a desire to choose other animals, for it to have a soundtrack, that some of the language didn’t appeal to males, and that they found the instructions too complicated - things we later adapted.</p>
          <div className="case-study-img-container">
            <img className="portrait padding-top-40px" src="../../public/resources/annafreud-assets/breathing-avatar.png"/>
          </div>
          <p className="section-header padding-top-40px">iterate</p>
          <p className="padding-top-40px">We demonstrated our prototype at the judging panel for the hackathon the following week and Breathe With Me won funding to become an MVP built over two build sprints.</p>
          <p className="padding-bottom-80px">We continued to build in an agile iterative cycle in close contact with Charlotte and different usability testing groups. The final version can be found <a target="_blank" href="https://breathewithme.co.uk/">here</a> and was built as a Progressive Web App to be responsive, accessible, and offline-first across browsers, desktop, mobile, and tablet.</p>
        </div>
        <h2>the outcome</h2>
        <div className="content-background-colour padding-top-40px">
          <p>Breathe With Me continues to be used by counsellors and youth workers as a tool for teaching young people deep breathing and has been put forward for bids for further development.</p>
          <p>The Anna Freud Centre were impressed with us so much that they offered me and my colleague to lead their next hackathon. I facilitated the design sprint (see <a target="_blank" href="https://docs.google.com/presentation/d/1GdD6KVaRyf1VuzzSS0-LUoNITjtjr38hhbn2YeF2NO4/edit#slide=id.g2244b19ab0_0_0">slidedeck</a>) and scrum-mastered a similar process as the above for the apps <a target="_blank" href="https://growgoals.co.uk/login">Grow</a> and <a target="_blank" href="https://welcome-in.herokuapp.com/">Getting to Know You</a>.</p>
          <p>I continue to be passionate about mental health and facilitate participatory design workshops on the design thinking process with young people and Anna Freud staff.</p>
          <div className="case-study-img-container">
            <img className="portrait padding-top-40px padding-bottom-80px" src="../../public/resources/annafreud-assets/well-done.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnaFreud;
