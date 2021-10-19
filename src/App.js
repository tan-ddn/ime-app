import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import PageLayout from './PageLayout';
import GlobalLangStateProvider, {useLangGlobalState} from './UserContext';


//Fetch language json files and import to localStorage
fetch('lang/en.json')
.then((r) => r.json())
.then((data) =>{
  localStorage.setItem('enText', JSON.stringify(data));
})
fetch('lang/ge.json')
.then((r) => r.json())
.then((data) =>{
  localStorage.setItem('geText', JSON.stringify(data));
})


//Add icons
library.add(fas, faBars, faTimes);
//Smooth scroll to element
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

  componentDidMount() {
    
  }

  render() {    
    return (
      // <div id='wrapper'>
      <div className="App">
        <GlobalLangStateProvider>
          <Router>
            <PageLayout/>
          </Router>
        </GlobalLangStateProvider>
      </div>
    )
  }
}

// const App = () => {
//   const [state, dispatch] = useLangGlobalState();
//   window.addEventListener( "storage", () => dispatch({ webText: (localStorage.getItem('lang') === 'en') ? en : ge }) );
//   return (
//     // <div id='wrapper'>
//     <div className="App">
//       <GlobalLangStateProvider value={state}>
//         <Router>
//           <PageLayout/>
//         </Router>
//       </GlobalLangStateProvider>
//     </div>
//   )
// }

export default App;
