import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './team.scss';

export default class TeamCarousel extends Component {
    
  render() {
    const images = [
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/bild11_id_7665.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/bild12_id_5544.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/georg_1_id_7282.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/bild5_id_2960.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/christin_id_5633.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/bild4_id_2594.jpg'
        },
        {
            name: '',
            image: process.env.PUBLIC_URL + '/img/team/christiaen_dert_id_2476.jpg'
        }
    ];
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        // autoplay: false,
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
                {images.map((person, index) => (
                <div key={index} className="team-img-wrap">
                    <div className="team-img" style={{ backgroundImage: `url('${person.image}')`}}>
                    {/* <img src={process.env.PUBLIC_URL + '/img/team/.jpg'} alt="" /> */}
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    )
  }
}