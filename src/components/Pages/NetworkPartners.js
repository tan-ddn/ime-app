import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
// import NewsSlider from '../News/NewsSlider';
import Box from '../Boxes/Box';
import Db from '../../control/class.db';
import withLangSwitchListener from '../Languages/LangSwitchListener';
// import '../Equipment/equipment.scss';

let intro_eng = '<p>We have an extensive network of partners. These include in particular strategic partner universities with whom we keep a very intense and diverse collaboration. This can be seen especially in high cooperative publication activity, in jointly organized events such as workshops and conferences, as well as a regular involvement with IME in public funded projects.</p>';
let intro = '<p>Wir pflegen ein umfangreiches Netzwerk an Partnern. Hierzu gehören insbesondere strategische Partneruniversitäten, mit denen eine sehr intensive und vielfältige Zusammenarbeit gelebt wird.  Dies zeigt sich insbes. an reger kooperativer Publikationsaktivität, an gemeinsam organisierten Veranstaltungen wie Workshops und Konferenzen sowie an einer regelmäßigen Einbindung des IME in öffentlich geförderte Projekte.</p>';

// let unis = [
//     {
//         id: 1,
//         title: 'National Technical University of Athens',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/ntua_id_8109.jpg'
//     },
//     {
//         id: 2,
//         title: 'Donetsk Technical University',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/donetsk_id_5582.jpg'
//     },
//     {
//         id: 3,
//         title: 'University of Belgrade',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/university_of_b_id_8947.jpg'
//     },
//     {
//         id: 4,
//         title: 'University in Maribor',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/maeribor_id_1324.png'
//     },
//     {
//         id: 5,
//         title: 'Istanbul Technical University',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/istaenbul_id_5059.jpg'
//     },
//     {
//         id: 6,
//         title: 'Norwegian University of Science and Technology (NTNU)',
//         description: '',
//         button: '',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/unikooperation/ntnu_w_id_3627.png'
//     }
// ];

class NetworkPartners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // unis: unis
            unis: Db.get({action: 'UniCoop', id: -1}).then(res => res)
        }
    }    

    componentDidMount() {
        Db.get({action: 'UniCoop', id: -1}).then((res) => {
            this.setState({unis: res});
        });
    }
    
    render() {
        let boxContent = Array();
        let unis = [];
        if (this.state.unis.success) {
            unis = this.state.unis.results;
            // console.log(unis);
            unis.forEach((elm, index) => {
                boxContent[index] = {
                    title_eng: elm.universityname,
                    title: elm.universityname,
                    image: process.env.PUBLIC_URL + '/img/unikooperation/' + elm.universitypic,
                    button: '',
                    buttonUrl: '/unidetails/' + elm.id,
                };
            });
        }
        return unis.length == 0 ? 'Loading...' : (
            <div className="network">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/unikooperation/160210-IME-013.jpg'} transformY='13%' overlay=''/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div id="intro" className="py-3">
                                        <h2 className="heading">{(localStorage.getItem('lang') === 'ge') ? 'Uni Kooperation' : 'Uni Cooperation'}</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-12">
                                                    <div className="" dangerouslySetInnerHTML={{__html: (localStorage.getItem('lang') === 'ge') ? intro : intro_eng}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="topics" className="py-3">
                                        <h2 className="heading"> Uni Partners</h2>
                                        <div className="">
                                            <div className="row">
                                                {boxContent.map((elm, index) => (
                                                <div key={index} className="col-12 col-lg-4 d-flex">
                                                    <Box content={elm} type="equipment" linkTitle="1" classNames="uni-logo-box rounded bg-darkblue0"/>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}

export default withLangSwitchListener(NetworkPartners);