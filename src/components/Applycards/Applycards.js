import React from "react";
import "./Applycards.css"
import cred from "../../images/card1.jpg"
import leader from "../../images/card2.jpg"
function Applycards() {
  return (
    <>
      <div className="applycards">
        <span className="heading">PACE YOUR PLACEMENTS</span>
        <span className="typical">
          Elevate your career with Project Degree – the only platform that
          awards certificates based on your ability to execute real projects.
        </span>

        <div className="cards">
          <div className="cardforapply">
            <img src={leader} alt="" />
            <h4 id="cardHeading">
STAND OUT FROM THE CROWD</h4>
            <span className="carddet">
            With so much competition in the job market, having a verified certificate demonstrates that you possess the skills and knowledge necessary to excel in your field.
            </span>
          </div>
          <div className="cardforapply">
            <img src={cred} alt="" />
            <h4 id="cardHeading">FUTURE-PROOF YOUR CAREER</h4>
            <span className="carddet">
            Project Degree verified certificate showcases commitment to ongoing learning, future-proofs career, and ensures relevance and demand as technology evolves rapidly.
            </span>
          </div>
          <div className="cardforapply">
            <img src={leader} alt="" />
            <h4 id="cardHeading">INCREASE YOUR CREDIBILITY</h4>
            <span className="carddet">
            ProDegree can also lead to career advancement, higher salaries, and personal growth through learning new skills and receiving feedback from industry experts.
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Applycards;
