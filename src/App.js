import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import RepoComp from './components/RepoComp/Repositories'
import AboutMeComp from './components/AboutMeComp/AboutMe'
import ContactComp from './components/ContactComp/Contact'
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Yeng Vang</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Repo">Repositories</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

      <Switch>
      <Route path = '/Contact' component = {ContactComp}/>
      <Route path = '/Repo' component = {RepoComp}/>
      <Route path = '/' component = {AboutMeComp}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
