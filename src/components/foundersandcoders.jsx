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
          <p>As a student and mentor I observed repeating difficulties. Students were responsible for breaking up into small groups to prepare and mentor each week of the following course. They were given a lot of freedom and would re-invent great parts of each curriculum from scratch.</p>
          <p>Without sufficient direction or planning time, groups of mentors would often not collaborate and prepare their week’s content last minute. This led to students receiving an uncoordinated experience with inconsistent levels of quality and preparation and much of the communities’s past learning experiences went lost and unrecorded.</p>
        </div>
        <h2>the approach</h2>
        <div className="content-background-colour">
          <p className="section-header padding-top-40px">discovery</p>
          <p className="padding-top-40px">Having recently mentored, I had an empathetic connection with the current students and wanted to improve their experience of mentoring.</p>
          <p>I shared a survey around them & current mentors and ran a focus group with a set of alumni from across the history of the programme to explore their experiences of the course, mentoring and to get a sense of how the course had developed over time.</p>
          <p>I then synthesised the findings by mapping out a <a target="_blank" href="https://www.figma.com/file/eKDb558QpuIOSQb62LOBOC/Founders-%26-Coders-Mentorship-Storyboard">storyboard</a> depicting the common student’s journey through curriculum planning and mentorship along with the pain-points at each stage.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/problem-storyboard.PNG"/>
          </div>
          <p className="section-header padding-top-40px">secondary research</p>
          <p className="padding-top-40px">A core insight from the research was that the problems students and mentors experienced were intrinsic to the level of freedom mentors had. Each course changed significantly from the last in a way which was too much work for mentors to prepare and coordinate in the time they had.</p>
          <p>I began researching into agile & lean methodology to think about ways we could make mentor’s contributions more iterative, where they would be responsible for identifying ways to improve existing material within a fixed sprint of time based on their recent user experience as students.</p>
          <p className="section-header padding-top-40px">ideation</p>
          <p className="padding-top-40px">A few others from the focus group became interested in the research and I met with them again to run an ideation session on ways we could address each of the pain-points. We produced a new <a target="_blank" href="https://www.figma.com/file/Y5MW7eRSgryZ1Ze75mZm8v/Founders-%26-Coders-Mentorship-Storyboard">storyboard</a> with our leaner solution from the session.</p>
          <p>We then organised a stakeholder interview with the school’s Founders in which we presented our proposed solution. To my surprise, they were delighted and offered me to facilitate the next course in London.</p>
          <div className="case-study-img-container">
            <img className="padding-top-40px" src="public/resources/founders-and-coders-assets/solution-storyboard.PNG"/>
          </div>
          <p className="section-header padding-top-40px">implementation</p>
          <p className="padding-top-40px">The first thing we did was create a <a target="_blank" href="https://github.com/foundersandcoders/master-reference">master-reference repository</a> on github as a stable source of documentation for the programme and its curriculum.</p>
          <p>We initiated it by creating a curriculum draft based on the last programme. I then ran a series of affinity sorting sessions with stakeholders, alumni and students in which we reviewed it, grouped their feedback into themes, and adapted their experience into the draft.</p>
          <p>A week of the programme was dedicated towards curriculum planning to build this material on github. I modelled the process on <a target="_blank" href="https://www.scrum.org/resources/what-is-sprint-planning">agile sprint-planning</a> so in future iterations mentor's would focus on contributing to a backlog of issues, identifying high priority ones and improving existing material on github in time for the start of the next programme.</p>
          <p>Finally, I recruited alumni to become a maintainer for each week of the curriculum to support mentors and ensure involvement from those with experience and organisational memory. My role as facilitator was to collaborate across weeks to support students and mentors and ensure cross communication and cohesion.</p>
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
