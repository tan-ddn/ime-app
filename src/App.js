import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import { Home, About, Team, TeamProfile, Research, Equipment, ResearchProject, ProjectDetails, EquipmentCategory, Study } from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faBars, faTimes);

class App extends Component {
  
  render() {
    return (
      // <div id='wrapper'>
      <div className="App">
        <Router>
          <Header/>
          {/* <HeaderNav/> */}
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/team" exact component={() => <Team />} />
            <Route path="/team/:id" exact component={() => <TeamProfile />} />
            <Route path="/research" exact component={() => <Research />} />
            <Route path="/research/:id" exact component={() => <ResearchProject />} />
            <Route path="/research/project/:id" exact component={() => <ProjectDetails />} />
            <Route path="/equipment" exact component={() => <Equipment />} />
            <Route path="/equipment/:id" exact component={() => <EquipmentCategory />} />
            <Route path="/study" exact component={() => <Study />} />
          </Switch>

          <Footer/>
          <ScrollTop/>
        </Router>
      </div>
    )
  }
}

export default App;
