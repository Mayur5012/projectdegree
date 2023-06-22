import React from "react";
import "./Home.css";
import {Link} from "react-router-dom"
// import { Link } from "react-scroll";
import homeimg from "../../images/homeimg.jpg"
import Navbar from "../Navbar/Navbar";
import Applycards from "../Applycards/Applycards";
import Coursecards from "../Coursecards/Coursecards";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Home() {
  //img size
  const size = {
    marginTop: "2rem",
    width: "100%",
    height: "470px",
  };
  return (
    <>
    <Navbar />
    <div className="Home" id="Home">
      {/* left side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Learn Like You Would At India’s Top Tech Companies.</span>
          <span id="head2">
            Work-experience based learning programs to land your dream tech job
          </span>
          <span>
            Build professional projects like the top 1% tech professionals.<br />
            Master the latest Fullstack/Backend/Automation tech with real<br/>
            work-ex. Crack your dream role at the best tech companies
          </span>
        </div>
        <div>
        
        <Link to="/apply" smooth={true} spy={true}>
          <button id="apply" className="button i-button">
            Apply Here
          </button>
        </Link>
        <Link to="/course" smooth={true} spy={true}>
          <button id="courses" className="button i-button">
            Courses    &rarr;
          </button>
        </Link>
        </div>
        </div>

      {/* right image side */}
      <div className="i-right">
        <img style={size} src={homeimg} alt="" />
      </div>
    </div>
    <Applycards />
    <Coursecards />
    <div style={{backgroundColor: "#2df8c5"}}>
    <Contact />
    <Footer />

    </div>
    </>

  );
}

export default Home;
