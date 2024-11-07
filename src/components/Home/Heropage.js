import React from 'react'
import CheckScoreSection from './CheckSocreSection/CheckScoreSection'
import FindAdvisoComponent from './FindAdvisorComponent/FindAdvisoComponent'
import InvestPlanning from './PlanningComponent/InvestPlanning'
import MyFinScoreResearch from './MyFinScoreResearch/MyFinScoreResearch'
import LmsContainer from './LmsContainer/LmsContainer'
import Testimonial from './TestimonialContainer.js/Testimonial'


const Heropage = () => {
  return (
    <div>
        <CheckScoreSection/>
        <FindAdvisoComponent/>
        <InvestPlanning/>
        <MyFinScoreResearch/>
        <LmsContainer/>
        <Testimonial/>
    </div>
  )
}

export default Heropage