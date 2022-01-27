import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import SideNav from '../Navigation/SideNav';
import Db from '../../control/class.db';
import ProjectDetailsBox from '../Research/ProjectDetailsBox';

// let researchAreas = [
//     {
//         id: 1,
//         title: 'Electronic Scrap Recycling',
//         description: 'The IME pursues the objective to use the high potential of WEEE as a resource for various metals by developing a sustainable metallurgical recycling process. The focal point is the recovery of base metals (copper, aluminum), precious metals (gold, silver, platinum and palladium) as well as critical elements (gallium, germanium and indium)...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/WEEE.jpg'
//     },
//     {
//         id: 2,
//         title: 'Nanopowder Synthesis',
//         description: 'Nanotechnology belongs to the key innovative technologies for powder production. Ultrasonic spray pyrolysis USP is a versatile method for the formation of nanosized particles of metals, oxides and composites. Our work deals with nanoparticles of Ag, Cu and Au formed by ultrasonic spray pyrolysis using the horizontal and vertical reactor. Furthermore,...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/AlNO3_0_05_3lmin_800.png'
//     },
//     {
//         id: 3,
//         title: 'Circular Economy for Batteries',
//         description: 'The IME represents the field of process metallurgy and metal recycling at RWTH Aachen University. Due to the growing public, political and industrial interest in battery recycling the IME has systematically developed optimal pyrometallurgical and hydrometallurgical recycling concepts for all standard battery systems in cooperation...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/Battery_Recycling.png'
//     },
//     {
//         id: 4,
//         title: 'Titanium Metallurgy',
//         description: 'Titanium is called the material of the future. This title results from the unique combination of properties such as good corrosion resistance, high strength and biocompatibility with low density. Due to these properties, titanium alloys are increasingly being used in areas such as aerospace, automotive, chemical or medical technology...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/elektrolysis_id_6479.jpg'
//     },
//     {
//         id: 5,
//         title: 'Technology Metals (Extraction and Recycling)',
//         description: 'ritical metals are, by definition, metals that are of high economic importance and at the same time exhibit significant supply risks. Elements that are ascribed as especially critical are, for example, rare earth elements, platinum group metals, but also antimony and niobium. At IME, pyrometallurgical as well as hydrometallurgical processes for economic,...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/Criticals_metals.jpg'
//     },
//     {
//         id: 6,
//         title: 'Aluminum Recycling and melt purification',
//         description: 'The working group focuses on the recycling of aluminium scraps via under salt or salt-free processes. Top Blown Rotary Converter (TBRC) in lab and demo-scale is used to perform the experiments. Efficient coagulation during recycling is also studied by using different salt compositions. In addition, thermal treatment of...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/LiMCA_photo.jpg'
//     },
//     {
//         id: 7,
//         title: 'Waste Treatment und Primary metallurgy',
//         description: 'The primary production of metals is usually accompanied by by-product residues. These residue streams are a potential problem due to environmental concerns. Contained in these residues are valuable metals in lower grades than the primary production source.  The IME is seeking means to exploit these vast secondary resources...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/160316-IME-307-2.jpg'
//     },
//     {
//         id: 8,
//         title: 'Alloying Metallurgy',
//         description: 'Alloying metallurgy is confronted with increasing complexity, as requirements of metallic high-tech materials rise with regard to composition, cleanliness and homogenity. In order to comply with strict tolerances, metallurgical vacuum processes are applied, which allow, for instance, melting of metals with high oxygen affinity,...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/ti_recycling.jpg'
//     },
//     {
//         id: 9,
//         title: 'Pure Metals',
//         description: 'The rapidly growing development and progress in the semiconductor, solar panel, photovoltaic and also the catalytic industry, has recently considerably increased the production and the number of applications of high-purity metals. In order to ensure the extremely low level of impurities (ppm or even ppb range), complex and...',
//         button: 'Read More',
//         buttonUrl: '',
//         image: process.env.PUBLIC_URL + '/img/projects/steckbrief_Projekte_Inhalt-Gruppe_Foto.jpg'
//     },
// ];

// let projectDetails = {
//     'id': 1,
//     'title': ' 	Development of a pyro-/hydrometallurgical process for the recovery of valuable metals from WEEE through small-scale operations in South Africa',
//     'type': 'Verbundforschung',
//     'sponsorship': 'BMBF (DLR)',
//     'duration': '01.06.2020 - 31.05.2022',
//     'partner': 'Chemical Engineering Department UCT (University of Cape Town) - Südafrika',
//     'description': 'With an annual production of over 50 million tons and a high content of valuable metals, electronic scrap represents an important secondary resource.However, current recycling technologies are dominated by large-scale, pyrometallurgical processes, so that smaller companies are not able to establish themselves in the market. A new recycling approach involves hydrometallurgical treatment of electronic scrap, which enables selective and environmentally friendly recovery of valuable metals. Prof. Jochen Petersen of the University of Cape Town was awarded the German-African Innovation Prize for his pioneering research in the complex areas of hydrometallurgy. The research project resulting from this award aims to further develop and implement previous operations on a small scale at local recycling companies in South Africa. The process include multi-stage leaching and recovery of precious and base metals as well as the recirculation of the process solution used. The German project partner IME - RWTH Aachen University, lead by Prof. Bernd Friedrich is contributing its expertise in thermal pretreatment to the project. This pretreatment of electronic scrap significantly facilitates the subsequent hydrometallurgical metal recovery. The technical know-how will be transferred through a cooperative workshop. In addition, the results of the project will be made available to local recycling companies to enable the technical implementation. In this context, the socio-economic and ecological sustainability of the project will be ecological sustainability of the project will be critically evaluated in a local African context.'
// };

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // researchAreas: researchAreas,
            // projectDetails: projectDetails
            // data: [],
            researchAreas: [],
            projectDetails: []
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        Db.get({action: 'ProjectDetails', id: id}).then((res) => {
            this.setState({projectDetails: res})
        });
        Db.get({action: 'AllResearch'}).then((res) => {
            this.setState({researchAreas: res})
        });
    }
    
    render() {
        let researchAreas = [];
        if (this.state.researchAreas.success) {
            researchAreas = this.state.researchAreas.results;
            researchAreas.forEach((elm, index) => {
                elm['url'] = '/research/' + elm.id;
            });
            // console.log(researchAreas);
        }
        let projectDetails = [];
        if (this.state.projectDetails.success) {
            projectDetails = this.state.projectDetails.results[0];
            console.log(projectDetails);
        }
        return(
            <div className="project-details">
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
                                    <div className="row justify-content-between">
                                    <div className="py-3 col-12 col-sm-5 text-left">
                                        {(researchAreas) &&
                                        <SideNav heading="Research Areas" content={researchAreas} />
                                        }
                                    </div>
                                    <div id="intro" className="py-3 col-12 col-sm-7">
                                        {/* {this.state.id} */}
                                        <h2 className="heading"><Link className="d-inline-block " to="/research">Research</Link> <span className="text-dark">&#187; Project Details</span></h2>
                                        <ProjectDetailsBox content={projectDetails} />
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
export default withRouter(ProjectDetails);