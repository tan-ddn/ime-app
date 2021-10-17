import React, { Component } from 'react';
// import '../Scss/box.scss';
import Db from '../../control/class.db';
import Box from '../Boxes/Box';
import NewsBox from '../Boxes/NewsBox';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';

export default class EventsBox extends ResponsiveComponent {
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
            data: Db.get('CalendarDate').then(res => res)
        };
    }

    componentDidMount() {
        Db.get('CalendarDate').then((res) => {
            this.setState({data: res})
        })
    }

    render() {
        let content = {
            title: 'Activities and Events',
            description: '',
            // image: process.env.PUBLIC_URL + '/img/calendar-1990453_1280.jpg'
        };
        let description = '';
        if (this.state.data.success) {
            let date = this.state.data.results[0];
            // console.log(date);
            description = '<h6><b>'+date.t_titel_eng+'</b></h6>';
            description += '<dl><dt>Category:</dt><dd class="text-capitalize">'+date.ty_termin_eng+'</dd>';
            description += '<dt>Information:</dt><dd>'+date.t_beschreibung_eng+'</dd>';
            description += '<dt>Date:</dt><dd>'+date.t_tag+'.'+date.t_monat+'.'+date.t_jahr+'</dd></dl>';
        }
        return (description == '') ? 'Loading...' : (
            <div className="">
                <NewsBox title={'Activities and Events'} height={this.props.height}>
                    {/* <SanitizedHTML html={description} /> */}
                    <div className="" dangerouslySetInnerHTML={{__html: description}} />
                </NewsBox>
            </div>
        )
    }
}