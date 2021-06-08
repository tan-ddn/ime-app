import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.scss';

export default class StyledPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: this.props.trigger
        };
    }

    renderTitle(linkTitle) {
    }
    render() {
        let className = "popup-trigger " + this.props.className;
        const trigger = (this.state.trigger) ? React.createElement('span', {className:className}, this.state.trigger) : React.createElement('span', {className:className}, this.props.children);
        return (
            <Popup trigger={trigger} modal>
                {close => (
                    <div className="">
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    {this.props.children}
                    </div>
                )}             
            </Popup>
        )
    }
}