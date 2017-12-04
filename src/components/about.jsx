/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="main-article">
        <div id="about"></div>
        <h2 className="padding-top-2em">my story</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px">Hi, my name is Bradley, and I am a UX Researcher. I
            graduated with a Master’s in Literature passionate about visual
            storytelling, systems-thinking, and psychology.</p>
          <p className="padding-bottom-80px">I went into web development to learn to build my own web comics, and
            discovered my calling working on projects across user research, facilitation, service
            design, community building and teaching. My goal is to master this process so I can
            empower people to lead happier, safer, and healthier lives.</p>
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
            <div className="my-process-column">
              <h2><i className="fa fa-users" aria-hidden="true"></i></h2>
              <h2><strong>Listen</strong></h2>
              <p>Learn about the domain, product & stakeholders and plan & conduct user research, utilising a range of methods to discover user's thoughts, feelings, and actions.</p>
            </div>
            <div className="my-process-column">
              <h2><i className="fa fa-area-chart" aria-hidden="true"></i></h2>
              <h2><strong>Synthesise</strong></h2>
              <p>Synthesise findings and model representative experiences and mindsets to articulate user needs and define the underlying problem.</p>
            </div>
            <div className="my-process-column">
              <h2><i className="fa fa-comments" aria-hidden="true"></i></h2>
              <h2><strong>Communicate</strong></h2>
              <p>Champion the user by effectively communicating findings across teams, mediums, acceptance criteria and artefacts.</p>
            </div>
            <div className="my-process-column">
              <h2><i className="fa fa-heart" aria-hidden="true"></i></h2>
              <h2><strong>Collaborate</strong></h2>
              <p>Collaborate with others to facilitate brainstorming and generate solutions that address user needs and business goals.</p>
            </div>
            <div className="my-process-column">
              <h2><i className="fa fa-repeat" aria-hidden="true"></i></h2>
              <h2><strong>Learn</strong></h2>
              <p>Repeat this cycle, testing solutions with users to validate them and inform the direction of this unfolding design process.</p>
            </div>
          </div>
        </div>
        <div id="skills"></div>
        <h2>my toolkit</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px"><strong>Web Development:</strong> HTML5, CSS3, Responsive Web Design, Web Accessibility, Javascript, Node.js, SQL, Git, Linux CL (see <a target="_blank" href="https://uk.linkedin.com/in/bradley-reeder-246623119">linkedin</a> for more.)</p>
          <p></p>
          <p><strong>Methodologies:</strong> Design Thinking, User-centred Design, Scrum, Peer-led Education.  </p>
          <p></p>
          <p><strong>User Research:</strong> Design sprints, Ideation sessions, Workshops, Facilitation, Usability Testing, User & Stakeholder Interviews, Surveys, Contextual inquiries, Pop-up research, Secondary research.  </p>
          <p></p>
          <p><strong>Solution Design:</strong> Affinity sorting, Storyboards, Empathy maps, Personas, POV statements & How might we’s, User Journeys, Rapid Prototyping.  </p>
          <p></p>
          <p className="padding-bottom-80px"><strong>Software:</strong> Figma, Invision, Survey Monkey, Google Analytics, Google Docs.</p>
        </div>
        <div id="work"></div>
        <h2>ux case studies</h2>
        <div className="content-background-colour padding-top-40px padding-bottom-80px">
          <p className="section-title"><a target="_blank" href="https://outlandish.com/">Outlandish</a>, Jun 2017 - Nov 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <h4>Growing the Cooperative Technologists Network</h4>
              <p>User-researched application ideas, diagnosed growth potential, and gave
                strategic guidance. <a href="#outlandish" onClick={() => this.props.changeContent('outlandish')}>View case study.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/cotech-assets/Services.png"/>
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
                <img src="../../public/resources/cotech-assets/Services.png"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="http://www.annafreud.org/">Anna Freud Centre</a>, Aug 2016 - Nov 2016</p>
          <div className="case-study padding-top-40px">
            <div className="case-study-section">
              <h4>Relieving anxiety through Breathe With Me</h4>
              <p>Took a self-care themed design challenge through the design thinking
                cycle of inspiration, ideation, and implementation. <a href="#breathe-with-me" onClick={() => this.props.changeContent('annaFreud')}>View case study.</a></p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/annafreud-assets/breathe-with-me-teamwork.png"/>
              </div>
            </div>
          </div>
        </div>
        <h2>workshops</h2>
        <div className="content-background-colour padding-top-40px">
          <p className="section-title"><a target="_blank" href="https://digital.nhs.uk/">NHS Digital</a> & <a target="_blank" href="https://www.rethink.org/">Rethink</a>, Jul 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Facilitated a design sprint workshop ideating digital solutions to bullying
                in schools.</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/NHS_Digital_Design_Sprint.jpg"/>
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
                <img src="../../public/resources/mulberry-school.jpg"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="https://foundersandcoders.com/">Founders & Coders</a>, Nov 2016 - Jun 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Main contributor to open-source curriculum, designing and leading weeks on node.js and design thinking & agile build cycles for the school's 4 month web-development programme.</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/FAC10-start.jpg"/>
              </div>
            </div>
          </div>

          <p className="section-title"><a target="_blank" href="http://www.annafreud.org/">Anna Freud Centre</a>, Jan 2017 - May 2017</p>
          <div className="case-study padding-top-40px padding-bottom-80px">
            <div className="case-study-section">
              <p>Facilitated a hackathon, design sprints, and ran training workshops on design thinking around themes of stigma & mental
                health in young people, and scrum-mastered resulting MVPs.</p>
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/annafreud-assets/Anna_Freud_Hackathon.jpg"/>
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
            </div>
            <div className="case-study-section">
              <div className="img-container">
                <img src="../../public/resources/CAST_Design_Sprint.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
