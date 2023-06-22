import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Cprogramming.css';
import offeredby from "../../images/umich.png"
function Cprogramming() {
  return (
      <>
      <Navbar />
      <div className="c-programming">
        <div className="coursera">
            <div className="detail-section">
                <h2 style={{fontSize:"2.5rem"}}>C Programming</h2>
                <p>Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</p>
                <span>Rating 🔥🔥🔥</span>
                <p className="instructor">Charles Leclerc</p>
                <button style={{width:"12rem", margin:"10px -2px"}} id="apply">Enroll Now</button>
            </div>
            <div className="offeredby">
                <h2>Offered by</h2>
                <img src={offeredby} alt="#" />
                <p>Project degree</p>
            </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Cprogramming;
