import React, { Component } from 'react';
import HeaderNav from './HeaderNav';

export default class Header extends Component {
  render() {
    return (
        <div id="header" className="">
        <div className="header-container d-flex align-items-start justify-content-stretch">
        {/* <div id="topbar">
            <div id="navigator" role="navigation">
                <div id="navigator-inner" style={{height: '0px'}}>
                    <h2>
                        RWTH Aachen University
                    </h2>
                    <div className="separator"></div>
                    <p>Welcome to IME Process Metallurgy and Metal Recycling</p>
                </div>
            </div>
            <div className="topbar-menu-container">
            <div id="tools-menu-wrapper">
                <ul className="tools-menu topbar-menu">
                    <li className="menu-item">
                        <a href="contact" title="Contact">
                        <img src={process.env.PUBLIC_URL + '/img/icons/icon-347234_640.png'} />
                        </a>
                    </li>
                    <li className="menu-item" title="Imprint">
                        <a href="imprint">
                        <img src={process.env.PUBLIC_URL + '/img/icons/information-1481584_640.png'} />
                        </a>
                    </li>
                </ul>
            </div>
            <div id="social-menu-wrapper">
                <ul className="social-menu topbar-menu">
                    <li className="menu-item">
                        <a href="instagram" title="Instagram">
                        <img src={process.env.PUBLIC_URL + '/img/icons/132px-Instagram.png'} />
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="researchgate" title="ResearchGate">
                        <img src={process.env.PUBLIC_URL + '/img/icons/rg_logo.png'} />
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="wiki" title="Wikipedia">
                        <img src={process.env.PUBLIC_URL + '/img/icons/120px-wikipedia.png'} />
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div> */}
        <div id="branding" role="banner" style={{marginTop: '0px'}}>
            <div id="branding-box">
                <div id="branding-inner">
                    <p className="skip">
                    <a href="#main">Skip to Content</a>
                    <a href="#nav-global">Jump to Main Navigation</a>
                    <a href="#search-box">Skip to Search</a>
                    <a href="#" id="stop-stage-button">Stop image animation</a>
                    </p>
                    <div className="ime-logo-container">
                    <div className="ime-logo">
                        <img src={process.env.PUBLIC_URL + '/img/ime_logo.png'} />
                    </div>
                    </div>
                    {/* <div className="vertical-separator"></div>
                    <div id="branding-logo" className="d-flex justify-content-around align-items-center ">
                        <a href="http://www.muw.rwth-aachen.de/">
                            <img src={process.env.PUBLIC_URL + '/img/logos/muw_logo.png'} alt="MUW Logo" title="MUW Logo" />
                        </a>
                        <div className="vertical-separator"></div>
                        <a href="http://www.fb5.rwth-aachen.de/">
                            <img style={{float: 'right'}} src={process.env.PUBLIC_URL + '/img/logos/fakultaet_logo.png'} alt="Falkultät Logo" title="Falkultät Logo" />
                        </a>
                    </div> */}
                    {/* <h2 id="logo-extension">Welcome to IME Process Metallurgy and Metal Recycling</h2> */}
                    <div className="vertical-separator">
                        <img src={process.env.PUBLIC_URL + '/img/header_sep.png'} /></div>
                    <div className="ime-logo-container">
                    <div className="ime-logo">
                        <img src={process.env.PUBLIC_URL + '/img/rwth_logo.png'} />
                    </div>
                    </div>
                    {/* <div className="header-right">
                        
                        <div id="nav-meta" role="navigation">
                        <ul>
                            <li><a href="/cms/~mye/Materialwissenschaft-und-Werkstofftechni/">Deutsch</a></li>
                        </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <HeaderNav/>
        </div>
        </div>
    )
  }
}