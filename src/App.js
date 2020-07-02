import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import RepoComp from './components/RepoComp/Repositories'
import AboutMeComp from './components/AboutMeComp/AboutMe'
import Contact from './components/ContactComp/Contact'

function App() {
  return (
   <Router>
    <div className="App">
      <h1>
        Start up app
      </h1>
      <Route path = '/' component = {AboutMeComp}/>
      <Route path = '/Repo' component = {RepoComp}/>
    </div>
    </Router>
  );
}

export default App;
