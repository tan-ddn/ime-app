import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";
import PublicationTable from '../Publications/PublicationTable';
import '../Publications/publications.scss';

let intro = '<dl><dt>Job:</dt><dd>Professor</dd><dt>Topic:</dt><dd>Head of the institute</dd></dl>';
let groups = [
    {
        'title': 'Direction of the Institute',
        'members': [
            {
                'id': 29,
                'name': 'Prof. Dr. Ing. Dr. h.c. Bernd Friedrich',
                'job': 'Professor',
                'topicList': 'Head of the institute',
                'room': 'R 108',
                'tel': '+49 241 80 95850',
                'fax': '+49 241 80 92154',
                'email': 'bfriedrich@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild12_id_5544.jpg',
                'url': '#'
            },
            {
                'id': 243,
                'name': 'Dr.-Ing. Alexander Birich',
                'job': 'Chief Engineer',
                'topic': 'Electronic Scrap Recycling',
                'topicUrl': '',
                'topicList': '<ul><li>Hydrometallurgical Processing and Recycling</li></ul>',
                'supervision': '<ul><li>Practical course: Process characterization, Process Metallurgy</li><li>Course: Metallurgical Engineering (English)</li></ul>',
                'room': 'R 110',
                'tel': '+49 241 80 95852 / +49 160 99707 667',
                'fax': '+49 241 80 92154',
                'email': 'abirich@ime-aachen.de',
                'img': process.env.PUBLIC_URL + '/img/team/bild21_id_5538.jpg',
                'url': '#'
            }
        ]
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

class TeamProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            intro: intro,
            groups: groups,
            publications: publications
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = id => {
        // console.log(id);
        this.setState({id: id});
    }
    
    render() {
        let profileId = this.props.match.params.id;
        const profile = this.state.groups[0].members.find(elm => elm.id == profileId);
        // console.log(profile);
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
                                        {/* {this.state.id} */}
                                        <h2 className="heading">Team: Direction of the institute</h2>
                                        <div className="intro-wrap p-4 bg-grey text-left">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-2">
                                                    <div className="profile-img">
                                                    <img src={profile.img} alt="IME Team" />
                                                    </div>
                                                </div>
                                                <div className="py-2 col-12 col-sm-10">
                                                    <h4>{profile.name}</h4>
                                                    <div className="row">
                                                        {/* <div className="py-2 col-12 col-sm-4" dangerouslySetInnerHTML={{__html: this.state.intro}} /> */}
                                                        <div className="py-2 col-12 col-sm-6">
                                                            <dl>
                                                                <dt>Job:</dt>
                                                                <dd>{profile.job}</dd>
                                                            </dl>
                                                            <dl>
                                                                <dt>Topic: <a href={profile.topicUrl}>{profile.topic}</a></dt>
                                                                <dd dangerouslySetInnerHTML={{__html: profile.topicList}} />
                                                            </dl>
                                                            {profile.supervision &&
                                                                    <dl><dt>Supervision:</dt><dd dangerouslySetInnerHTML={{__html: profile.supervision}} /></dl>
                                                                }
                                                        </div>
                                                        <div className="py-2 col-12 col-sm-6">
                                                        <p><b>Contact:</b></p>
                                                        <p>IME Metallurgische Prozesstechnik und Metallrecycling<br/>
                                                        RWTH Aachen<br/>
                                                        Intzestraße 3<br/>
                                                        D-52056</p>
                                                        {/* </div>
                                                        <div className="py-2 col-12 col-sm-4"> */}
                                                            <table border="0">
                                                                <tbody>
                                                                <tr>
                                                                    <td style={{width:'24%'}}>Room:</td>
                                                                    <td>{profile.room}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Phone:</td>
                                                                    <td>{profile.tel}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Fax:</td>
                                                                    <td>{profile.fax}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email: </td>
                                                                    <td><a href={"mailto:"+profile.email}>{profile.email}</a></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="publications" className="py-3">
                                        <h2 className="heading">Publications</h2>
                                        <div className="row">
                                            <div className="col-8"></div>
                                            <div className="col-4">
                                                <div className="publication-links">
                                                    <div className="pl-wrap">
                                                        <a href="https://www.scopus.com/authid/detail.uri?authorId=55533038900" target="_blank" rel="noopener noreferrer">
                                                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_scopus.png'} alt="Scopus" />
                                                        </a>
                                                    </div>
                                                    <div className="pl-wrap">
                                                        <a href="https://scholar.google.de/citations?view_op=list_works&hl=de&user=DeG7EvwAAAAJ" target="_blank" rel="noopener noreferrer">
                                                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_google_scholar.png'} alt="Google Scholar" />
                                                        </a>
                                                    </div>
                                                    <div className="pl-wrap">
                                                        <a href="https://www.researchgate.net/profile/Bernd_Friedrich" target="_blank" rel="noopener noreferrer">
                                                        <img src={process.env.PUBLIC_URL + '/img/icons/rg_logo.png'} alt="Research Gate" />
                                                        </a>
                                                    </div>
                                                    <div className="pl-wrap">
                                                        <a href="https://orcid.org/0000-0002-2934-2034" target="_blank" rel="noopener noreferrer">
                                                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_orcid.png'} alt="Orcid" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <PublicationTable thead="1" publications={this.state.publications}/>
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
export default withRouter(TeamProfile);