import React from 'react';
import './App.css';
import RepoComp from './components/RepoComp/Repositories'
import AboutMeComp from './components/AboutMeComp/AboutMe'
import Contact from './components/ContactComp/Contact'

function App() {
  return (
    <div className="App">
      <h1>
        Start up app
      </h1>
      <RepoComp></RepoComp>
      <AboutMeComp></AboutMeComp>
      <Contact></Contact>

    </div>
  );
}

export default App;
