import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
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
  let hashStr = window.location.hash;
  let hashArr = hashStr.split('#');
  let id = hashArr[hashArr.length - 1];
  console.log(hashArr);
  if (id != null && id !== '') {
      setTimeout(() => {
        const el = document.getElementById(id);
        console.log(el);
        const top = (el) && window.scrollY + el.getBoundingClientRect().top;
        window.scrollTo({ top, behavior: "smooth" })
      }, 300);
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
          <HashRouter>
            <PageLayout/>
          </HashRouter>
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
