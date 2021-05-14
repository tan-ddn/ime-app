import React, { Component } from 'react';
import './Scss/box.scss';
import Slider from "react-slick";

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {
        let classText = "events-box " + this.props.classNames;
        // console.log(classText);
        let imageClass = "events-img " + this.props.image;
    
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            arrows: false
        }
    
        return (
            <div id="events" className={classText} style={{height: `${this.props.height}`}}>
                <div className="events-wrapper">
                    {this.state.content.title
                    ? this.props.titleSize === 'small'
                        ? <h6 className="box-title" dangerouslySetInnerHTML={{__html: this.state.content.title}} />
                        : <h5 className="box-title" dangerouslySetInnerHTML={{__html: this.state.content.title}} />
                    : ''
                    }
                    {!Array.isArray(this.state.content.image)
                    ? <div className={imageClass}>
                        <img src={this.state.content.image} alt="" />
                    </div>
                    : 
                    <Slider {...settings} className="box-img-slider">
                            {this.state.content.image.map((item, index) => (
                                <div key={index} className="slide-img partner-logo" >
                                    <img src={item} alt="" />
                                </div>
                            ))}
                    </Slider>
                    }
                    <div className="events-sum" dangerouslySetInnerHTML={{__html: this.state.content.description}} />
                    <a className="anchor-style1" href="#" dangerouslySetInnerHTML={{__html: this.state.content.button}} />
                    {this.state.content.date !== '' &&
                        <div className="events-date" dangerouslySetInnerHTML={{__html: this.state.content.date}} />
                    }
                </div>
            </div>
        )
    }
}