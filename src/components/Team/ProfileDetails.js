import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Db from '../../control/class.db';
import StringHandle from '../../utility/stringHandle';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class ProfileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: Db.get('GroupTitleFromProfile', this.props.id).then((res) => res),
            topic: Db.get('ResearchTopicFromProfile', this.props.id).then((res) => res),
        }
    }    

    componentDidMount() {
        // Db.getWithId('GroupTitleFromProfile', this.props.id).then((res) => {
        Db.get('GroupTitleFromProfile', this.props.id).then((res) => {
            this.setState({group: res});
        });
        // Db.getWithId('ResearchTopicFromProfile', this.props.id).then((res) => {
        Db.get('ResearchTopicFromProfile', this.props.id).then((res) => {
            this.setState({topic: res});
        });
        //this.updateLang();
    }
  
    render() {
        let profile = null, groupTitle = '', topicHtml = '';
        if (this.props.data.success) {
            profile = this.props.data.results[0];
            // console.log(profile);
            let title = '';
            if (profile.t_titel != 16) title = profile.tt_titel;
            profile.name = title + ' ' + profile.t_vorname + ' ' + profile.t_name;
            profile.image = process.env.PUBLIC_URL + '/img/team/' + profile.t_bild;
        }
        if (this.state.group.success) {
            let group = this.state.group.results[0];
            // console.log(group);
            groupTitle = (localStorage.getItem('lang') == 'ge') ? group.te_einteilung : group.te_einteilung_eng;
        }
        if (this.state.topic.success) {
            let topic = this.state.topic.results[0];
            // console.log(group);
            topicHtml = <Link to={'/research/'+topic.frdp_id} >{(localStorage.getItem('lang') == 'ge') ? topic.frdp_title : topic.frdp_title_eng}</Link>;
        }
        return(
            <div className="">
                <h2 className="heading"><Link className="d-inline-block " to="/team">Team</Link> <span className="text-dark">&#187; {StringHandle.capitalize(groupTitle)}</span></h2>
                <div className="intro-wrap p-4 bg-grey text-left">
                    <div className="px-2">
                        {profile && 
                        <div className="row">
                            <div className="py-2 col-12 col-sm-2">
                                <div className="profile-img">
                                <img src={profile.image} alt="IME Team" />
                                </div>
                            </div>
                            <div className="py-2 col-12 col-sm-10">
                                <h4>{profile.name}</h4>
                                <div className="row">
                                    {/* <div className="py-2 col-12 col-sm-4" dangerouslySetInnerHTML={{__html: this.state.intro}} /> */}
                                    <div className="py-2 col-12 col-sm-6">
                                        <dl>
                                            <dt>Job:</dt>
                                            <dd>{(localStorage.getItem('lang') == 'ge') ? StringHandle.capitalize(profile.t_beruf) : StringHandle.capitalize(profile.t_beruf_eng)}</dd>
                                        </dl>
                                        <dl>
                                            <dt>Topic: {topicHtml}</dt>
                                            <dd dangerouslySetInnerHTML={{__html: (localStorage.getItem('lang') == 'ge') ? profile.t_gebiet1 : profile.t_gebiet1_eng}} />
                                        </dl>
                                        {profile.t_gebiet2_eng &&
                                        <dl><dt>Supervision:</dt><dd dangerouslySetInnerHTML={{__html: (localStorage.getItem('lang') == 'ge') ? profile.t_gebiet2 : profile.t_gebiet2_eng}} /></dl>
                                        }
                                    </div>
                                    <div className="py-2 col-12 col-sm-6">
                                        <p><b>Contact:</b></p>
                                        <p>{profile.t_unternehmen1}<br/>
                                        {profile.t_unternehmen2}<br/>
                                        {profile.t_strasse}<br/>
                                        {profile.t_plz}</p>
                                        {/* </div>
                                        <div className="py-2 col-12 col-sm-4"> */}
                                        <table border="0">
                                        <tbody>
                                            <tr>
                                                <td style={{width:'24%'}}>Room:</td>
                                                <td>{profile.t_raum}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td>{profile.t_tel}</td>
                                            </tr>
                                            <tr>
                                                <td>Fax:</td>
                                                <td>{profile.t_fax}</td>
                                            </tr>
                                            <tr>
                                                <td>Email: </td>
                                                <td><a href={"mailto:"+profile.t_mail}>{profile.t_mail}</a></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default withLangSwitchListener(ProfileDetails);