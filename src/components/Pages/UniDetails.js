import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { Link, useHistory, withRouter } from "react-router-dom";
import Box from '../Boxes/Box';
import PublicationTable from '../Publications/PublicationTable';
import '../Publications/publications.scss';
import Db from '../../control/class.db';
import ProjectsAndEvents from '../UniCoop/ProjectsAndEvents';

let intro = '<p></p>';
let unis = [
    {
        'id': 1,
        'uni': 'National Technical University of Athens',
        'externalUrl': 'http://www.metal.ntua.gr/index.pl/labs_en_metallurgy',
        'persons': [
            {
                'id': 1,
                'title': 'Ioannis Paspaliaris',
                'image': process.env.PUBLIC_URL + '/img/unikooperation/paespaeliaeris_id_6965.jpg'
            },
            {
                'id': 2,
                'title': 'Dimitrios Panias',
                'image': process.env.PUBLIC_URL + '/img/unikooperation/paeniaes_new_id_4126.jpg'
            },
            {
                'id': 3,
                'title': 'Efhtymios Balomenos',
                'image': process.env.PUBLIC_URL + '/img/unikooperation/efthymios_baelo_id_3891.jpg'
            },
        ]
    },
    
];
let ppse = [
    {
        'id': 1,
        'title': 'DAAD-Project "Novel designs of synthesis for tailoring the ordered structures of multicomponent metal oxides as uniform coatings of activated titanium anodes"',
        'options': 'Project',
        'university': 'National Technical University of Athens',
        'period': '2017-2018',
        'website': '',
    },
    {
        'id': 2,
        'title': ' 	Organisation of the Second ERES 2017 Conference',
        'options': 'Conference',
        'university': 'National Technical University of Athens',
        'period': '2017',
        'website': 'http://eres2017.eresconference.eu',
    },
    {
        'id': 3,
        'title': ' 	ERASMUS Exchange Program',
        'options': 'Cooperation',
        'university': 'National Technical University of Athens',
        'period': '',
        'website': 'http://www.metal.ntua.gr/index.pl/labs_en_metallurgy',
    },
    {
        'id': 4,
        'title': 'EU REDMUD',
        'options': 'Project',
        'university': 'National Technical University of Athens',
        'period': '',
        'website': 'http://etn.redmud.org/',
    },
    {
        'id': 5,
        'title': 'EU EURARE',
        'options': 'Project',
        'university': 'National Technical University of Athens',
        'period': '',
        'website': 'http://www.eurare.eu/',
    },
];
let publications = [
    {
        'year': '2021',
        'tag': 'article in scientific journal',
        'title': ' 	Synergism Red Mud Acid Mine Drainage as a Sustainable Solution for Neutralizing and Immobilizing Hazardous Elements',
        'meta': 'Metals 2021, 11, 620. https://doi.org/10.3390/met11040620',
        'authors': 'Hugo Lucas, Srecko Stopic, Buhle Xakalashe, Bernd Friedrich, Sehliso Ndlovu'
    },
    {
        'year': '2021',
        'tag': 'article in scientific journal',
        'title': 'Early-Stage Recovery of Lithium from Tailored Thermal Conditioned Black Mass Part I: Mobilizing Lithium via Supercritical CO2-Carbonation',
        'meta': 'Metals 2021, 11(2), 177, https://doi.org/10.3390/met11020177',
        'authors': 'Lilian Schwich geb. Peters, Tom Schubert, Bernd Friedrich'
    },
    {
        'year': '2021',
        'tag': 'article in scientific journal',
        'title': 'Use of Treated Non‐Ferrous Metallurgical Slags as Supplementary Cementitious Materials in Cementitious Mixtures',
        'meta': 'Appl. Sci. 2021, 11, 4028 https://doi.org/10.3390/app11094028',
        'authors': 'Asghar Gholizadeh Vayghan, Liesbeth Horckmans, Ruben Snellings, Arne Peys, Priscilla Teck, Jürgen Maier, Bernd Friedrich, Katarzyna Klejnowska'
    },
]

class UniDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            // unis: unis,
            // ppse: ppse,
            publications: publications,
            unis: Db.get('UniCoop', this.props.match.params.id).then(res => res),
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        Db.get('UniCoop', id).then((res) => {
            this.setState({unis: res});
        });
    }
    
    render() {
        // let uniId = this.props.match.params.id;
        // const uni = this.state.unis.find(elm => elm.id == uniId);
        let uni = null;
        if (this.state.unis.success) {
            uni = this.state.unis.results[0];
            console.log(uni);
            uni.persons = [
                {
                    'title': uni.firstprofessorname,
                    'image': process.env.PUBLIC_URL + '/img/unikooperation/' + uni.pic1
                },
                {
                    'title': uni.secondprofessorname,
                    'image': process.env.PUBLIC_URL + '/img/unikooperation/' + uni.pic2
                },
                {
                    'title': uni.thirdprofessorname,
                    'image': process.env.PUBLIC_URL + '/img/unikooperation/' + uni.pic3
                },
            ]
        }
        return (uni == null) ? 'Loading...' : (
            <div className="uni-details">
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
                                        {/* {this.state.id} */}
                                        <h2 className="heading"><Link className="d-inline-block " to="/network">Network &amp; Partners</Link> <span className="text-dark">&#187;</span> <a className="d-inline-block" rel="noopener noreferrer" target="_blank" href={uni.externalUrl}>{uni.uni}</a></h2>
                                                {/* <div className="py-2 col-12 col-sm-12" dangerouslySetInnerHTML={{__html: this.state.intro}} /> */}
                                        <div className=" row">
                                            <div className="col-12 col-sm-12">
                                                <div className="row justify-content-center">
                                                {uni.persons.map((elm, index) => (
                                                    <div key={index} className="py-20 col-12 col-sm-auto">
                                                        <Box content={elm} type="equipment" classNames="uni-person rounded bg-darkblue0" titleSize="small"/> 
                                                    </div>
                                                ))}
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-sm-7">
                                                <h4 className="box-title">Public Projects and Special Events </h4>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div id="project-list" className="py-3">
                                        <h2 className="heading">Public Projects and Special Events </h2>
                                        <div className="row justify-content-center publications">
                                            <div className="col-12">
                                                <ProjectsAndEvents id={this.props.match.params.id} />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="publications" className="py-3">
                                        <h2 className="heading">Joint Publications</h2>
                                        {/* <PublicationTable thead="1" publications={this.state.publications} /> */}
                                        <PublicationTable thead="1" uniId={this.props.match.params.id} />
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
export default withRouter(UniDetails);