import './App.css';
import Home from './components/Home/Home';
import Apply from './components/Apply/Apply';
// import Applycards from './components/Applycards/Applycards';
// import Contact from './components/Contact/Contact';
// import Coursecards from './components/Coursecards/Coursecards';
// import Navbar from './components/Navbar/Navbar';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Course from './components/Course/Course';
import Cprogramming from './components/Cprogramming/Cprogramming';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Project-Degree' exact element={<Home />} />
      <Route path='/apply' exact element={<Apply />} />
      <Route path='/course' exact element={<Course />} />
      <Route path='/course/cprogramming' exact element={<Cprogramming />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
