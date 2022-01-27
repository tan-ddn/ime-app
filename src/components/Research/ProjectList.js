import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import Db from '../../control/class.db';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class projectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Db.get({action: 'ProjectFromResearch', id: this.props.id}).then(res => res),
        }
    }    

    componentDidMount() {
        Db.get({action: 'ProjectFromResearch', id: this.props.id}).then((res) => {
            this.setState({data: res});
        });
    }

    render() {
        let projects = [];
        let projectsHTML = 'Loading...';
        if (this.state.data.success) {
            projects = this.state.data.results;
            console.log(projects);
            projectsHTML = projects.map((elm) => (
                <li className="py-2"><Link to={'/research/project/'+elm.id}>{(localStorage.getItem('lang') == 'ge') ? elm.title : elm.title_eng}</Link></li>
            ))
        }
        return(
            <div id="project-list" className="">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <ul>{projectsHTML}</ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default withLangSwitchListener(withRouter(projectList));