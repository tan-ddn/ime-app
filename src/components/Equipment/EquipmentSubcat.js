import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import Db from '../../control/class.db';
import EquipmentGroup from './EquipmentGroup';

export default class EquipmentSubcat extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            subCat: Db.get('EquipSubCat', this.props.cat).then(res => res)
        }
    }

    componentDidMount() {
        Db.get('EquipSubCat', this.props.cat).then((res) => {
            this.setState({subCat: res});
        });
        
    }
    
    render() {
        let subCat = [];
        if (this.state.subCat.success) {
            subCat = this.state.subCat.results;
            subCat = subCat.filter(elm => elm.typ.indexOf('-') > -1)
            console.log(subCat);
        }
        return(
            <div className="equipment-subcat">
                <ul id="subcatTab" className="nav nav-tabs " role="tablist">
                    {subCat.map((elm, index) => {
                        let active = "", selected = false;
                        if (index === 0) {
                            active = " active";
                            selected = true;
                        }
                        if (elm.typ.indexOf('-') > -1) {
                            elm.typ = elm.typ.split('-')[1];
                            elm.typ_eng = elm.typ_eng.split('-')[1];
                        }
                        return (
                            <li key={index} role="presentation" className="nav-item equipment-subcat">
                                <a className={"nav-link" + active} href={"#cat-"+elm.id} role="tab" aria-controls={"cat-"+elm.id} aria-selected={selected} data-toggle="pill">{elm.typ_eng}</a>
                            </li>
                        )})}
                </ul>
                <div id="subcatTabContent" className="tab-content">
                    {subCat.map((elm, index) => {
                        let active = "";
                        if (index === 0) active = " show active";
                        return (
                            <div key={index} className={"tab-pane fade" + active} id={"cat-"+elm.id} role="tabpanel" aria-labelledby={"cat-"+elm.id+"-tab"}>
                                <EquipmentGroup cat={elm.id} />
                                {/* <div className="row">
                                    {elm.equipment.map((e, i) => (
                                        <EquipmentSingle key={i} content={e}/>
                                    ))}
                                </div> */}
                            </div>
                    )})}
                </div>
            </div>
        )
    };
}