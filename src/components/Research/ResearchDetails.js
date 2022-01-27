import { data } from 'jquery';
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import Db from '../../control/class.db';
import StringHandle from '../../utility/stringHandle';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class ResearchDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Db.get({action: 'ResearchDetails', id: this.props.id}).then(res => res),
            contacts: Db.get({action: 'ContactFromResearch', id: this.props.id}).then(res => res),
            // group: Db.get({action: 'GroupTitleFromProfile', this.props.id).then((res) => res),
            // topic: Db.get({action: 'ResearchTopicFromProfile', this.props.id).then((res) => res),
        }
    }    

    componentDidMount() {
        Db.get({action: 'ResearchDetails', id: this.props.id}).then((res) => {
            this.setState({data: res});
        });
        Db.get({action: 'ContactFromResearch', id: this.props.id}).then((res) => {
            this.setState({contacts: res});
        });
    }

    contactHtml(profile) {
        let title = '';
        if (profile.t_titel != 16) title = profile.tt_titel;
        profile.name = title + ' ' + profile.t_vorname + ' ' + profile.t_name;
        return <li><Link to={'/team/'+profile.t_id}>{profile.name}</Link></li>;
    }

    render() {
        // if (this.props.data.success) {
        //     profile = this.props.data.results[0];
        //     // console.log(profile);
        //     let title = '';
        //     if (profile.t_titel != 16) title = profile.tt_titel;
        //     profile.name = title + ' ' + profile.t_vorname + ' ' + profile.t_name;
        //     profile.image = process.env.PUBLIC_URL + '/img/team/' + profile.t_bild;
        // }
        let data = {};
        if (this.state.data.success) {
            data = this.state.data.results[0];
            //console.log(data);
        }
        let contactHTML = [];
        let alumniHTML = [];
        if (this.state.contacts.success) {
            let contacts = this.state.contacts.results;
            console.log(contacts);
            let alumni = contacts.filter(elm => elm.t_einteilung == 8);
            contacts = contacts.filter(elm => elm.t_einteilung != 8);
            contactHTML = contacts.map((elm) => {
                return this.contactHtml(elm);
            });
            alumniHTML = alumni.map((elm) => this.contactHtml(elm));
        }
        // if (this.state.topic.success) {
        //     let topic = this.state.topic.results[0];
        //     // console.log(group);
        //     topicHtml = <Link to={'/research/'+topic.frdp_id} >{topic.frdp_title_eng}</Link>;
        // }
        return (Object.keys(data).length === 0) ? 'Loading...' : (
            <div id="intro" className="py-3">
                {/* {this.state.id} */}
                <h2 className="heading"><Link className="d-inline-block " to="/research">Research</Link> <span className="text-dark">&#187; {(localStorage.getItem('lang') == 'ge') ? data.title : data.title_eng}</span> </h2>
                <div className="intro-wrap p-4 bg-grey text-left">
                    <div className="px-2">
                        <div className="row">
                            <div className="py-2 col-12 col-sm-12">
                                <SanitizedHTML html={(localStorage.getItem('lang') == 'ge') ? data.description : data.description_eng} />
                            </div>
                            <div className="py-2 col-12 col-sm-4">
                                <p><b>Contact:</b></p>
                                <ul>
                                    {contactHTML}
                                    {/* <li>Dr.-Ing. Fabian Diaz</li>
                                    <li>M. Sc. Damien Latacz</li>
                                    <li>M. Sc. Gunnar Hovestadt</li>
                                    <li>Dr.-Ing. Alexander Birich</li> */}
                                </ul>
                            </div>
                            <div className="py-2 col-12 col-sm-4">
                                <p><b>Alumni:</b></p>
                                <ul>
                                    {alumniHTML}
                                    {/* <li>M. Sc. Nikolaus Borowski</li>
                                    <li>Dr.-Ing. Sebastian Maurell-Lopez</li>
                                    <li>M. Sc. Benedikt Flerus</li>
                                    <li>M. Sc. Anna Trentmann</li> */}
                                </ul>
                            </div>
                            <div className="py-2 col-12 col-sm-4">
                                <div className="profile-img">
                                    <img src={process.env.PUBLIC_URL + '/img/projects/' + data.bild} alt={data.bild} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withLangSwitchListener(withRouter(ResearchDetails));