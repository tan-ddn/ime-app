import React from 'react';
import { Link } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';

export default class SideNav extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            heading: this.props.heading,
            content: this.props.content
        }
    }

    render() {
        let className = "side-nav pb-3 " + this.props.className;
        return(
            <div id={this.props.id} className={className} >
                <h2 className="heading">{this.state.heading}</h2>
                <ul className="nav flex-column pt-2">
                    {this.state.content.map((elm, index) => (
                        <li className="nav-item">
                            <Link className="nav-link" to={elm.url}>
                                {elm.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

SideNav.defaultProps = {
    heading: 'Navigation',
  };