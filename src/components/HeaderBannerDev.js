import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';
import ReactPlayer from 'react-player/lazy';

export default class HeaderBannerDev extends ResponsiveComponent {
  render() {
    let tx = (this.props.transformX) ? this.props.transformX : 0;
    let ty = (this.props.transformY) ? this.props.transformY : 0;
    const imgStyle = {
      transform: 'translate('+tx+', '+ty+')'
    };
    // console.log(imgStyle);
    return (
        <div className="header-banner" id={this.props.id}>
          {this.props.greenLogo === true && <>
          <div className="slider-overlay">
            <div className="slider-overlay-wrap">
              <img src={process.env.PUBLIC_URL + '/img/home-slider/Logo_GreenMetallurgy.png'} alt="Green Metallurgy logo" />
            </div>
          </div>
          </>}
            <div className="wrapper">
                {/* <div className="image">
                  {this.props.overlay === 'dark' &&<>
                    <div className="overlay dark" />
                  </>}
                    <img src={this.props.img} alt={this.props.imgAlt} style={imgStyle} />
                </div> */}
                <div className="video">
                    <ReactPlayer 
                      url={process.env.PUBLIC_URL + '/vid/IME_Imagefilm_Master.mp4'} 
                      playing={true}
                      loop={true}
                      volume="0"
                      muted={true}
                      // playsinline={true}
                      width="100%"
                      height="100%"
                      style={{
                        'position': 'absolute',
                        'top': '-100%',
                        'right': '-100%',
                        'bottom': '-100%',
                        'left': '-100%',
                        'margin': 'auto',
                        // 'width': '100%',
                        // 'height': '100%',
                        'minWidth': '100%',
                        'minHeight': '100%',
                        'objectFit': 'cover',
                        'objectPosition': 'center'
                      }}
                    />
                </div>
            </div>
        </div>
    )
  }
}

HeaderBannerDev.defaultProps = {
  id: 'home-banner',
  img: process.env.PUBLIC_URL + '/img/home-slider/160316-IME-383_e.jpg',
  imgAlt: "Metallurgy",
  greenLogo: false
}