import React from 'react';
import { Link } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';

export default class ProjectDetailsBox extends ResponsiveComponent {
    constructor(props) {
        super(props);

    }

    render() {
        let projectDes = 'Loading...';
        let basicDetails = [];
        if (this.props.content) {
            let projectDetails = this.props.content;
            console.log(projectDetails);
            projectDes = projectDetails.description_eng;
            basicDetails = Object.assign({}, projectDetails);

            switch (basicDetails.projekt_art) {
                case '1':
                    basicDetails.project_typ = "Verbundforschung";
					break;
				case '2':
					basicDetails.project_typ = "Grundlagenforschung";
					break;
				case '3':
					basicDetails.project_typ = "Stipendium";
					break;
				default:
					basicDetails.project_typ = "No information";
            }

            delete basicDetails.title;
            delete basicDetails.bild;
            delete basicDetails.projekt_art;
            delete basicDetails.netzwerkordner;

            delete basicDetails.description;
            delete basicDetails.description_eng;
            delete basicDetails.id;
            // console.log(this.state.projectDetails.description);
        }
        
        return(
            <div className="row">
                <div className="py-2 col-12 col-sm-40 text-left0">
                    {Object.keys(basicDetails).map((key, index) => {
                        let keyText = key;
                        switch (key) {
                            case 'project_typ':
                                keyText = 'Type';
                                break;
                            case 'title_eng':
                                keyText = 'Title';
                                break;
                            case 'timeperiod':
                                keyText = 'Duration';
                                break;
                            default:
                                keyText = key;
                        }
                        return (<dl key={index}>
                            <dt className="text-capitalize">{keyText}</dt>
                                <dd>{basicDetails[key]}</dd>
                            </dl>
                        )
                    })}
                </div>
                <div className="py-2 col-12 col-sm-80">
                    <dl>
                        <dt>Description</dt>
                        <dd><SanitizedHTML html={projectDes} /></dd>
                    </dl>
                </div>
            </div>
        )
    }
}
