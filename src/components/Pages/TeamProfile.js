import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";
import PublicationTable from '../Publications/PublicationTable';
import '../Publications/publications.scss';
import { Link } from 'react-router-dom';
import * as Constants from '../../constants';
import ProfileDetails from '../Team/ProfileDetails';
import withGetDb from '../../control/withGetDb';
import PubSocial from '../Team/PubSocial';

let intro = '<dl><dt>Job:</dt><dd>Professor</dd><dt>Topic:</dt><dd>Head of the institute</dd></dl>';

const ProfileDetailsGetDb = withGetDb(
    ProfileDetails,
    (Db, props) => Db.getProfileDetails(props.id)
);
const PubSocialGetDb = withGetDb(
    PubSocial,
    (Db, props) => Db.getPubSocialLinks(props.id)
);

class TeamProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            intro: intro,
            // groups: Constants.groups,
            // publications: Constants.publications
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
    }
    
    render() {
        // let profileId = this.props.match.params.id;
        // const profile = this.state.groups[0].members.find(elm => elm.id == profileId);
        // console.log(profile);
        return(
            <div className="team">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/team/RWTH-FB5-043-1920px.jpg'} transformY='-10%' overlay='dark'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div id="intro" className="py-3">
                                        {/* {this.state.id} */}
                                        <ProfileDetailsGetDb id={this.state.id} />
                                    </div>
                                    <div id="publications" className="py-3">
                                        <h2 className="heading">Publications</h2>
                                        <div className="row">
                                            <div className="col-8"></div>
                                            <div className="col-4">
                                                <PubSocialGetDb id={this.state.id} />
                                            </div>
                                        </div>
                                        {/* <PublicationTable thead="1" publications={this.state.publications} className="mt-3"/> */}
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
export default withRouter(TeamProfile);