import React, { Component } from 'react';
import '../Scss/box.scss';

export default class EventsBox extends Component {
  render() {
    return (
        <div id="events" className="events-box" style={{height: `${this.props.height}`}}>
            <div className="events-wrapper">
                <h5 className="box-title">Activities and Events</h5>
                <div className="events-img">
                    <img src={process.env.PUBLIC_URL + '/img/calendar-1990453_1280.jpg'} alt="" />
                </div>
                <div className="events-sum">
                    <ul>
                        <li>27.09.2021 Industrial Seminar</li>
                        <li>10.08.2021 Basic Course Exam</li>
                    </ul>
                </div>
                <a className="anchor-style1" href="">Read More &#187;</a> 
            </div>
        </div>
    )
  }
}