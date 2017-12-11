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
          <p>Students are responsible for breaking up into small groups to mentor each week of the following course. But without sufficient direction or planning time groups of mentors would often not communicate with each other and prepare their week's content last minute. This led to students receiving an inconsistent, uncoordinated experience and much of the communities’ past learning experiences going lost and unrecorded.</p>
        </div>
        <h2>the approach</h2>
        <div className="content-background-colour">
          <p className="section-header padding-top-40px">discovery</p>
          <p className="padding-top-40px">Having recently mentored, I shared a survey around recent students & mentors and ran a focus group with a set of alumni across diverse cohorts to explore their experiences of the course and mentoring.</p>
          <p>I then synthesised the findings by plotting out a <a target="_blank" href="https://www.figma.com/file/eKDb558QpuIOSQb62LOBOC/Founders-%26-Coders-Mentorship-Storyboard">storyboard</a> depicting the common student’s journey through curriculum planning and mentorship along with the pain-points at each stage.</p>
          <p>Students frequently complained that the curriculum coursebook was never up to date during the course, and of the inconsistency in preparation of mentors. Mentors on the other hand desired more support, clarity around their remit, and more time to be set aside for curriculum planning.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/problem-storyboard.PNG"/>
          </div>
          <p className="section-header padding-top-40px">ideation</p>
          <p className="padding-top-40px">Me and a few others from the focus group then met to ideate ways we could address each of the pain-points and created a new <a target="_blank" href="https://www.figma.com/file/Y5MW7eRSgryZ1Ze75mZm8v/Founders-%26-Coders-Mentorship-Storyboard">storyboard</a> with our ideal solution.</p>
          <p>We presented this during a stakeholder interview with the organisation’s Founders in which we reviewed the history of the course’s development. To my surprise, they were delighted and offered me to lead the next course in London.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/solution-storyboard.PNG"/>
          </div>
          <p className="section-header padding-top-40px">implementation</p>
          <p className="padding-top-40px">We created a <a target="_blank" href="https://github.com/foundersandcoders/master-reference">master-reference repository</a> on github as a stable source of documentation for the programme’s curriculum, so that the history of all changes would be transparent and recorded.</p>
          <p>We initiated it by creating a curriculum draft based on the last programme. I then ran a series of affinity sorting sessions with stakeholders, alumni & students in which we reviewed it, grouped their feedback into themes, and adapted their experience into the draft to ensure it was as representative as possible.</p>
          <p>A week was carved out of the programme for curriculum planning to build these weeks. I modelled it on <a target="_blank" href="https://www.scrum.org/resources/what-is-sprint-planning">agile sprint-planning</a> so in future iterations the mentor's focus would be on identifying high priority issues and improving existing material in time for the start of the next programme.</p>
          <p>I recruited alumni to become a maintainer for each week of the curriculum to support mentors and ensure involvement from those with experience and organisational memory. My role as facilitator was to collaborate across weeks to support students and mentors, and ensure cross communication and cohesion.</p>
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
