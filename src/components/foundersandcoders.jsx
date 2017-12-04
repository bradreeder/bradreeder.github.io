/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class FoundersAndCoders extends Component {
  render() {
    return (
      <div id="founders-and-coders" className="main-article">
        <h2 className="padding-top-2em">Maximising the impact of the Founders & Coders Web Development Programme</h2>
        <div className="content-background-colour">
          <p className="padding-top-40px"><em>Founders & Coders offers a free 4-month programme in web development that prioritises a self-organising, peer-led approach to learning where each cohort delivers the next programme.</em></p>
          <p>I joined as a student and became the facilitator of the programme after proposing and leading a re-design of the curriculum and its curriculum-planning process. Through this I acquired experience in business development, service design and community building.</p>
          <p className="padding-top-40px"><strong>Services:</strong> UX Research, Service Design, Facilitation, Community Building</p>
        </div>
        <h2>the challenge</h2>
        <div className="content-background-colour">
          <p>I had observed repeated difficulties across a few cycles of the programme. Students paid forward by agreeing to mentor the next programme and without direction planned and rebuilt their assigned weeks based on their experience. Mentors looking for jobs felt burdened and often prepared content last minute, students received an uncoordinated experience, and much of the communities’ past learning experiences went lost and unadapted.</p>
        </div>
        <h2>the approach</h2>
        <div className="content-background-colour">
          <p className="section-header">discovery</p>
          <p>Having recently mentored, I shared a survey around recent cohorts and ran a focus group with a set of alumni across diverse cohorts to explore their experiences of the course and mentoring.</p>
          <p>From this, I plotted out a storyboard depicting the student’s journey through curriculum planning and mentorship along with the pain-points at each stage.</p>
          <p className="section-header">ideation</p>
          <p>Me and a few others met to brainstorm ways we could address these pain-points. The theme of adapting agile and user-centred methodologies arose. We narrowed on thinking about how we might re-design curriculum planning to be leaner, where the entire bootcamp experience is tested by students and then iteratively improved by them as mentors in collaboration with alumni as carriers of organisational memory.</p>
          <p>Me and Eoin, the leader of our new school in Israel, ran a stakeholder interview with the Founders in which we presented our solution. To my surprise, they were delighted and offered me to lead the next course in London.</p>
          <p className="section-header">implementation</p>
          <p>We both created master documentation for the programme online to be consistent with its values. It would be open-source and transparent, changes to it could be discussed openly by anyone across our campuses, and the history of all changes recorded.</p>
          <p>We started with a curriculum draft we created with the school’s founders. I then ran a series of affinity sorting curriculum review sessions with alumni and students in which we reviewed it, grouped their feedback into themes and adapted their experience into the draft.</p>
          <p>We recruited alumni who would become maintainers for each week and help the assigned mentors to build it and in future iterations review the material with them and identify a few key areas for improvement. My role was to facilitate cross-week collaboration and cohesion.</p>
        </div>
        <h2>the outcome</h2>
        <div className="content-background-colour">
          <p className="section-header">outcome</p>
          <p>The structure of the curriculum, the course facilitator role, and the curriculum-planning process we communally designed then remains in its core aspects. The master-reference has since been used to build other campuses and the programme continues to improve in quality.</p>
          <p>During the next programme we led a re-design of the second half of the programme. We modified weeks 10-12 to become a design & build sprint for student’s final projects taking them through the design thinking process from user research to rapid prototyping, testing and the agile build cycle. I’m currently the alumni maintainer for these weeks.</p>
        </div>
      </div>
    );
  }
}

export default FoundersAndCoders;
