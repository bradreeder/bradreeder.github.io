/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class FoundersAndCoders extends Component {
  render() {
    return (
      <div id="founders-and-coders" className="main-article">
        <h2 className="padding-top-2em">Maximising the impact of the Founders & Coders Web Development Programme</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px"><em><a target="_blank" href="https://foundersandcoders.com/">Founders & Coders</a> offers a free 4-month programme in web development that prioritises a self-organising, peer-led approach to learning where each cohort delivers the next programme.</em></p>
          <p>I joined as a student and became the facilitator of the programme after proposing and leading a re-design of the curriculum and its curriculum-planning process.</p>
          <p className="padding-top-40px"><strong>Services:</strong> UX Research, Service Design, Facilitation, Community Building</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px padding-bottom-80px" src="public/resources/founders-and-coders-assets/fac9-start.JPG"/>
          </div>
        </div>
        <h2>the challenge</h2>
        <div className="content-background-colour padding-top-40px padding-bottom-80px">
          <p>There was a repeating difficulty with each cycle of the programme. Students agreed to mentor the next programme but received minimum direction and planned & rebuilt their assigned weeks with only their own experience to guide them.</p>
          <p>Mentors looking for jobs felt burdened and often prepared content last minute, students received an uncoordinated experience, and much of the communities’ past learning experiences went lost and unrecorded.</p>
        </div>
        <h2>the approach</h2>
        <div className="content-background-colour">
          <p className="section-header padding-top-40px">discovery</p>
          <p className="padding-top-40px">Having recently mentored, I shared a survey around recent students & mentors and ran a focus group with a set of alumni across diverse cohorts to explore their experiences of the course and mentoring.</p>
          <p>I then synthesised the findings by plotting out a storyboard depicting the common student’s journey through curriculum planning and mentorship along with the pain-points at each stage.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/story-board.JPG"/>
          </div>
          <p className="section-header padding-top-40px">ideation</p>
          <p className="padding-top-40px">Me and a few others from the focus group then met to ideate ways we could address these pain-points.</p>
          <p>We narrowed on thinking about how we might re-design curriculum planning to be like an agile product cycle, where the entire bootcamp experience is measured by the feedback of students who then iteratively improve it as mentors in collaboration with alumni as carriers of organisational memory.</p>
          <p>After the session, I drew up a new storyboard with a proposed solution. Me and Eoin, the facilitator for our new campus in Israel, then ran a stakeholder interview with the Founders in which we presented it. To my surprise, they were delighted and offered me to lead the next course in London.</p>
          <p className="section-header padding-top-40px">implementation</p>
          <p className="padding-top-40px">We both created the <a target="_blank" href="https://github.com/foundersandcoders/master-reference">master-reference</a> for the programme on github as a stable source of documentation. It would be open-source and transparent, changes to it could be discussed openly by anyone across our campuses, and the history of all changes recorded.</p>
          <p>We started it with a curriculum draft we created with the school’s founders. I then ran a series of affinity sorting curriculum review sessions with alumni and students in which we reviewed it, grouped their feedback into themes and adapted their experience into the draft.</p>
          <p>We then recruited alumni who would become maintainers for each week of the curriculum. When students became assigned to mentor weeks, the maintainer would help them to build it and in future iterations review the material with them and identify a few key areas for improvement. My role was to facilitate cross-week collaboration and cohesion.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px padding-bottom-80px" src="public/resources/founders-and-coders-assets/master-reference.PNG"/>
          </div>
        </div>
        <h2>the outcome</h2>
        <div className="content-background-colour padding-top-40px">
          <p className="section-header">outcome</p>
          <p className="padding-top-40px">The structure of the curriculum, the course facilitator role, and the curriculum-planning process we communally designed then remains in its core aspects and the programme continues to improve in quality.</p>
          <p>The <a target="_blank" href="https://github.com/foundersandcoders/master-reference">master-reference</a> has since become a core source of documentation on the curriculum and the running of a campus that has been used to build other Founders & Coders schools in Israel.</p>
          <p>During the next programme I initiated a re-design of the second half of the programme. We modified weeks 10-12 to become a <a target="_blank" href="https://github.com/foundersandcoders/master-reference/tree/master/coursebook/weeks-10-12">design & build sprint</a> for student’s final projects taking them through the design thinking process from user research to rapid prototyping, testing and the agile build cycle. I’m currently the alumni maintainer for these weeks.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/fac9.JPG"/>
          </div>
          <p className="footer-navigation padding-bottom-80px padding-top-40px"><a href="#work" onClick={() => this.props.changeContent('about')}>return to case studies</a></p>
        </div>
      </div>
    );
  }
}

export default FoundersAndCoders;
