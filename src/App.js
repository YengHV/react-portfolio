import React from 'react';
import './App.css';
import RepoComp from './components/RepoComp/Repositories'
import ContactMeComp from './components/ContactMeComp/ContactMe'

function App() {
  return (
    <div className="App">
      <h1>
        Start up app
      </h1>
      <RepoComp></RepoComp>
      <ContactMeComp></ContactMeComp>

    </div>
  );
}

export default App;
