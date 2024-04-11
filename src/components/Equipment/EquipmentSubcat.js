import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
// import Db from '../../control/class.db';
import EquipmentGroup from './EquipmentGroup';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';

class EquipmentSubcat extends ResponsiveComponent {
    APICalls = new imeAPICalls;

    constructor(props) {
        super(props);

        this.state = {
            // subCat: Db.get({action: 'EquipSubCat', id: this.props.cat}).then(res => res)
            subCat: {}
        }
    }

    componentDidMount() {
        // Db.get({action: 'EquipSubCat', id: this.props.cat}).then((res) => {
        //     this.setState({subCat: res});
        // });
        this.fetchData();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.cat !== prevProps.cat) {
            this.fetchData();
        }
    }

    fetchData() {
        this.APICalls.get({endpoint: 'Equipment/EquipSubCat', id: this.props.cat}).then((res) => {
            this.setState({subCat: res});
        });      
    }
    
    render() {
        if (!this.context) return '';
        let subCat = [];
        if (this.state.subCat.success) {
            subCat = this.state.subCat.results;
            subCat = subCat.filter(elm => elm.typ.indexOf('-') > -1);
            //console.log(subCat);
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
                            elm.title = elm.typ.split('-')[1];
                            elm.title_eng = elm.typ_eng.split('-')[1];
                        }
                        return (
                            <li key={index} role="presentation" className="nav-item equipment-subcat">
                                <a className={"nav-link" + active} href={"#cat-"+elm.id} role="tab" aria-controls={"cat-"+elm.id} aria-selected={selected} data-toggle="pill">{(this.context.lang == 'ge') ? elm.title : elm.title_eng}</a>
                            </li>
                        )})}
                </ul>
                <div id="subcatTabContent" className="tab-content">
                    {subCat.map((elm, index) => {
                        let active = "";
                        if (index === 0) active = " show active";
                        return (
                            <div key={index} className={"tab-pane fade" + active} id={"cat-"+elm.id} role="tabpanel" aria-labelledby={"cat-"+elm.id+"-tab"}>
                                <EquipmentGroup cat={elm} />
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
EquipmentSubcat.contextType = globalLangStateContext;

export default withLangSwitchListener(EquipmentSubcat);