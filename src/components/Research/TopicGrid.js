import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '../Boxes/Box';
import Db from '../../control/class.db';
import StringHandle from '../../utility/stringHandle';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class TopicGrid extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get({action: 'AllResearch'}).then(res => res)
        }
    }

    componentDidMount() {
        Db.get({action: 'AllResearch'}).then((res) => {
            this.setState({data: res});
        });
    }

    render() {
        let boxContent = Array();
        if (this.state.data.success) {
            this.state.data.results.forEach((elm, index) => {
                boxContent[index] = {
                    id: elm.id,
                    title_eng: elm.title_eng,
                    title: elm.title,
                    image: process.env.PUBLIC_URL + '/img/projects/' + elm.bild,
                    button: 'Read More',
                    buttonUrl: '/research/'+elm.id,
                    // description: '<p>' + elm.description + '</p><a class="btn btn-primary" href="">Read more</a>'
                    description_eng: elm.description_eng,
                    description: elm.description
                };
            });
        }
        
        return(
            <div className="research-topics">
                <div className="row">
                    {boxContent.map((elm, index) => (
                    //  {this.state.topics.map((elm, index) => (
                        <div className="col-12 col-lg-4 d-flex">
                            <Box id={"research-"+elm.id} key={index} content={elm} type="research" classNames="topic-box rounded bg-darkblue0"/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withLangSwitchListener(TopicGrid);