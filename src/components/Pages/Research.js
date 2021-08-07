import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import TopicGrid from '../Research/TopicGrid';

let intro = '<p>Through being an experimentally oriented institute, IME constantly handles public and industrial research. Here we offer you a short description for a choice of projects. Either you can search for catchwords or rummage in the discrete topics. </p>';
// let topics = [
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

export default class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            // topics: topics
        }
    }    
    
    render() {
        return(
            <div className="research">
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
                                        <h2 className="heading">Research Projects</h2>
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
                                        <h2 className="heading">Topics</h2>
                                        {/* <TopicGrid topics={this.state.topics} /> */}
                                        <TopicGrid />
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