import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import Box from '../Boxes/Box';
import './team.scss';
import Db from '../../control/class.db';
import imeAPICalls from '../../imeAPICalls';
import StringHandle from '../../utility/stringHandle';

export default class TeamBox extends ResponsiveComponent {
    APIcalls = new imeAPICalls();

    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            // data: Db.get({action: 'ProfileDetails', id: this.props.id}).then(res => res)
            data: {}
        }
    }

    componentDidMount() {
        if (this.props.id) {
            // Db.get({action: 'ProfileDetails', id: this.props.id}).then((res) => {
            this.APIcalls.get({ endpoint: 'Team/Member', id: this.props.id}).then((res) => {
                this.setState({data: res});
            });
        }
    }

    render() {
        let elm = null;
        if (this.state.data.success) {
            elm = this.state.data.results[0];
        }
        if (this.props.team) {elm = this.props.team;}
        let content = null;
        if (elm != null) {
            let title = '';
            if (elm.t_titel != 16) title = elm.tt_titel;
            if (elm.t_einteilung == 8) {
                let dissertation = '', dissertation_eng = '';
                if (elm.t_dissertation) {
                    dissertation = StringHandle.extract(StringHandle.beautifyHTML(elm.t_dissertation, true), 8) + '...';
                }
                if (elm.t_dissertation) {
                    dissertation_eng = StringHandle.extract(StringHandle.beautifyHTML(elm.t_dissertation_eng, true), 8) + '...';
                }
                let duration = (elm.t_duration) ? elm.t_duration : '';
                content = {
                    id: elm.t_id,
                    link: "/team/" + elm.t_id,
                    name: title + ' ' + elm.t_vorname + ' ' + elm.t_name,
                    image: process.env.PUBLIC_URL + '/img/team/' + elm.t_bild,
                    url: elm.t_url,
                    description: 'Dissertation: <a rel="noopener noreferrer" target="_blank" href="//' + elm.t_dissert_url + '">' + dissertation + '</a><br/>Duration: ' + duration,
                    description_eng: 'Dissertation: <a rel="noopener noreferrer" target="_blank" href="//' + elm.t_dissert_url + '">' + dissertation_eng + '</a><br/>Duration: ' + duration
                }
            } else {
                content = {
                    id: elm.t_id,
                    link: "/team/" + elm.t_id,
                    name: title + ' ' + elm.t_vorname + ' ' + elm.t_name,
                    image: process.env.PUBLIC_URL + '/img/team/' + elm.t_bild,
                    url: elm.t_url,
                    description: '<p>Tel: ' + elm.t_tel + '<br/>Fax: ' + elm.t_fax + '<br/><a href="mailto:' + elm.t_mail + '">' + elm.t_mail + '</a></p>',
                    description_eng: '<p>Tel: ' + elm.t_tel + '<br/>Fax: ' + elm.t_fax + '<br/><a href="mailto:' + elm.t_mail + '">' + elm.t_mail + '</a></p>'
                }
            }
            console.log(content.name);
        }
        return (content == null) ? '' : (
            <Box content={content} classNames="team-box rounded bg-darkblue0" type="team" />     
        );
    }
}
