import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import EquipmentSingle from '../Equipment/EquipmentSingle';
import Tabs from '../Tabs/Tabs';
import '../Tabs/Tabs.scss';
// import Db from '../../control/class.db';
import imeAPICalls from '../../imeAPICalls';

export default class EquipmentGroup extends ResponsiveComponent {
    APIcalls = new imeAPICalls;

    constructor(props) {
        super(props);

        this.state = {
            // equip: Db.get({action: 'EquipFromSubCat', id: this.props.cat}).then(res => res)
            equip: {}
        }
    }

    componentDidMount() {
        // Db.get({action: 'EquipFromSubCat', id: this.props.cat}).then((res) => {
        //     this.setState({equip: res});
        // });
        this.fetchData();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.cat.typ !== prevProps.cat.typ) {
            this.fetchData();
        }
    }

    fetchData() {
        this.APIcalls.get({endpoint: 'Equipment', id: this.props.cat.id}).then((res) => {
            this.setState({equip: res});
        });
    }

    render() {
        let equip = [];
        if (this.state.equip.success) {
            equip = this.state.equip.results;
            console.log(equip);
        }
        return(
            <div className="row">
                {equip.map((e, i) => {
                    e.image = process.env.PUBLIC_URL + '/img/equipment/' + e.e_bild;
                    e.contact = e.tt_titel + ' ' + e.t_vorname + ' ' + e.t_name;
                    return (
                    <EquipmentSingle key={i} content={e}/>
                )})} 
            </div>
        )
    };
}