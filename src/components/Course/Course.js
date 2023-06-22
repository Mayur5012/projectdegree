import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Coursecards from "../Coursecards/Coursecards";
import cred from "../../images/card1.jpg"
import leader from "../../images/card2.jpg"
import "./Course.css";
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
    <Navbar />
    <Coursecards />
    <div style={{backgroundColor: "#2df8c5"}}>
    <div className='course'>
      <h2 style={{textAlign:"center" , fontSize:"36px"}}>Trending Courses</h2>
      <div className='courseCards'>
        <div className='cardsforcourses'>
        <img src={leader} alt="" />
        <h4 id="ccHeading">C-Programming</h4>
        <span id='carddt'>Ready to make your mark in the tech industry? Our 7 project-based C programming course will help you build a solid foundation and pave the way for your success.</span><br />
        <Link to="/course/cprogramming" smooth={true} spy={true}>
          <button id="buycoursebtn" className="button i-button">
            Buy Now
          </button>
        </Link>
        </div>
        <div className='cardsforcourses'>
        <img src={cred} alt="" />
        <h4 id="cardHeading">Master DSA in C/C++</h4>
        <span id='carddet'>Unlock the full potential of DSA with the power and flexibility of C and C++ – the perfect combination for solving complex programming challenges and get yourself placement ready!</span><br />
        <Link to="/apply" smooth={true} spy={true}>
          <button id="buycoursebtn" className="button i-button">
            Buy Now
          </button>
        </Link>
        </div>
        <div className='cardsforcourses'>
        <img src={leader} alt="" />
        <h4 id="cardHeading">Ace Blockchain</h4>
        <span id='carddet'>Transform your career with our blockchain course that offers a unique learning experience through project-based assignments that simulate real-world scenarios.</span><br />
        <Link to="/apply" smooth={true} spy={true}>
          <button id="buycoursebtn" className="button i-button">
            Buy Now
          </button>
        </Link>
        </div>
        <div className='cardsforcourses'>
        <img src={cred} alt="" />
        <h4 id="cardHeading">MERN Stack</h4>
        <span id='carddet'>Join our MERN Stack Web Dev course, where you’ll gain hands-on experience through project-focused learning, equipping you with practical skills to excel in real-world development scenarios.</span><br />
        <Link to="/apply" smooth={true} spy={true}>
          <button id="buycoursebtn" className="button i-button">
            Buy Now
          </button>
        </Link>
        </div>
        <div className='cardsforcourses'>
        <img src={cred} alt="" />
        <h4 id="cardHeading">C++ Programming</h4>
        <span id='carddet'>Ready to make your mark in the tech industry? Our 7 project-based C programming course will help you build a solid foundation and pave the way for your success.</span><br />
        <Link to="/apply" smooth={true} spy={true}>
          <button id="buycoursebtn" className="button i-button">
            Buy Now
          </button>
        </Link>
        </div>
        
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Course;
