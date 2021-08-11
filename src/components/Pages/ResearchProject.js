import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { Link, useHistory, withRouter } from "react-router-dom";
import PublicationTable from '../Publications/PublicationTable';
import '../Publications/publications.scss';
import ResearchDetails from '../Research/ResearchDetails';
import ProjectList from '../Research/ProjectList';
import Db from '../../control/class.db';

let intro = '<p>The IME pursues the objective to use the high potential of WEEE as a resource for various metals by developing a sustainable metallurgical recycling process. The focal point is the recovery of base metals (copper, aluminum), precious metals (gold, silver, platinum and palladium) as well as critical elements (gallium, germanium and indium). Currently, five doctoral studies examine different approaches of hydro- and pyrometallurgical processes concerning their selectivity, efficiency and flexibility. These processes aim at the treatment of several waste streams (such as printed circuit boards, shredder dust or whole smartphones) to recover various valuable metals with minimal losses. By elaborating several single methods, a process concept will be developed, which enables the recovery of individual elements through a flexible combination of these methods, adapted to a given waste stream and particular requirements.</p><p>Key aspects: Reductive and energetic use of organics; thermal preparation of rest fractions (Pyrolysis); autothermal metallurgy, microwave heating; slag design and controlled solidification for metal concentration; critical metals recovery; autogenious pellets with respect to phase separation; TBRC furnace development for treating pure WEEE; scraps synergies by waste mixtures</p>';
let projectList = [
    {
        'id': 1,
        'title': 'VaReeWA - Entwicklung eines kombinierten pyro-/hydrometallurgischen Prozesses zur Wertrückgewinnung aus Elektronikschrott durch kleinformatige Umsetzung in Afrika: 01.06.2020 - 31.05.2022',
    },
    {
        'id': 2,
        'title': 'RemovAl - Removing the Waste Streams from the Primary Aluminum Production and Other Metal Sectros in Europe: 05.2018 - 05.2022',
    },
    {
        'id': 3,
        'title': 'Einbindung von NRW-Recyclingkompetenzen in die europäische Rohstoffcommunity KIC EIT Raw Materials: 01.07.2015 - 30.06.2018',
    },
    {
        'id': 4,
        'title': 'Entwicklung eines Schaumschlackenreaktors zum autogenen Recycling von feinstem Elektronikschrott: 01.03.2015 - 28.02.2017',
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

class ResearchProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            // intro: intro,
            // projectList: projectList,
            // publications: publications
            data: null,
            keywords: '',
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        Db.get('KeywordFromResearch', id).then((res) => {
            this.setState({data: res, keywords: String(res.results[0].publicationKeywords)});
            console.log(this.state.keywords);
        })
    }
    
    render() {
        // let keywords = '';
        // if (this.state.data.success) {
        //     keywords = this.state.data.results[0].publicationKeywords;
        //     console.log(keywords);
        // }
        return this.state.keywords == '' ? <span>Loading...</span> : (
            <div className="research-projects">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/160224-IME-057.jpg'} transformY='5%' overlay='dark'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <ResearchDetails id={this.state.id} />
                                    <div id="project-list" className="py-3">
                                        <h2 className="heading">Project List</h2>
                                        <ProjectList id={this.state.id} />
                                    </div>
                                    <div id="publications" className="py-3">
                                        <h2 className="heading">Publications</h2>
                                        <div className="row">
                                            <div className="col-8"></div>
                                            {/* <div className="col-4">
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
                                            </div> */}
                                        </div>
                                        <PublicationTable thead="1" keywords={this.state.keywords} search="1"/>
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
export default withRouter(ResearchProject);