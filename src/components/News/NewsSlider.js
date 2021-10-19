import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './news-slider.scss';
import SanitizedHTML from 'react-sanitized-html';
import StringHandle from '../../utility/stringHandle';
import withLangSwitchListener from '../Languages/LangSwitchListener';

// const slides = [
//     {
//         id: 1,
//         titel_eng: 'IME Aktuell - Current Issue',
//         text_eng: 'The current issue of the IME Aktuell, published twice every year, is online now. Some promotional topics are presented, ...',
//         button: 'Read More',
//         link: '',
//         pic: 'ime_aektuell_jp_id_7224.jpg'
//     },
//     {
//         id: 2,
//         titel_eng: 'Joint research with a safety distance of 1500 km',
//         text_eng: 'In fulfillment of a DAAD project with The University of Belgrade, which includes mutual research and scientist exchange, ...',
//         button: 'Read More',
//         link: '',
//         pic: 'dominic_news_id_3840.jpg'
//     },
//     {
//         id: 3,
//         titel_eng: 'Improved exhaust gas cleaning by cyclone',
//         text_eng: 'Last week, the institute\'s own exhaust gas purification plant was upgraded. In this context, ...',
//         button: 'Read More',
//         link: '',
//         pic: 'zyklon_id_2211.jpg'
//     },
// ]

class NewsSlider extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let classText = "news-slider " + this.props.className;
    // console.log(this.props.slides);
    let Slides = [{titel_eng: 'Loading...'}]
    if (this.props.slides) Slides = this.props.slides;
    return (
        <div id="" className={classText} style={{height: `${this.props.height}`, margin: '15px 0'}}>
            <Slider autoplay={4000}
                classNames={{
                    previousButton: 'hidden',
                    nextButton: 'hidden',
                }}
            >
                {Slides.map((item, index) => {
                // let textEngArray = item.text_eng.split(' ', 18);
                // let textEng = textEngArray.join(' ');
                let title = item.titel_eng;
                let text = StringHandle.extract(item.text_eng, 18);
                let image = process.env.PUBLIC_URL + '/img/news/' + item.pic;
                if (localStorage.getItem('lang') === 'ge') {
                    title = item.titel;
                    text = StringHandle.extract(item.text, 18);
                }
                return (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${image}') no-repeat center center` }}>
					<div className="inner">
						<h1 className="title">{title}</h1>
						{/* <p className="article-text" dangerouslySetInnerHTML={{__html: sanitizeHtml(textEng)+' ...'}} /> */}
                        <SanitizedHTML className="article-text" html={ text+' ...' } />
                        <Link to={"/news#"+item.id} className="btn btn-primary" >
                            {this.props.webText.button.read_more}
                            {/* {item.button} */}
                        </Link>
					</div>
				</div>
			    )}
                )}
            </Slider>
        </div>
    )
  }
}
export default withLangSwitchListener(NewsSlider);