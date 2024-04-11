import React from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import './history.scss';
import { globalLangStateContext } from '../../UserContext';
import imeAPICalls from '../../imeAPICalls';

class History extends ResponsiveComponent {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);

        this.state = {
            lang: 2,
            data: {},
            timeline: [
                {
                    img: process.env.PUBLIC_URL + '/img/about/ernst_duerre.png',
                    date: '1872',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/wilhelm_borchers.png',
                    date: '1898',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/paul_roentgen.png',
                    date: '1925',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/helmut_winternhager.png',
                    date: '1952',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/joachim_krueger.png',
                    date: '1977',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/bernd_friedrich_id_6724.jpg',
                    date: '1999',
                }
            ]
        };
    }
    
    componentDidMount() {
        this.APICalls.get({ endpoint: 'Texts', meta: 'Historie' }).then(res => {
          this.setState({data: res});
        });
    }

  render() {
    if (!this.context.lang) return '';
    let timeline = this.state.timeline.slice();
    let ids = [];
    if (this.state.data.success) {
        let data = this.state.data.results;
        console.log(data);
        if (this.context.lang == 'ge') {
            ids = [16,17,18,19,20,28];
        } else {
            ids = [33,31,30,35,34,32];
        }
        timeline.forEach((elm, index) => {
            let obj = data.filter(e => e.id == ids[index]);
            elm.titel = obj[0].titel;
            elm.txt = obj[0].txt;
        });
        timeline.reverse();
    }
    return (timeline.length == 0) ? '' : (
        <div className="history" id={this.props.id}>
            <div className="timeline-wrapper">
                <div className="timeline-main">
                {timeline.map((item, index) => (
                    <div key={index} className="item">
                        <div className="timeline-date">
                            <div className="inner">
                                <div className="date">
                                    {item.date}
                                </div>
                                <div className="pic">
                                    <img src={item.img} alt={item.titel} />
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
                                <h5 className="title">{item.titel}</h5>
                                <div className="txt" dangerouslySetInnerHTML={{__html: item.txt}} />
                            </div>
                        </div>
                    </div>
                ))}
                    {/* <div className="item">
                        <div className="timeline-date">
                            <div className="inner">
                            <div className="date">
                                1887
                            </div>
                            <div className="pic">
                                <img src={this.state.timeline[0].img} alt={this.state.timeline[0].titel} />
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
                                <div className="" dangerouslySetInnerHTML={{__html: this.state.timeline[0].txt}} />
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
                    </div> */}
                </div>
            </div>
        </div>
    )
  }
}
History.contextType = globalLangStateContext;
History.defaultProps = {

}

export default withLangSwitchListener(History);