import './App.css';
import Home from './components/Home/Home';
import Apply from './components/Apply/Apply';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Course from './components/Course/Course';
import Cprogramming from './components/Cprogramming/Cprogramming';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Project-Degree/' exact element={<Home />} />
      <Route path='/Project-Degree/apply' exact element={<Apply />} />
      <Route path='/Project-Degree/course' exact element={<Course />} />
      <Route path='/Project-Degree/course/cprogramming' exact element={<Cprogramming />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
