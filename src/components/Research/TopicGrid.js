import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '../Box';

export default class TopicGrid extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            greenLogoAlign: 'right',
            topics: this.props.topics
        }
    }


    render() {
        let greenLogoAlign = (this.state.screenSize === 'xs') ? 'center' : 'right';
        let boxContent = Array();
        this.state.topics.forEach((elm, index) => {
            boxContent[index] = {
                id: elm.id,
                title: elm.title,
                image: elm.image,
                button: 'Read More',
                buttonUrl: elm.buttonUrl,
                // description: '<p>' + elm.description + '</p><a class="btn btn-primary" href="">Read more</a>'
                description: elm.description
            };
        });
        return(
            <div className="research-topics">
                <div className="row">
                    {boxContent.map((elm, index) => (
                    //  {this.state.topics.map((elm, index) => (
                        <div className="col-12 col-lg-4 d-flex">
                            <Box key={index} content={elm} type="research" classNames="topic-box rounded bg-darkblue0"/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}