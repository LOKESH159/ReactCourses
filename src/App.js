import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllCoursesComponent from './AllCoursesComponent';

function App() {
  var courses = [{courseName :"HTML",price:400},
  {courseName :"CSS",price:500},
  {courseName :"JS",price:600},
  {courseName :"REACT",price:700},
  {courseName :"JAVA",price:800},
  {courseName :"GO",price:1000}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
      <AllCoursesComponent courses = {courses}/>
    </div>
  );
}

export default App;
