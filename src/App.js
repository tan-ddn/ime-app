import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import './App.scss';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import PageLayout from './PageLayout';
import GlobalLangStateProvider, { globalLangStateContext } from './UserContext';
import 'react-image-lightbox/style.css';
import { Helmet } from "react-helmet";

//Add icons
library.add(fas, faBars, faTimes);
//Smooth scroll to element
window.useScrollTo = function () {
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
    }, 200);
  }
}


class App extends Component {

  constructor(props) {
    super(props);

    this.updateLanguage = (lang) => {
      localStorage.setItem('lang', lang);
      this.setState({
        webText: JSON.parse(localStorage.getItem(lang + 'Text')),
        lang: lang,
        language: (lang === 'en') ? 2 : 1
      });
    }

    this.state = {
      webText: null,
      lang: null,
      language: 0,
      updateLanguage: this.updateLanguage,
      loading: true
    };
  }

  componentDidMount() {
    let currentLang = localStorage.getItem('lang');
    this.setState({
      webText: JSON.parse(localStorage.getItem(currentLang + 'Text')),
      lang: currentLang,
      language: (currentLang === 'en') ? 2 : 1
    });
  }

  render() {
    // if (!this.state.webText || !this.state.lang) return '';
    return (
      // <div id='wrapper'>
      <div className="App">
        <Helmet>
          <meta name="keywords" content="Metallurgy, Circular economy, process Technology of metals, extractive metallurgy, pyrometallurgy, hydrometallurgy, Process Metallurgy, RWTH Aachen" />
          {this.state.language == 1
            ? <meta name="description" content="Das IME Metallurgische Prozesstechnik und Metallrecycling (Professor Dr.-Ing. Dr. h.c. Bernd Friedrich) beschäftigt sich mit angewandter Forschung und Lehre in den Bereichen der extraktiven Metallurgie (Pyrometallurgie und Hydrometallurgie), der Metallveredelung und Elektrolyse sowie dem Recycling von Metallen aus diversen Abfallströmen. Am IME-RWTH werden Prozesse mit optimiertem Ressourceneinsatz und unter Berücksichtigung kritischer Abfallströme (Kreislaufwirtschaft / Circular Economy) entworfen und weiterentwickelt. Weitere wichtige Forschungsgebiete sind die Vakuummetallurgie im Klein- bis hin zum Demo-Maßstab sowie die Synthese von Nanopulver." />
            : <meta name="description" content="The activity of the Institute IME Process Metallurgically and Metal Recycling (Professor Dr.-Ing Dr. h.c. Bernd Friedrich)  consists of applied research and education/teaching in the fields of extractive metallurgy (pyrometallurgy and hydrometallurgy), metal refining and electrolysis, as well as recycling of metals and residues. IME-RWTH is also a leading institute in field of process design and optimization in terms of resources efficiencies with special focus on critical waste streams aiming to support the sustainability on Circular Economy. We are involved in production technologies of complex alloys under vacuum up to demo-scale and powder synthesis in nano-scale." />
          }
          {/* <meta name="description" content="The activity of the Institute IME Process Metallurgically and Metal Recycling (Professor Dr.-Ing Dr. h.c. Bernd Friedrich)  consists of applied research and education/teaching in the fields of extractive metallurgy (pyrometallurgy and hydrometallurgy), metal refining and electrolysis, as well as recycling of metals and residues. IME-RWTH is also a leading institute in field of process design and optimization in terms of resources efficiencies with special focus on critical waste streams aiming to support the sustainability on Circular Economy. We are involved in production technologies of complex alloys under vacuum up to demo-scale and powder synthesis in nano-scale." /> */}
        </Helmet>
        {/* <GlobalLangStateProvider> */}
        <globalLangStateContext.Provider value={this.state}>
          <HashRouter>
            <globalLangStateContext.Consumer>
              {({ language }) => (
                <PageLayout context={{ language }} />
              )}
            </globalLangStateContext.Consumer>
          </HashRouter>
        </globalLangStateContext.Provider>
        {/* </GlobalLangStateProvider> */}
      </div>
    )
  }
}

// const App = () => {
//   const [state, dispatch] = useLangGlobalState();
//   window.addEventListener( "storage", () => dispatch({ webText: (localStorage.getItem('language') === 'en') ? en : ge }) );
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
