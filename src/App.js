import React from 'react';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <h1>Matthews <i class="fas fa-circle-notch fa-spin" style={{ color: 'skyblue'}}></i> Portfolio</h1>
      <div>
      <AboutMe />
      <Project />
      <ContactMe />
      </div>
    </div>
  );
}

export default App;
