import hand1 from "../assets/images/howWeWork/howWeWorkHand(1).png"
import hand2 from "../assets/images/howWeWork/howWeWorkHand(2).png"
import { HowWeWorkPath1, HowWeWorkPath2 } from "../assets/svgs/exportPaths"

const WhatWeDo = () => {
  return (
    <div id='how-we-work' className='how-we-work-container'>
      <div className="bg-wrapper">
        <div className="left">
          <div className="path"><HowWeWorkPath1 /></div>
          <img src={hand1} alt="" />
        </div>
        <div className="right">
          <div className="path"><HowWeWorkPath2 /></div>
          <img src={hand2} alt="" />
        </div>
      </div>
      <div className="how-we-work-wrapper">
        <div className="header">
          We do it for you. No more
          struggling to grow on
          any Platform
        </div>
        <div className="sub-header">
          Work with our expert strategists
          writers, editors, and producers to create content
          that transforms your content
        </div>
        <div className="message">
          No managing a team of freelancers or spending countless hours trying to master all the skillsets Platform requires - all you need is The Creator
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo