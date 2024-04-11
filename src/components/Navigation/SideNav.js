import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { globalLangStateContext } from '../../UserContext';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';

class SideNav extends ResponsiveComponent {
    constructor(props) {
        super(props);

    }

    render() {
        if (!this.context) return '';
        let className = "side-nav pb-3 " + this.props.className;
        return(
            <div id={this.props.id} className={className} >
                <h2 className="heading">{this.props.heading}</h2>
                <ul className="nav flex-column pt-2">
                    {this.props.content.map((elm, index) => (
                        <li className="nav-item">
                            <Link className="nav-link" to={elm.url}>
                                {(this.context.lang == 'ge') ? elm.title : elm.title_eng}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
SideNav.contextType = globalLangStateContext;
export default withRouter(SideNav);

SideNav.defaultProps = {
    heading: 'Navigation',
};