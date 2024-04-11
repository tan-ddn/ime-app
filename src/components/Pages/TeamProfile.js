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
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';

let intro = '<dl><dt>Job:</dt><dd>Professor</dd><dt>Topic:</dt><dd>Head of the institute</dd></dl>';

const APIcalls = new imeAPICalls();
const ProfileDetailsGetDb = withGetDb(
    ProfileDetails,
    (props) => APIcalls.get({ endpoint: 'Team/Member', id: props.id})
);
const PubSocialGetDb = withGetDb(
    PubSocial,
    (props) => APIcalls.get({ endpoint: 'Team/PubSocialLinks', id: props.id})
);

class TeamProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            intro: intro,
            hasPublication: false,
            // groups: Constants.groups,
            // publications: Constants.publications
        }
    }    

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.fetchData();
        }
    }

    fetchData() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        APIcalls.get({endpoint: 'Team/HasPublication', id: id}).then((res) => {
            if (res.hasPublication == 1) {
                this.setState({ hasPublication: true });
            } else {
                this.setState({ hasPublication: false });
            }
        });
    }
    
    render() {
        if (!this.context.webText) return '';
        // let profileId = this.props.match.params.id;
        // const profile = this.state.groups[0].members.find(elm => elm.id == profileId);
        // console.log(profile);
        return(
            <div className="team-profile">
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
                                    {(this.state.hasPublication) && <>
                                        <h2 className="heading">{this.context.webText.publications.title}</h2>
                                        <div className="row">
                                            <div className="col-8"></div>
                                            <div className="col-4">
                                                <PubSocialGetDb id={this.state.id} />
                                            </div>
                                        </div>
                                        <PublicationTable thead="1" teamId={this.state.id} className="mt-3"/>
                                    </>}
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
TeamProfile.contextType = globalLangStateContext;
export default withRouter(TeamProfile);