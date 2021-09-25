import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import Box from '../Box';
import './team.scss';
import Db from '../../control/class.db';

export default class TeamBox extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get('ProfileDetails', this.props.id).then(res => res)
        }
    }

    componentDidMount() {
        if (this.props.id) {
            Db.get('ProfileDetails', this.props.id).then((res) => {
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
            content = {
                id: elm.t_id,
                link: "/team/" + elm.t_id,
                name: title + ' ' + elm.t_vorname + ' ' + elm.t_name,
                image: process.env.PUBLIC_URL + '/img/team/' + elm.t_bild,
                url: elm.t_url,
                description: '<p>Tel: ' + elm.t_tel + '<br/>Fax: ' + elm.t_fax + '<br/><a href="mailto:' + elm.t_mail + '">' + elm.t_mail + '</a></p>'
            }
        }
        return (content == null) ? 'Loading...' : (
            <Box content={content} classNames="team-box rounded bg-darkblue0" type="team" />     
        );
    }
}
