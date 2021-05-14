import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '../Box';
import './team.scss';

export default class TeamGroup extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            greenLogoAlign: 'right',
            group: this.props.group
        }
    }


    render() {
        let greenLogoAlign = (this.state.screenSize === 'xs') ? 'center' : 'right';
        let boxContent = Array();
        this.state.group.members.forEach((elm, index) => {
            boxContent[index] = {
                link: "/team/" + elm.id,
                name: elm.name,
                image: elm.img,
                url: elm.url,
                description: '<p>Tel: ' + elm.tel + '<br/>Fax: ' + elm.fax + '<br/><a href="mailto:' + elm.email + '">' + elm.email + '</a></p>'
            };
        });
        return(
            <div className="team-group">
                <h4 className="box-title">{this.state.group.title}</h4>
                <div className="row">
                    {boxContent.map((elm, index) => (
                        <div key={index} className="col-12 col-lg-4 d-flex">
                            <Box content={elm} classNames="team-box rounded bg-darkblue" profile="1" />                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}