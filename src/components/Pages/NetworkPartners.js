import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
// import NewsSlider from '../News/NewsSlider';
import Box from '../Box';
// import '../Equipment/equipment.scss';

let intro = '<p>We have an extensive network of partners. These include in particular strategic partner universities with whom we keep a very intense and diverse collaboration. This can be seen especially in high cooperative publication activity, in jointly organized events such as workshops and conferences, as well as a regular involvement with IME in public funded projects.</p>';

let unis = [
    {
        id: 1,
        title: 'National Technical University of Athens',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/ntua_id_8109.jpg'
    },
    {
        id: 2,
        title: 'Donetsk Technical University',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/donetsk_id_5582.jpg'
    },
    {
        id: 3,
        title: 'University of Belgrade',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/university_of_b_id_8947.jpg'
    },
    {
        id: 4,
        title: 'University in Maribor',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/maeribor_id_1324.png'
    },
    {
        id: 5,
        title: 'Istanbul Technical University',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/istaenbul_id_5059.jpg'
    },
    {
        id: 6,
        title: 'Norwegian University of Science and Technology (NTNU)',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/unikooperation/ntnu_w_id_3627.png'
    }
];

export default class NetworkPartners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            unis: unis
        }
    }    
    
    render() {
        let boxContent = Array();
        unis.forEach((elm, index) => {
            boxContent[index] = {
                title: elm.title,
                image: elm.image,
                button: elm.button,
                buttonUrl: '/unidetails/' + elm.id,
                description: elm.description
            };
        });
        return(
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
                                        <h2 className="heading"> Uni Cooperation</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-12">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="topics" className="py-3">
                                        <h2 className="heading"> Uni Parnters</h2>
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