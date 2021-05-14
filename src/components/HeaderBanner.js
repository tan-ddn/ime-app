import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';

export default class HeaderBanner extends ResponsiveComponent {
  render() {
    let tx = (this.props.transformX) ? this.props.transformX : 0;
    let ty = (this.props.transformY) ? this.props.transformY : 0;
    const imgStyle = {
      transform: 'translate('+tx+', '+ty+')'
    };
    // console.log(imgStyle);
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
                  {this.props.overlay == 'dark' &&<>
                    <div className="overlay dark" />
                  </>}
                    <img src={this.props.img} alt={this.props.imgAlt} style={imgStyle} />
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