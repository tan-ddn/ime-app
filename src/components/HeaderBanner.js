import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';

export default class HeaderBanner extends ResponsiveComponent {
  render() {
    return (
        <div className="header-banner" id={this.props.id}>
          {this.props.greenLogo == true && <>
          <div className="slider-overlay">
            <div className="slider-overlay-wrap">
              <img src={process.env.PUBLIC_URL + '/img/home-slider/Logo_GreenMetallurgy.png'} alt="Green Metallurgy logo" />
            </div>
          </div>
          </>}
            <div className="wrapper">
                <div className="image">
                    <img src={this.props.img} alt={this.props.imgAlt} />
                </div>
            </div>
        </div>
    )
  }
}

HeaderBanner.defaultProps = {
  id: 'home-banner',
  img: process.env.PUBLIC_URL + '/img/home-slider/160316-IME-383_e.jpg',
  imgAlt: "Metallurgy",
  greenLogo: false
}