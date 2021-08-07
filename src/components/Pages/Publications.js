import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import PublicationTable from '../Publications/PublicationTable';
import '../Publications/publications.scss';
import Db from '../../control/class.db';

let intro = '<p>Our whole series of Dr.- thesis can be viewed and purchased at the following link. <a href="http://www.shaker.de/de/content/catalogue/index.asp?lang=de&amp;ID=6&amp;category=280" target="_blank" rel="nofollow noopener"> Search PhD Thesis</a>.</p>';
let publText = '<p>Here academic publications of the IME since 2000 are listed, which are usually available for download as PDF-file. Authors depicted in blue belong or belonged to IME. In order to view the documents you need the <a target="_blank" rel="nofollow noopener" href="http://www.adobe.com/de/products/acrobat/readstep2.html">Adobe-Acrobat-Reader</a>.</p>';
// let publications = [
//     {
//         'year': '2021',
//         'tag': 'article in scientific journal',
//         'title': ' 	Synergism Red Mud Acid Mine Drainage as a Sustainable Solution for Neutralizing and Immobilizing Hazardous Elements',
//         'meta': 'Metals 2021, 11, 620. https://doi.org/10.3390/met11040620',
//         'authors': 'Hugo Lucas, Srecko Stopic, Buhle Xakalashe, Bernd Friedrich, Sehliso Ndlovu'
//     },
//     {
//         'year': '2021',
//         'tag': 'article in scientific journal',
//         'title': 'Early-Stage Recovery of Lithium from Tailored Thermal Conditioned Black Mass Part I: Mobilizing Lithium via Supercritical CO2-Carbonation',
//         'meta': 'Metals 2021, 11(2), 177, https://doi.org/10.3390/met11020177',
//         'authors': 'Lilian Schwich geb. Peters, Tom Schubert, Bernd Friedrich'
//     },
//     {
//         'year': '2021',
//         'tag': 'article in scientific journal',
//         'title': 'Use of Treated Non‐Ferrous Metallurgical Slags as Supplementary Cementitious Materials in Cementitious Mixtures',
//         'meta': 'Appl. Sci. 2021, 11, 4028 https://doi.org/10.3390/app11094028',
//         'authors': 'Asghar Gholizadeh Vayghan, Liesbeth Horckmans, Ruben Snellings, Arne Peys, Priscilla Teck, Jürgen Maier, Bernd Friedrich, Katarzyna Klejnowska'
//     },
// ]

export default class Publications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            publText: publText,
            // publications: publications
        }
    }    
    
    render() {
        return(
            <div className="publications">
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
                                    <div id="intro" className="py-3">
                                        <h2 className="heading">PhD Thesis</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-3">
                                                <figure>
                                                    <img src={process.env.PUBLIC_URL + '/img/publications/Drarbeit.png'} alt="Building of the IME" />
                                                </figure>
                                                </div>
                                                <div className="py-2 col-12 col-sm-9">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="publications" className="py-3">
                                        <h2 className="heading">Publications</h2>
                                        <div className="row mb-3">
                                        <div className="col-11" dangerouslySetInnerHTML={{__html: this.state.publText}} />
                                        <div className="col-1">
                                        <img className="float-right" src={process.env.PUBLIC_URL + '/img/publications/pdf_icon_small.gif'} alt="Building of the IME" />
                                        </div>
                                        </div>
                                        <PublicationTable teamId="-1" search="1" thead="1"/>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="to-top-link">
                            <a href="#">top</a>
                            </p> */}
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}