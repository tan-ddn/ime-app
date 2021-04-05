import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import ResponsiveComponent from '../ResponsiveComponent';
import Box from '../Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Scss/box.scss';
// import './research.scss';

const areas = [
    {
        title: 'Electronic Scrap Recycling',
        description: 'The IME pursues the objective to use the high potential of WEEE as a resource for various metals by developing a sustainable metallurgical recycling process. The focal point is the recovery of base metals (copper, aluminum), precious metals (gold, silver, platinum and palladium) as well as critical elements (gallium, germanium and indium)...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/WEEE.jpg'
    },
    {
        title: 'Nanopowder Synthesis',
        description: 'Nanotechnology belongs to the key innovative technologies for powder production. Ultrasonic spray pyrolysis USP is a versatile method for the formation of nanosized particles of metals, oxides and composites. Our work deals with nanoparticles of Ag, Cu and Au formed by ultrasonic spray pyrolysis using the horizontal and vertical reactor. Furthermore,...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/AlNO3_0_05_3lmin_800.png'
    },
    {
        title: 'Circular Economy for Batteries',
        description: 'The IME represents the field of process metallurgy and metal recycling at RWTH Aachen University. Due to the growing public, political and industrial interest in battery recycling the IME has systematically developed optimal pyrometallurgical and hydrometallurgical recycling concepts for all standard battery systems in cooperation...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/Battery_Recycling.png'
    },
    {
        title: 'Titanium Metallurgy',
        description: 'Titanium is called the material of the future. This title results from the unique combination of properties such as good corrosion resistance, high strength and biocompatibility with low density. Due to these properties, titanium alloys are increasingly being used in areas such as aerospace, automotive, chemical or medical technology...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/elektrolysis_id_6479.jpg'
    },
    {
        title: 'Technology Metals (Extraction and Recycling)',
        description: 'ritical metals are, by definition, metals that are of high economic importance and at the same time exhibit significant supply risks. Elements that are ascribed as especially critical are, for example, rare earth elements, platinum group metals, but also antimony and niobium. At IME, pyrometallurgical as well as hydrometallurgical processes for economic,...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/Criticals_metals.jpg'
    },
    {
        title: 'Aluminum Recycling and melt purification',
        description: 'The working group focuses on the recycling of aluminium scraps via under salt or salt-free processes. Top Blown Rotary Converter (TBRC) in lab and demo-scale is used to perform the experiments. Efficient coagulation during recycling is also studied by using different salt compositions. In addition, thermal treatment of...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/LiMCA_photo.jpg'
    },
    {
        title: 'Waste Treatment und Primary metallurgy',
        description: 'The primary production of metals is usually accompanied by by-product residues. These residue streams are a potential problem due to environmental concerns. Contained in these residues are valuable metals in lower grades than the primary production source.  The IME is seeking means to exploit these vast secondary resources...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/160316-IME-307-2.jpg'
    },
    {
        title: 'Alloying Metallurgy',
        description: 'Alloying metallurgy is confronted with increasing complexity, as requirements of metallic high-tech materials rise with regard to composition, cleanliness and homogenity. In order to comply with strict tolerances, metallurgical vacuum processes are applied, which allow, for instance, melting of metals with high oxygen affinity,...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/ti_recycling.jpg'
    },
    {
        title: 'Pure Metals',
        description: 'The rapidly growing development and progress in the semiconductor, solar panel, photovoltaic and also the catalytic industry, has recently considerably increased the production and the number of applications of high-purity metals. In order to ensure the extremely low level of impurities (ppm or even ppb range), complex and...',
        button: 'Read More &#187;',
        buttonUrl: '',
        date: '05.2018-05.2020',
        image: process.env.PUBLIC_URL + '/img/projects/steckbrief_Projekte_Inhalt-Gruppe_Foto.jpg'
    },
]

export default class LatestProjects extends ResponsiveComponent {
    render() {
        let noColumns;
        switch (this.state.screenSize) {
            case 'xl':
            case 'lg':
                noColumns = 4;
                break;
            case 'md':
                noColumns = 3;
                break;
            case 'sm':
                noColumns = 2;
                break;
            case 'xs':
                noColumns = 1;
                break;
            default:
                noColumns = 4;
                break;
        }
        const settings = {
            centerMode: true,
            centerPadding: '0px',
            autoplay: false,
            // autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: noColumns,
            speed: 500,
            dots: true,
            slidesPerRow: 1
        };
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 5,
        //     slidesToScroll: 2
        // };
        areas.forEach(function(elm) {
            elm.description = elm.description.substring(0, 90)+'...';
            return elm;
        });
        return (
            <div id="" className="latest-projects box-slider" style={{height: `${this.props.height}`}}>
                <Slider {...settings}>
                    {areas.map((item, index) => (
                    <Box key={index} content={areas[index]} titleSize='small'/>
                    // <div key={index} className="events-box">
                    //     <div className="events-wrapper">
                    //         <h6 className="box-title">{item.title}</h6>
                    //         <div className="events-img">
                    //             <img src={item.image} alt="" />
                    //         </div>
                    //         <div className="events-sum">
                    //             {item.description.substring(0, 90)+'...'}
                    //         </div>
                    //         <a className="anchor-style1" href="">Read More &#187;</a>
                    //         <div className="events-date">
                    //             {item.date}
                    //         </div> 
                    //     </div>

                    // </div>
                    ))}
                </Slider>
            </div>
        )
    }
}