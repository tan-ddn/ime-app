import React from 'react';
import Db from '../../control/class.db';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import './history.scss';

class History extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            lang: 2,
            data: Db.get('HistoryTxt').then(res => res),
            timeline: [
                {
                    img: process.env.PUBLIC_URL + '/img/about/ernst_duerre.png',
                    title: 'Prof. Dr. phil. Ernst Friedrich Dürre',
                    date: '1872',
                    text: '<p>The origin of the IME Process Metallurgy and Metals Recycling falls into the initial years of the RWTH Aachen. During the foundation of the so-called Rheinisch-Westfälischen Polytechnischen Schule (Rhineland-Westphalia Polytechnical School) in 1870, a chair for mineralogy and metallurgy was established. In 1872 the so-called Lehrstuhl für Allgemeine und spezielle Hüttenkunde und Probierkunst (Chair for Common and Special Metallurgy and Fire Assaying) was extracted from that chair, under the charge of Professor Ernst Friedrich Dürre.</p>',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/wilhelm_borchers.png',
                    title: 'Prof. Dr. Dr.-Ing. h.c. Wilhelm Borchers',
                    date: '1898',
                    text: '<p>In 1898,  the extracted chair was again split up into the chair of Ferrous Metallurgy and Assaying, which was still under the charge of Ernst Friedrich Dürre and the Chair for Nonferrous Metallurgy,  and Blowpipe Fire Assaying, which was under the supervision of Professor Wilhelm Borchers until 1925. This chair was the predecessor for our IME. As Prof. Borchers took over the chair, he did not dispose of any laboratories or other rooms in order to process his research. Thus the first research laboratory atrium for electro-chemical and electricalmetallurgical investigations was provisionally set up in two empty cellars in the main building and the institute for metallurgy and technical chemistry.</p><p><img src="img/about/labor_2.png" alt="Lab Building"/>Based on the research achievements of Prof. Borchers in the field of transformation of amorphous carbon by metals and metalloids into graphite, the minister of education sanctioned the building of a new laboratory at the corner Malteserstrasse/Klosterbongart in 1901. This new laboratory Institut für Metallhüttenkunde und Elektrometallurgie, opened in 1902, was the first metallurgical research establishment in Germany. Today, you can still see its old façade next to the mining building in the Wüllnerstraße. In 1906 the university of aachen constructed a new complex of buildings, the Naumann Institute for the entire Metallurgy, in the Intzestraße.</p>',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/paul_roentgen.png',
                    title: 'Prof. Dr. h.c. Paul Röntgen',
                    date: '1925',
                    text: '<p>After the death of Prof. Borchers, Prof. Paul RÃ¶ntgen assumed control of the institute for 27 years (1925-1952). During his period of service, Prof. RÃ¶ntgen was a big achievement to the university. In addition to his supervision of the institute, he was president of the university from 1932 to 1934 and prorector from 1934 to 1937. He was the first president after the 2nd world war and he invested a lot of energy in the rebuilt and the reopening of the university.</p><p><img src="img/about/zerstoert.png" alt=""/>The institutes building itself was heavily damaged in April/May of 1944 due to the war, which made it impossible to continue the institutes business. Based on the rebuilt, which started in october 1945, the education and research programm was able to be reestablished in the new institute of metallurgy in 1949. During this period of rebuilt, the institutes business took place in temporarily arragned rooms in the undestroyed insitute of mining. Under the charge of Prof. RÃ¶ntgen, the main research programm was based on zinc and aluminium metallurgy, especially electrothermal and electrolytic processes as well as refining of aluminium.</p>',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/helmut_winternhager.png',
                    title: 'Prof. Dr.-Ing. Dr. h.c. Helmut Winterhager',
                    date: '1952',
                    text: '<p>After Prof. Röntgens resignation in 1952, Prof. Winterhager took over charges. His research work covered scientific investigations of the fundamentals in very different areas of nonferrous-metallurgy on the one hand and on the other hand problems that occured at that time in nonferrous extractive metallurgy and nonferrous metal manufacturing processes.</p><p><img src="img/about/vakuum_einrichtung.png" alt=""/>The fundamental research was concerned for example with the structure and properties of slags or metallurgical properties of ores or other basic materials. Additional dedication took place in the fields of plating and aqueous electrolysis. Furthermore did the institute turn its attention to new metallurgical fields of activity, mainly vaccum metallurgy and the use of plasma torches.</p><p><img src="img/about/institut_1960.png" alt="Institute in 1960"/>As well as his antecessor, Prof. Winterhager cared a lot about the universitys fate. He also was its president from 1959-1961 and contributed to important structural changes in this function. During his period of service, there were also some structural alterations. In the beginning of the sixties, the institutess building was extended and heightened.</p>',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/joachim_krueger.png',
                    title: 'Prof. Dr.-Ing. Joachim Krüger',
                    date: '1977',
                    text: '<p>In 1977 Prof. Joachim Krüger succeeded Prof. Winterhager in office. The first years of his work at the institute were characterised by the establishing of contact to the relevant industry with the objective of gaining third-party-funds for post-graduates as well as creating an animate relationship between training/ research and industrial experience. He was soon very successful. The funds gained by pub-lic research projects and by donations allowed to acquire important instruments for the scientific operations that are partly still in use today. In the last years of his service Prof. Krüger actively contributed to the reorganisa-tion of the course of studies \'Metallurgy and material science\'. In addition to tradi-tional primary metallurgy the recycling of residual and waste material increasingly became the main field of research aiming at the recovery of valuable substances and the reduction respectively the inertisation of the amount of waste that has to be deposited.</p>',
                },
                {
                    img: process.env.PUBLIC_URL + '/img/about/bernd_friedrich_id_6724.jpg',
                    title: 'Prof. Dr. Ing. Dr. h.c. Bernd Friedrich',
                    date: '1999',
                    text: '<p>In 1999 Prof. Friedrich was designated as the successor of Prof. Kruger. To approach the new generations to join the work of the institute, the department got the new name of "Process Metallurgy and Metal Recycling", but remained the old institute name.</p>',
                }
            ]
        };
    }
    
    componentDidMount() {
        this.changeLang();
        Db.get('HistoryTxt').then((res) => {
          this.setState({data: res});
        });
      }
    
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.webText !== prevProps.webText) {
          this.changeLang();
        }
      }
    
      changeLang() {
        if (localStorage.getItem('lang') === 'ge') {
            this.setState({lang: 1});
        } else {
            this.setState({lang: 2});
        }
    }

  render() {
    let timeline = this.state.timeline;
    let ids = [];
    if (this.state.data.success) {
        let data = this.state.data.results;
        //console.log(data);
        if (this.state.lang == 1) {
            ids = [16,17,18,19,20,28];
        } else {
            ids = [33,31,30,35,34,32];
        }
        timeline.forEach((elm, index) => {
            let obj = data.filter(e => e.id == ids[index]);
            elm.text = obj[0].txt;
        });
    }
    return (
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
                                    <img src={item.img} alt={item.title} />
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
                                <h5 className="title">Prof. Dr. phil. Ernst Friedrich Dürre</h5>
                                <div className="text" dangerouslySetInnerHTML={{__html: item.text}} />
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
                                <div className="" dangerouslySetInnerHTML={{__html: this.state.timeline[0].text}} />
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

History.defaultProps = {

}

export default withLangSwitchListener(History);