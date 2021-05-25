import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";
import EquipmentSingle from '../Equipment/EquipmentSingle';
import SideNav from '../Navigation/SideNav';
import Tabs from '../Tabs/Tabs';
import '../Tabs/Tabs.scss';

let categories = [
    {
        'id': 1,
        'title': 'Process Metallurgy',
        'url': ''
    },
    {
        'id': 2,
        'title': 'Materials Synthesis',
        'url': ''
    },
    {
        'id': 3,
        'title': 'Metal Electrolysis',
        'url': ''
    },
    {
        'id': 4,
        'title': 'Basics',
        'url': ''
    },
    {
        'id': 5,
        'title': 'Chemical Analysis',
        'url': ''
    },
];

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
            categories: categories,
            category: category
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
        this.state.categories.forEach((elm, index) => elm.url = '/equipment/' + elm.id)

        let subCat = Array();
        this.state.category.subcat.forEach((elm, index) => {
            subCat[index] = Object.assign({}, elm);
            subCat[index].equipment.forEach((e, i) => {
                // delete e.image;
                // delete e.id;
            });
        });
        console.log(subCat);
        return(
            <div className="team">
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
                                            <SideNav heading="Categories" content={this.state.categories} />
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <h2 className="heading">{this.state.category.title} Equipment</h2>
                                            <ul id="subcatTab" className="nav nav-tabs " role="tablist">
                                            {subCat.map((elm, index) => {
                                                let active = "", selected = false;
                                                if (index === 0) {
                                                    active = " active";
                                                    selected = true;
                                                }
                                                return (
                                                <li key={index} role="presentation" className="nav-item equipment-subcat">
                                                    <a className={"nav-link" + active} href={"#cat-"+elm.id} role="tab" aria-controls={"cat-"+elm.id} aria-selected={selected} data-toggle="pill">{elm.title}</a>
                                                    
                                                </li>
                                            )})}
                                            </ul>
                                            <div id="subcatTabContent" className="tab-content">
                                            {subCat.map((elm, index) => {
                                                let active = "";
                                                if (index === 0) active = " show active";
                                                return (
                                                <div key={index} className={"tab-pane fade" + active} id={"cat-"+elm.id} role="tabpanel" aria-labelledby={"cat-"+elm.id+"-tab"}>
                                                    <div className="row">
                                                    {elm.equipment.map((e, i) => (
                                                        <EquipmentSingle key={i} content={e}/>
                                                    ))}
                                                    </div>
                                                </div>
                                            )})}
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
export default withRouter(EquipmentCategory);