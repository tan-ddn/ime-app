import React, { Component } from 'react';
// import '../Scss/box.scss';
import Db from '../../control/class.db';
import Box from '../Boxes/Box';
import NewsBox from '../Boxes/NewsBox';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import Slider from 'react-slick';

class EventsBox extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            // content: {
                // title: 'Activities and Events',
                // description: '<ul><li>27.09.2021 Industrial Seminar</li><li>10.08.2021 Basic Course Exam</li></ul>',
                // button: 'Read More &#187;',
                // date: '',
                // image: process.env.PUBLIC_URL + '/img/calendar-1990453_1280.jpg'
            // }
            data: Db.get({action: 'CalendarDate'}).then(res => res)
        };
    }

    componentDidMount() {
        Db.get({action: 'CalendarDate'}).then((res) => {
            this.setState({data: res})
        })
    }

    render() {
        const settings = {
            centerMode: true,
            centerPadding: '0px',
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            dots: true,
            slidesPerRow: 1
        };
        let content = {
            title: 'Activities and Events',
            description: '',
            // image: process.env.PUBLIC_URL + '/img/calendar-1990453_1280.jpg'
        };
        let description = '';
        let slider = null;
        if (this.state.data.success) {
            // let date = this.state.data.results[0];
            let date = this.state.data.results;
            // console.log(date);
            // description = '<h6><b>'+date.t_titel_eng+'</b></h6>';
            // description += '<dl><dt>Category:</dt><dd class="text-capitalize">'+date.ty_termin_eng+'</dd>';
            // description += '<dt>Information:</dt><dd>'+date.t_beschreibung_eng+'</dd>';
            // description += '<dt>Date:</dt><dd>'+date.t_tag+'.'+date.t_monat+'.'+date.t_jahr+'</dd></dl>';
            slider = (
                <Slider {...settings}>
                    {date.map((item, index) => {
                        if (localStorage.getItem('lang') === 'ge') {
                            description = '<h6><b>'+item.t_titel+'</b></h6>';
                            description += '<dl><dt>Terminart:</dt><dd class="text-capitalize">'+item.ty_termin+'</dd>';
                            description += '<dt>Beschreibung:</dt><dd>'+item.t_beschreibung+'</dd>';
                            description += '<dt>Datum:</dt><dd>'+item.t_tag+'.'+item.t_monat+'.'+item.t_jahr+'</dd></dl>';
                        } else {
                            description = '<h6><b>'+item.t_titel_eng+'</b></h6>';
                            description += '<dl><dt>Category:</dt><dd class="text-capitalize">'+item.ty_termin_eng+'</dd>';
                            description += '<dt>Information:</dt><dd>'+item.t_beschreibung_eng+'</dd>';
                            description += '<dt>Date:</dt><dd>'+item.t_tag+'.'+item.t_monat+'.'+item.t_jahr+'</dd></dl>';
                        }
                        
                        return (
                        <div key={index} className="slide-content">
                            <div className="" dangerouslySetInnerHTML={{__html: description}} />
                        </div>
                    )})}
                </Slider>);
        }
        return (description == '') ? 'Loading...' : (
            <div className="">
                <NewsBox classNames="event-slider" title={this.props.webText.news.activities_events} height={this.props.height}>
            {/* <div id="events" className={"events-box news-box event-slider " + this.props.classNames} style={{height: `${this.props.height}`}}>
                <div className="events-wrapper">
                    <h5 className="box-title">
                        {this.props.webText.news.activities_events}
                    </h5> */}
                    {/* <SanitizedHTML html={description} /> */}
                    {/* <div className="" dangerouslySetInnerHTML={{__html: description}} /> */}
                    {slider}
                </NewsBox>
                {/* </div> */}
            </div>
        )
    }
}
export default withLangSwitchListener(EventsBox);