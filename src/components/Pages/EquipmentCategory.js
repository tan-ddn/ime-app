import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";
import SideNav from '../Navigation/SideNav';
import { Link } from 'react-router-dom';
import Db from '../../control/class.db';
import EquipmentSubcat from '../Equipment/EquipmentSubcat';

// let categories = [
//     {
//         'id': 1,
//         'title': 'Process Metallurgy',
//         'url': ''
//     },
//     {
//         'id': 2,
//         'title': 'Materials Synthesis',
//         'url': ''
//     },
//     {
//         'id': 3,
//         'title': 'Metal Electrolysis',
//         'url': ''
//     },
//     {
//         'id': 4,
//         'title': 'Basics',
//         'url': ''
//     },
//     {
//         'id': 5,
//         'title': 'Chemical Analysis',
//         'url': ''
//     },
// ];

let category = {
    'id': 1,
    'title': 'Process Metallurgy',
    'subcat': [
        {
            'id': 1,
            'title': 'Pyrometallurgy',
            'equipment': [
                {
                    'id': 1,
                    'title': '1 MW Electric Arc Furnace',
                    'application': '<ul><li>Carbothermic production of silicium/ aluminium</li><li>Batteryrecycling</li><li>Slag metallurgy</li><li>Steel metallurgy</li><li>Copper metallurgy</li></ul>',
                    'performance': '<ul><li>Operation with direct or alternating current</li><li>Transformer power input 1 MWA</li><li>Hearth diameter 1,6 m</li><li>Height of vessel 3,2 m</li><li>Measuring technique for drawing an energy balance</li></ul>',
                    'contact': 'M. Sc. Jürgen Maier',
                    'image': process.env.PUBLIC_URL + '/img/equipment/glbo_id_6182.png'
                },
                {
                    'id': 2,
                    'title': '35l tilting resistance furnace',
                    'application': '<ul><li>Safty-related constructed especially for magnesium melt (Fe-crucible)</li><li>Melting of Al, Cu, Pb, Zn in Fe or graphit crucible</li><li>Melt treatment possible with installed industrial full-automatically Foseco stirring and degasification device</li></ul>',
                    'performance': '<ul><li>Resistance heated furnance by SiC bars</li><li>Volume: 35 l</li><li>Hydraulic tilting allows controlled dosing during casting (remote-controlled)</li><li>hydraulic cover (remote-controlled) with ring pipeline for inert gas</li><li>Heat power: 46 kW</li><li>Continuously adjustable temperature control</li><li>Emergency outlet at the bottom for directed melt cast at crucible fraction</li></ul>',
                    'contact': 'M. Sc. Cong Li',
                    'image': process.env.PUBLIC_URL + '/img/equipment/chmelztiegelof_id_9763.png'
                },
            ]
        },
        {
            'id': 2,
            'title': 'Hydrometallurgy',
            'equipment': [
                {
                    'id': 1,
                    'title': '1 MW Electric Arc Furnace',
                    'application': '<ul><li>Carbothermic production of silicium/ aluminium</li><li>Batteryrecycling</li><li>Slag metallurgy</li><li>Steel metallurgy</li><li>Copper metallurgy</li></ul>',
                    'performance': '<ul><li>Operation with direct or alternating current</li><li>Transformer power input 1 MWA</li><li>Hearth diameter 1,6 m</li><li>Height of vessel 3,2 m</li><li>Measuring technique for drawing an energy balance</li></ul>',
                    'contact': 'M. Sc. Jürgen Maier',
                    'image': process.env.PUBLIC_URL + '/img/equipment/glbo_id_6182.png'
                },
                {
                    'id': 2,
                    'title': '35l tilting resistance furnace',
                    'application': '<ul><li>Safty-related constructed especially for magnesium melt (Fe-crucible)</li><li>Melting of Al, Cu, Pb, Zn in Fe or graphit crucible</li><li>Melt treatment possible with installed industrial full-automatically Foseco stirring and degasification device</li></ul>',
                    'performance': '<ul><li>Resistance heated furnance by SiC bars</li><li>Volume: 35 l</li><li>Hydraulic tilting allows controlled dosing during casting (remote-controlled)</li><li>hydraulic cover (remote-controlled) with ring pipeline for inert gas</li><li>Heat power: 46 kW</li><li>Continuously adjustable temperature control</li><li>Emergency outlet at the bottom for directed melt cast at crucible fraction</li></ul>',
                    'contact': 'M. Sc. Cong Li',
                    'image': process.env.PUBLIC_URL + '/img/equipment/chmelztiegelof_id_9763.png'
                },
            ]
        },
        {
            'id': 3,
            'title': 'Process Engineering',
            'equipment': [
                {
                    'id': 1,
                    'title': '1 MW Electric Arc Furnace',
                    'application': '<ul><li>Carbothermic production of silicium/ aluminium</li><li>Batteryrecycling</li><li>Slag metallurgy</li><li>Steel metallurgy</li><li>Copper metallurgy</li></ul>',
                    'performance': '<ul><li>Operation with direct or alternating current</li><li>Transformer power input 1 MWA</li><li>Hearth diameter 1,6 m</li><li>Height of vessel 3,2 m</li><li>Measuring technique for drawing an energy balance</li></ul>',
                    'contact': 'M. Sc. Jürgen Maier',
                    'image': process.env.PUBLIC_URL + '/img/equipment/glbo_id_6182.png'
                },
                {
                    'id': 2,
                    'title': '35l tilting resistance furnace',
                    'application': '<ul><li>Safty-related constructed especially for magnesium melt (Fe-crucible)</li><li>Melting of Al, Cu, Pb, Zn in Fe or graphit crucible</li><li>Melt treatment possible with installed industrial full-automatically Foseco stirring and degasification device</li></ul>',
                    'performance': '<ul><li>Resistance heated furnance by SiC bars</li><li>Volume: 35 l</li><li>Hydraulic tilting allows controlled dosing during casting (remote-controlled)</li><li>hydraulic cover (remote-controlled) with ring pipeline for inert gas</li><li>Heat power: 46 kW</li><li>Continuously adjustable temperature control</li><li>Emergency outlet at the bottom for directed melt cast at crucible fraction</li></ul>',
                    'contact': 'M. Sc. Cong Li',
                    'image': process.env.PUBLIC_URL + '/img/equipment/chmelztiegelof_id_9763.png'
                },
            ]
        },
    ]
};

class EquipmentCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // category: category
            id: null,
            categories: Db.get('EquipCat').then(res => res)
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        Db.get('EquipCat').then((res) => {
            this.setState({categories: res});
        });
    }
    
    render() {
        let categories = [];
        let cat = {
            typ: '',
            typ_eng: ''
        }
        if (this.state.categories.success) {
            categories = this.state.categories.results;
            // console.log(categories);
            categories.forEach((elm, index) => {
                elm.url = '/equipment/' + elm.id;
                elm.title_eng = elm.typ_eng;
                if (elm.id == this.state.id) {
                    cat = elm;
                }
            })
            // console.log(cat);
        }
        // let subCat = Array();
        // this.state.category.subcat.forEach((elm, index) => {
        //     subCat[index] = Object.assign({}, elm);
        //     subCat[index].equipment.forEach((e, i) => {
        //         // delete e.image;
        //         // delete e.id;
        //     });
        // });
        // console.log(subCat);
        return cat.typ == '' ? <span>Loading...</span> : (
            <div className="equipment-cat">
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
                                    <div className="row py-3">
                                        <div className="col-12 col-md-3">
                                            {/* <Tabs/> */}
                                            <SideNav heading="Categories" content={categories} />
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <h2 className="heading"><Link className="d-inline-block " to="/equipment">Equipement</Link> <span className="text-dark">&#187; {cat.typ_eng}</span> </h2>
                                            <EquipmentSubcat cat={cat.typ} />
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
export default withRouter(EquipmentCategory);