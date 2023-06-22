import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Applycards from '../Applycards/Applycards';
import "./Apply.css"
function Apply() {
  const[name,setName] =useState('');
  const[email,setEmail] =useState('');
  const[phone,setPhone] =useState('');
  const[course,setCourse] =useState('');
  const[prolink,setProlink] =useState('');
  const[vidlink,setVidlink] =useState('');
  const[procode,setProcode] =useState('');

  function handlSubmit(){
    
    alert("heelo")
  }
  return (
    <>
    <Navbar />
    <div style={{backgroundColor: "#2df8c5"}}>
    <Applycards />
    <div className='applyform'>
        <div className='a-left'>
        <div className="a-content">
          <span>APPLY FOR THE DEGREE</span> 
          <span style={{fontSize:"1rem"}}>OF YOUR PROJECT</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        
      </div>
        </div>
        <div className='a-right'>
          <div className='a-form'>
            <p style={{color: "red", margin:"0.5rem 2rem"}}>Choose your stream and share your details with either Github repository or Drive link with your video link explaining your project with not more than 60 sec.</p>
            <input id='inputapply' type='text'
            value={name}
            onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name' name='name' />
            <input id='inputapply'  type='email' value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id' name='email' />
            <input id='inputapply' type='tel' value={phone}
            onChange={(e) => setPhone(e.target.value)} placeholder='Enter Contact Number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name='phone' />

            <select id='inputapply' value={course}
            onChange={(e) => setCourse(e.target.value)}   name="courses">
              <option selected value="programming">C Programming</option>
              <option value="dsa">Master DSA with C/C++</option>
              <option value="blockchain">Ace Blockchain</option>
            </select>
            <p style={{color: "black", margin:"0.5rem 2rem"}}>Choose only if you have purchased any course offered by ProjectDegree.in</p>
            <input value={prolink}
            onChange={(e) => setProlink(e.target.value)}  id='inputapply'  type='url' placeholder='Paste Project Link(github/drive)' name='project' />
            <input id='inputapply' value={vidlink}
            onChange={(e) => setVidlink(e.target.value)}  type='url' placeholder='Paste Video Link' name='video' />
            <input id='inputapply' value={procode}
            onChange={(e) => setProcode(e.target.value)}  type='text' placeholder='ProCode/Title' name='name' />
            <p style={{color: "black", margin:"0.5rem 2rem"}}>Enter your unique Project code provided to you when you purchased our course. (If not, then enter the title of your project.)</p>

            <button onClick={handlSubmit} id='apply-button' type='submit'>PROCEED TO PAY</button>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Apply;
