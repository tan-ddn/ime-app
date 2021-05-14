import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import TeamGroup from '../Team/TeamGroup';

let intro = '<p>Here you find all employees working currently at the IME - "metallurgy and metal recycling" - ordered by their fields of work.</p><p>If you are searching for a proper contact person, you have the opportunity to get into contact directly per web form. An up to date list of all employees you will find here.</p><p>To get an overview on the institutes organisation and team, you can have a look at this flowchart. </p>';
let groups = [
    {
        'title': 'Direction of the Institute',
        'members': [
            {
                'name': 'Prof. Dr. Ing. Dr. h.c. Bernd Friedrich',
                'tel': '+49 241 80 95850',
                'fax': '+49 241 80 92154',
                'email': 'bfriedrich@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild12_id_5544.jpg',
                'url': '#'
            },
            {
                'name': 'Dr.-Ing. Alexander Birich',
                'tel': '+49 241 80 95852 / +49 160 99707 667',
                'fax': '+49 241 80 92154',
                'email': 'abirich@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild21_id_5538.jpg',
                'url': '#'
            }
        ]
    },
    {
        'title': 'Secretary',
        'members': [
            {
                'name': 'Debora Schnabel',
                'tel': '+49 241 80 95851',
                'fax': '+49 241 80 92154',
                'email': 'dschnabel@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/2020_11_23_11_3_id_3258.jpg',
                'url': '#'
            }
        ]
    },
    {
        'title': 'Scientific assistants (Postdocs)',
        'members': [
            {
                'name': 'Dr.-Ing. Fabian Diaz',
                'tel': '+49 241 80 95867',
                'fax': '+49 241 80 92154',
                'email': 'fdiaz@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/faebiaen2_id_5920.jpg',
                'url': '#'
            },
            {
                'name': 'Dr.-Ing. Semiramis Friedrich geb. Akbari',
                'tel': '+49 241 80 95977',
                'fax': '+49 241 80 92154',
                'email': 'sfriedrich@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild4_id_2594.jpg',
                'url': '#'
            },
            {
                'name': 'M. Sc. Ksenija Milicevic Neumann',
                'tel': '+49 241 80 90235',
                'fax': '+49 241 80 92154',
                'email': 'kmneumann@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/temp_id_5067.jpg',
                'url': '#'
            },
            {
                'name': 'Dr.-Ing. Elinor Rombach',
                'tel': '+49 241 80 90230',
                'fax': '+49 241 80 92154',
                'email': 'erombach@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild5_id_4157.jpg',
                'url': '#'
            },
            {
                'name': 'Priv. Doz. Dr.-Ing. habil. Srecko Stopic',
                'tel': '+49 241 80 95860',
                'fax': '+49 241 80 92154',
                'email': 'sstopic@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/stopic_id_3513.jpg',
                'url': '#'
            },
            {
                'name': 'Dr.-Ing. Peter von den Brincken',
                'tel': '+49 172 2527212',
                'fax': '+49 241 80 626229',
                'email': 'vdb@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild15_id_8657.jpg',
                'url': '#'
            }
        ]
    },
];

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            groups: groups
        }
    }    
    
    render() {
        return(
            <div className="team">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/team/RWTH-FB5-043-1920px.jpg'} transformY='-10%' overlay='dark'/>
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
                                        <h2 className="heading">Team</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-3">
                                                <figure>
                                                    <img src={process.env.PUBLIC_URL + '/img/teaem_2020_web_id_8598.jpg'} alt="IME Team" />
                                                    {/* <figcaption>Building of the IME</figcaption> */}
                                                </figure>
                                                </div>
                                                <div className="py-2 col-12 col-sm-9">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="staff" className="py-3">
                                        <h2 className="heading">Our Staff</h2>
                                        {this.state.groups.map((elm, index) => (
                                            <TeamGroup group={elm} />
                                        ))}
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