import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './news-slider.scss';

const slides = [
    {
        title: 'IME Aktuell - Current Issue',
        description: 'The current issue of the IME Aktuell, published twice every year, is online now. Some promotional topics are presented, ...',
        button: 'Read More',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/news/ime_aektuell_jp_id_7224.jpg'
    },
    {
        title: 'Joint research with a safety distance of 1500 km',
        description: 'In fulfillment of a DAAD project with The University of Belgrade, which includes mutual research and scientist exchange, ...',
        button: 'Read More',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/news/dominic_news_id_3840.jpg'
    },
    {
        title: 'Improved exhaust gas cleaning by cyclone',
        description: 'Last week, the institute\'s own exhaust gas purification plant was upgraded. In this context, ...',
        button: 'Read More',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/news/zyklon_id_2211.jpg'
    },
]

export default class NewsSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        slides: this.props.slides
    }
  }

  render() {
    let classText = "news-slider " + this.props.className;

    return (
        <div id="" className={classText} style={{height: `${this.props.height}`, margin: '15px 0'}}>
            <Slider autoplay={4000}
                classNames={{
                    previousButton: 'hidden',
                    nextButton: 'hidden',
                }}
            >
                {this.state.slides.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}>
					<div className="inner">
						<h1 className="title">{item.title}</h1>
						<p className="article-text">{item.description}</p>
                        <a href={item.buttonUrl} className="btn btn-primary" >
                            {item.button}
                        </a>
					</div>
				</div>
			))}
            </Slider>
        </div>
    )
  }
}