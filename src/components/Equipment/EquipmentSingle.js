import React from 'react';
import { Link } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';

export default class EquipmentSingle extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content
        }
    }


    render() {
        let className = "equipment-box col-12 col-md-6 py-3 " + this.props.className;
        return(
            <div id={this.props.id} className={className} style={{height: `${this.props.height}`}} >
                <h6 className="title"><b>{this.state.content.e_name_eng}</b></h6>
                <div className="row">
                <div className="col-12 col-md-40">
                    <div className="equipment-image">
                        <img src={this.state.content.image} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-80 text-left">
                    <div className="row">
                    <div className="col-12 col-md-60">
                        <dl>
                            <dt>Application area:</dt>
                            <dd dangerouslySetInnerHTML={{__html: this.state.content.e_einsatz_eng}} />
                        </dl>
                    </div>
                    <div className="col-12 col-md-60">
                        <dl>
                            <dt>Performance data</dt>
                            <dd dangerouslySetInnerHTML={{__html: this.state.content.e_daten_eng}} />
                            <dt>Contact person</dt>
                            <dd >
                                <Link to={'/team/' + this.state.content.e_kontakt}>{this.state.content.contact}</Link>
                            </dd>
                        </dl>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    };
}