import React from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './history.scss';

export default class History extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            timeline: [
                {
                    img: process.env.PUBLIC_URL + '/img/about/ernst_duerre.png',
                    title: 'Prof. Dr. phil. Ernst Friedrich Dürre',
                    date: '1872',
                    text: '',
                }
            ]
        };
    }

  render() {
    return (
        <div className="history" id={this.props.id}>
            <div className="timeline-wrapper">
                <div className="timeline-main">
                    <div className="item">
                        <div className="timeline-date">
                            <div className="inner">
                            <div className="date">
                                1887
                            </div>
                            <div className="pic">
                                <img src={this.state.timeline[0].img} alt={this.state.timeline[0].title} />
                            </div>
                            </div>
                        </div>
                        <div className="timeline-marker">
                            <div className="icon">
                            <FontAwesomeIcon icon="university" />
                            </div>
                        </div>
                        <div className="timeline-content">
                            <div className="inner">
                                <h6 className="title">Prof. Dr. phil. Ernst Friedrich Dürre</h6>
                                <p>The origin of the IME Process Metallurgy and Metals Recycling falls into the initial years of the RWTH Aachen. During the foundation of the so-called Rheinisch-Westfälischen Polytechnischen Schule (Rhineland-Westphalia Polytechnical School) in 1870, a chair for mineralogy and metallurgy was established. In 1872 the so-called Lehrstuhl für Allgemeine und spezielle Hüttenkunde und Probierkunst (Chair for Common and Special Metallurgy and Fire Assaying) was extracted from that chair, under the charge of Professor Ernst Friedrich Dürre.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="timeline-date">
                            <div className="inner">
                            <div className="date">
                                1887
                            </div>
                            <div className="pic">
                                <img src={this.state.timeline[0].img} alt={this.state.timeline[0].imgAlt} />
                            </div>
                            </div>
                        </div>
                        <div className="timeline-marker">
                            <div className="icon">
                            <FontAwesomeIcon icon="university" />
                            </div>
                        </div>
                        <div className="timeline-content">
                            <div className="inner">
                                <h6 className="title">Prof. Dr. phil. Ernst Friedrich Dürre</h6>
                                <p>The origin of the IME Process Metallurgy and Metals Recycling falls into the initial years of the RWTH Aachen. During the foundation of the so-called Rheinisch-Westfälischen Polytechnischen Schule (Rhineland-Westphalia Polytechnical School) in 1870, a chair for mineralogy and metallurgy was established. In 1872 the so-called Lehrstuhl für Allgemeine und spezielle Hüttenkunde und Probierkunst (Chair for Common and Special Metallurgy and Fire Assaying) was extracted from that chair, under the charge of Professor Ernst Friedrich Dürre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

History.defaultProps = {

}