/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="main-article">
        <div id="about"></div>
        <img className="bg" src="//uploads.strikinglycdn.com/static/backgrounds/blurred-bg/58.jpg"/>
        <h2 className="padding-top-2em">my story</h2>
        <div className="content-background-colour">
          <div className="my-story padding-top-40px padding-bottom-80px">
            <h3 id="about-header"><em>Hi, my name is Bradley, and I am a UX Researcher & Designer.</em></h3>
            <hr />
            <p>I graduated with a Master’s degree in Literature passionate about visual
              storytelling, systems-thinking, and psychology.</p>
            <p>I went into web development to learn to build my own web comics and
              discovered my calling working on projects across user research, facilitation, service
              design, community building and teaching.</p>
            <p>My goal is to use technology to empower people to
              lead happier, safer, and healthier lives.</p>
          </div>
        </div>
        <div id="process"></div>
        <h2>my process</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px">My experience has taught me that great design requires immersive
            contextual research and a tight feedback loop between the people building and the people using, testing and refining hypothesis until solutions melt into
            user's lives.</p>
          <p>I bring to this process natural empathy and mediation skills combined
            with a curiosity to learn and a drive to understand the entire system
            and simplify complexities. This enables me to:</p>
          <p></p>
          <div className="my-process padding-bottom-80px">
            <div className="my-process-column purple">
              <h2><i className="fa fa-heart" aria-hidden="true"></i></h2>
              <h3><strong>listen</strong></h3>
              <p>Learn about the domain, product & stakeholders and plan & conduct user research, utilising a range of methods to discover user's thoughts, feelings, and actions.</p>
            </div>
            <div className="my-process-column green">
              <h2><i className="fa fa-area-chart" aria-hidden="true"></i></h2>
              <h3><strong>synthesise</strong></h3>
              <p>Synthesise findings and model representative experiences and mindsets to articulate user needs and define the underlying problem.</p>
            </div>
            <div className="my-process-column blue">
              <h2><i className="fa fa-comments" aria-hidden="true"></i></h2>
              <h3><strong>collaborate</strong></h3>
              <p>Cross-collaborate across teams to facilitate brainstorming and generate solutions that address user needs and business goals.</p>
            </div>
            <div className="my-process-column purple">
              <h2><i className="fa fa-paint-brush" aria-hidden="true"></i></h2>
              <h3><strong>create</strong></h3>
              <p>Build wireframes and prototype solutions to gather feedback from stakeholders and users and develop a shared understanding of how the interface will work.</p>
            </div>
            <div className="my-process-column green">
              <h2><i className="fa fa-repeat" aria-hidden="true"></i></h2>
              <h3><strong>learn</strong></h3>
              <p>Repeat this cycle, testing solutions with users to validate and inform the direction of this unfolding design process.</p>
            </div>
          </div>
        </div>
        <div id="skills"></div>
        <h2>my toolkit</h2>
        <div className="content-background-colour">
          <h2><i className="fa fa-wrench padding-top-40px" aria-hidden="true"></i></h2>
          <hr />
          <p className="skills padding-top-40px"><strong>Web Development:</strong> HTML5, CSS3, Responsive Web Design, Web Accessibility, Javascript, Node.js, SQL, Git, Linux CL (see <a target="_blank" href="https://uk.linkedin.com/in/bradley-reeder-246623119">linkedin</a> for more.)</p>
          <p></p>
          <p className="skills"><strong>Methodologies:</strong> Design Thinking, User-centred Design, Scrum, Peer-led Education.  </p>
          <p></p>
          <p className="skills"><strong>User Research:</strong> Design sprints, Ideation sessions, Presentations & Workshops, Facilitation, Usability Testing, User & Stakeholder Interviews, Surveys, Contextual inquiries, Pop-up research, Competitor Reviews, Secondary research.  </p>
          <p></p>
          <p className="skills"><strong>Solution Design:</strong> Affinity diagramming, Storyboards, Empathy maps, Personas, POV statements & How might we’s, User Journeys & Stories, Rapid Prototyping, Wireframes.  </p>
          <p></p>
          <p className="padding-bottom-80px skills"><strong>Software:</strong> Figma, Invision, Survey Monkey, Usability Hub, Google Analytics, Google Docs, Microsoft Office.</p>
        </div>
        <div id="work"></div>
        <h2>ux case studies</h2>
        <div className="content-background-colour padding-top-40px padding-bottom-80px">
          <p className="section-title"><a target="_blank" href="https://outlandish.com/">Outlandish</a>, Jun 2017 - Nov 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <h4>Growing the Cooperative Technologists Network</h4>
              <p>User-researched application ideas, diagnosed growth potential and gave
                strategic guidance. <a href="#outlandish" onClick={() => this.props.changeContent('outlandish')}>View case study.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/cotech-assets/services.PNG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="https://foundersandcoders.com/">Founders & Coders</a>, Nov 2016 - Jun 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <h4>Maximising the impact of the Founders & Coders Web Development Programme</h4>
              <p>Led a user-centred re-design of a full-stack javascript programme and
                its curriculum-planning processes. <a href="#founders-and-coders" onClick={() => this.props.changeContent('foundersAndCoders')}>View case study.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/founders-and-coders-assets/fac9-start.JPG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="http://www.annafreud.org/">Anna Freud Centre</a>, Aug 2016 - Nov 2016</p>
          <div className="case-study padding-top-40px">
            <div className="case-study-section">
              <h4>Relieve anxiety by Breathing With Me</h4>
              <p>Took a self-care themed design challenge through the design thinking
                cycle of inspiration, ideation and implementation. <a href="#breathe-with-me" onClick={() => this.props.changeContent('annaFreud')}>View case study.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/annafreud-assets/breathe-with-me-teamwork.PNG"/>
              </div>
            </div>
          </div>
        </div>
        <h2>workshops</h2>
        <div className="content-background-colour padding-top-40px">
          <p className="section-title"><a target="_blank" href="https://digital.nhs.uk/">NHS Digital</a> & <a target="_blank" href="https://www.rethink.org/">Rethink</a>, Jul 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Co-facilitated a design sprint workshop for <a target="_blank" href="https://digital.nhs.uk/">NHS Digital</a> and <a target="_blank" href="https://www.rethink.org/">Rethink</a> ideating digital solutions to bullying
                in schools.</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/nhs-digital.JPG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="http://www.mulberry.towerhamlets.sch.uk/">Mulberry School</a>, Jun 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Ran an introductory class taking sixth form students through building & hosting static web pages with HTML5, CSS3, and Github.</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/mulberry-school.JPG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="https://foundersandcoders.com/">Founders & Coders</a>, Nov 2016 - Jun 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Main contributor to the school's 4 month web development <a target="_blank" href="https://github.com/foundersandcoders/master-reference">open-source curriculum</a>, co-designing and facilitating weeks on <a target="_blank" href="https://github.com/foundersandcoders/master-reference/tree/master/coursebook/week-4">node.js</a> and <a target="_blank" href="https://github.com/foundersandcoders/master-reference/tree/master/coursebook/weeks-10-12">design thinking & agile build cycles</a>.</p>
              <p className="padding-top-20px"><strong>See our <a target="_blank" href="https://docs.google.com/presentation/d/1CiYH-jdV3OojT3mUITuTBCao6IeZyNkI8xF2G2B6vDA/edit#slide=id.g35f391192_00">Design thinking week's</a> slidedeck</strong></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/founders-and-coders-assets/fac10-start.JPG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="http://www.annafreud.org/">Anna Freud Centre</a>, Jan 2017 - May 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Facilitated a hackathon, ran training workshops on design thinking around themes of stigma & mental
                health in young people and scrum-mastered resulting MVPs <a target="_blank" href="https://growgoals.co.uk/login">Grow</a> and <a target="_blank" href="https://welcome-in.herokuapp.com/">Getting to Know You</a>.</p>
              <p className="padding-top-20px"><strong>See <a target="_blank" href="https://docs.google.com/presentation/d/1GdD6KVaRyf1VuzzSS0-LUoNITjtjr38hhbn2YeF2NO4/edit">Hackathon</a> & <a target="_blank" href="https://docs.google.com/presentation/d/1pXw-1476S-CM776Kh3TAlHqUmA79AS3XezpHm9BECWY/edit#slide=id.gc6f73a04f_0_0">Workshop</a> slidedecks</strong></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/annafreud-assets/anna-freud-hackathon.JPG"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="https://www.wearecast.org.uk/">CAST</a>, Aug 2016 - Oct 2016</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Facilitated design sprints, built and tested prototypes for, <a target="_blank" href="http://safertogether.org.uk/">SaferTogether</a>,
                <a target="_blank" href="http://www.safelives.org.uk/"> SafeLives</a> and
                <a target="_blank" href="http://www.worthwhile.org.uk/"> Worthwhile</a>, as a part of <a target="_blank" href="http://www.wearecast.org.uk/fuse">CAST's 2016 Digital Fuse Programme</a>.
              </p>
              <p className="padding-top-20px"><strong>See <a target="_blank" href="https://docs.google.com/presentation/d/1GNmREakxU_ZmAznivu7ef0ENWoTqCK-zsbOWGrit6ec/edit#slide=id.g157dffee2d_0_276"> Design sprint</a> slidedeck</strong></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="public/resources/cast.JPG"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
