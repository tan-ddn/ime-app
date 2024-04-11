import React, { useState, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MainNavToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({clicked: !(this.state.clicked)});
    }

    render() {
        var clicked = this.state.clicked;
        var className = clicked ? 'nav-toggle active' : 'nav-toggle';
        return (
            <div className={className} onClick={this.handleClick}>
            <FontAwesomeIcon icon="bars" />
            <FontAwesomeIcon icon="times" />
            </div>
        )
    }
}
