import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './team.scss';

export default class TeamCarousel extends Component {
    
  render() {
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
    };
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 2
    // };
    return (
        <div id="" className="team-carousel" style={{height: `${this.props.height}`}}>
            <Slider {...settings}>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
                <div className=" ">
                    <img src={process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'} alt="" />
                </div>
            </Slider>
        </div>
    )
  }
}