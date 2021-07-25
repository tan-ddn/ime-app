import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import PageLayout from './PageLayout';

library.add(fas, faBars, faTimes);
window.useScrollTo = function() {
  let id = window.location.hash.substring(1);
  // console.log(id);
  if (id) {
      const el = document.getElementById(id);
      // console.log(el);
      const top = (el) && window.scrollY + el.getBoundingClientRect().top;
      window.scrollTo({ top, behavior: "smooth" });
  }
}

class App extends Component {

  render() {    
    return (
      // <div id='wrapper'>
      <div className="App">
        <Router>
          <PageLayout/>
        </Router>
      </div>
    )
  }
}

export default App;
