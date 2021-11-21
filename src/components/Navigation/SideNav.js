import React from 'react';
import { Link } from 'react-router-dom';
import withLangSwitchListener from '../Languages/LangSwitchListener';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';

class SideNav extends ResponsiveComponent {
    constructor(props) {
        super(props);

    }

    render() {
        let className = "side-nav pb-3 " + this.props.className;
        return(
            <div id={this.props.id} className={className} >
                <h2 className="heading">{this.props.heading}</h2>
                <ul className="nav flex-column pt-2">
                    {this.props.content.map((elm, index) => (
                        <li className="nav-item">
                            <Link className="nav-link" to={elm.url}>
                                {(localStorage.getItem('lang') == 'ge') ? elm.title : elm.title_eng}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default withLangSwitchListener(SideNav);

SideNav.defaultProps = {
    heading: 'Navigation',
  };