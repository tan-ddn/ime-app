import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import HomeSlider from './components/HomeSlider';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import FacultyStage from './components/FacultyStage';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import LayoutFormat from './components/LayoutFormat';

class App extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "./layoutFormat.js";
  //   script.async = true;
  //   document.body.appendChild(script)
  // }
  
  render() {
    return (
      // <div id='wrapper'>
      <div>
          <Header/>
          {/* <HeaderNav/> */}
          <div className="home">
            <HomeSlider/>
            <div className="d-flex justify-content-between container sidebar-right0">
            {/* <LeftSidebar/> */}
            <div id="" role="article" className="main-content">
              {/* <FacultyStage/> */}
              <div id="wrapper-2-outer0">
                <div id="wrapper">
                  {/*googleon: all*/}
                  <div className="">
                    <MainContent/>
                  </div>
                  {/* <p className="to-top-link">
                    <a href="#">top</a>
                  </p> */}
                </div>
              </div>
            </div>
            {/* <RightSidebar/> */}
            </div>
            
          </div>
          <Footer/>
          {/* <LayoutFormat/> */}
      </div>
    )
  }
}

export default App;
