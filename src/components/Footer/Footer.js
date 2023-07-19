import React from "react";
import './Footer.css'
import logo from "../../images/logo.png"
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <>

 {/* -------------- footer----------- */}
 <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <img className="iispv" src={logo} alt="" />
              <div className="i-icons">
        <SocialIcon url="https://www.linkedin.com/in/mayureshgawali/" target={"blank"} bgColor="#ffff" style={{ height: 100, width: 100}} />
        <SocialIcon url="https://www.instagram.com/array_mayur/" bgColor="#ffff" target={"blank"}  style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://mail.google.com/mail/u/0/?fs=1&to=mayureshgawali9@gmail.com&tf=cm"  target={"blank"}  bgColor="#ffff" style={{ height: 100, width: 100 }} />
          
        </div>
              {/* <img src={iispv} alt="" /> */}
              {/* <span>Subscribe to our Newsletter!* LOGO *</span>
                   
                        <hr />
                        <div className='subscribe'><input placeholder='youremail@xyz.com' type="mail" /> <button>Subscribe</button></div> */}
            {/* <div class = "vertical"></div> */}
            </div>
            {/* <hr /> */}
            <div className="footer-col-2">
              <h3>Contact Us</h3>
              <p>project@degree.com</p>
              <p>123, ABC TOWN</p>
              <p>Mayapuri, Delhi</p>
              <p>India</p>
            </div>
            <div className="footer-col-4">
              <h3>About Us</h3>
              <p>Privacy And Polices</p>
              <p>Terms And Condtions</p>
              <p>
              <span><b>EdTech company that improves folks through their projects.</b></span>
              </p>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2022 &#169; PD</p>
        </div>
      </div>
      </>
  )
}

export default Footer;
