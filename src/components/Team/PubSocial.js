import React, { Component } from 'react';
import Db from '../../control/class.db';

export default class PubSocial extends Component {
    constructor(props) {
        super(props);

    }

    pubLink(type, link) {
        let alt = '', src = process.env.PUBLIC_URL + '/img/icons/';
        switch(type) {
            case 'researchgate':
                alt = 'Research Gate';
                src += 'icon_scopus.png';
                break;
            case 'googlescholar':
                alt = 'Google Scholar';
                src += 'icon_google_scholar.png';
                break;
            case 'scopus':
                alt = 'Scopus';
                src += 'rg_logo.png';
                break;
            case 'orcid':
                alt = 'Orcid';
                src += 'icon_orcid.png';
                break;
            default:
                alt = 'Unknown';
        }
        let pl = <div className="pl-wrap">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} />
            </a>
        </div>
        return pl;
    }

    render() {
        let pubLinks = '', pubSocial = [];
        if (this.props.data.success) {
            pubSocial = this.props.data.results[0];
            // console.log(pubSocial);
            pubLinks = Object.entries(pubSocial).map(([key, value]) => {
                return this.pubLink(key, value);
            });
        }
        return(
            <div className="publication-links">
                {pubLinks}
            </div>
        );
    }
}