import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import NewsSlider from '../News/NewsSlider';
import Box from '../Box';
import '../Equipment/equipment.scss';

let intro = '<p>IME has a broad variety of modern equipment available. A virtual tour is being created at the moment. To inform yourself on a specific area, you can download our information brochures below. </p>';

const slides = [
    {
        title: 'Flyer',
        description: 'IME has a broad variety of modern equipment available. A virtual tour is being created at the moment. To inform yourself on a specific area, you can download our information brochures here.',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/ausstattung.png'
    },
    {
        title: 'IME (Introduction)',
        description: '',
        button: 'Download',
        buttonUrl: process.env.PUBLIC_URL + '/img/equipment/IME_Eng.pdf',
        image: process.env.PUBLIC_URL + '/img/equipment/IME_Eng.jpg'
    },
    {
        title: 'Vacuum Metallurgy',
        description: '',
        button: 'Download',
        buttonUrl: process.env.PUBLIC_URL + '/img/equipment/vacuum_flyer.pdf',
        image: process.env.PUBLIC_URL + '/img/equipment/vacuum_flyer.jpg'
    },
    {
        title: 'Recyclingmetallurgy',
        description: '',
        button: 'Download',
        buttonUrl: process.env.PUBLIC_URL + '/img/equipment/recyclingmetallurgy.pdf',
        image: process.env.PUBLIC_URL + '/img/equipment/recyclingmetallurgy.jpg'
    },
]

let equipment = [
    {
        id: 1,
        title: 'Process Metallurgy',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/lbo_abguss_img_id_1091.jpg'
    },
    {
        id: 2,
        title: 'Materials synthesis',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/img_2332_id_4632.jpg'
    },
    {
        id: 3,
        title: 'Metal Electrolysis',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/temp_id_2530.jpg'
    },
    {
        id: 4,
        title: 'Basics',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/mini_dto_id_2018.jpg'
    },
    {
        id: 5,
        title: 'Chemical Analysis',
        description: '',
        button: '',
        buttonUrl: '',
        image: process.env.PUBLIC_URL + '/img/equipment/neu_hd_elektron_id_3705.jpg'
    }
];

export default class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            equipment: equipment
        }
    }    
    
    render() {
        let boxContent = Array();
        equipment.forEach((elm, index) => {
            boxContent[index] = {
                title: elm.title,
                image: elm.image,
                button: elm.button,
                buttonUrl: '/equipment/' + elm.id,
                description: elm.description
            };
        });
        return(
            <div className="research">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/160224-IME-208.jpg'} transformY='0%' overlay=''/>
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
                                        <h2 className="heading">Flyer</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-7">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                    <div className="row">
                                                        <div className="py-3 col-12 col-sm-7">
                                                            <ul>
                                                                {slides.map((elm, index) => {
                                                                    if (index !== 0) {
                                                                        return (
<li><a href={elm.buttonUrl}>{elm.title}</a></li>
                                                                        )
                                                                    }
                                                                })}
                                                                
                                                                {/* <li><a href="#"> 	Vacuum Metallurgy</a></li>
                                                                <li><a href="#"> 	Recyclingmetallurgy</a></li> */}
                                                            </ul>
                                                        </div>
                                                        {/* <div className="py-3 col-12 col-sm-5">
                                                            <img src={process.env.PUBLIC_URL + '/img/equipment/ausstattung.png'} alt="IME Team" />
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="py-2 col-12 col-sm-5">
                                                    <div style={{'margin': '-15px 0'}}>
                                                    <NewsSlider slides={slides} className="equipment-slider" height="250px"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="topics" className="py-3">
                                        <h2 className="heading">Equipment</h2>
                                        <div className="">
                                            <div className="row">
                                                <div className="col-12 col-lg-4 d-flex">
                                                    <NewsSlider slides={slides} className="equipment-slider" height="400px"/>
                                                </div>
                                                {boxContent.map((elm, index) => (
                                                <div key={index} className="col-12 col-lg-4 d-flex">
                                                    <Box content={elm} type="equipment" linkTitle="1" classNames="equipment-cat-box rounded bg-darkblue0"/>
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