import React, { Component } from 'react';
// import '../Scss/box.scss';
import Box from '../Box';

export default class EventsBox extends Box {
    constructor(props) {
        super(props);

        this.state = {
            content: {
                title: 'Activities and Events',
                description: '<ul><li>27.09.2021 Industrial Seminar</li><li>10.08.2021 Basic Course Exam</li></ul>',
                button: 'Read More &#187;',
                date: '',
                image: process.env.PUBLIC_URL + '/img/calendar-1990453_1280.jpg'
            }
        };
    }

    componentDidMount() {
    }
}