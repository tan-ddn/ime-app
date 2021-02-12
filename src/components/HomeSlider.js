import React, { Component } from 'react';

export default class MainContent extends Component {
  render() {
    return (
        <div className="" id="home-slider">
          <div className="slider-overlay">
            <div className="slider-overlay-wrap">
              <img src={process.env.PUBLIC_URL + '/img/home-slider/Logo_GreenMetallurgy.png'} alt="" />
            </div>
          </div>
            <div className="wrapper">
                <div className="image">
                    <img src={process.env.PUBLIC_URL + '/img/home-slider/160316-IME-383_e.jpg'} alt="" />
                </div>
            </div>
        </div>
    )
  }
}