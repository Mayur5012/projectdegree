import React from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="n-wrapper" id="Navbar">
          {/* left */}
          
          <Link to="/" smooth={true} spy={true}>
            <div className="n-left">
              <img src={logo} alt="ProjectDegree"></img>
              {/* <span className="n-name">Project Degree</span> */}
            </div>
          </Link>

          {/* right */}
          <div className="n-right">
            <div className="n-list-pc">
              <ul style={{ listStyleType: "none" }}>
              <Link to="/" smooth={true} spy={true}>
                  <li>Home</li>
              </Link>
                <Link to="/course" smooth={true} spy={true}>
                  <li>Courses</li>
                </Link>
                <Link to="/apply" smooth={true} spy={true}>
                  <li>Apply</li>
                </Link>
                <li>AboutUs</li>
              </ul>
            </div>
            <div className="n-list">
              <ul style={{ listStyleType: "none" }}>
              <li id="MenuToggle">
                  {/* ------menu----- */}
                  <div class="menu">
                    <input type="checkbox" id="check" />
                    <label for="check" className="menu-button">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                    <div className="nav-menu">
                      <a href="/#">Home</a>
                      <a href="/#">Courses</a>
                      <a href="/#">Apply</a>
                      <a href="/#">AboutUs</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
