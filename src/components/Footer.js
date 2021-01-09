import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <div id="site-footer">
        <div id="before-site-info">
            <div className="footer-container">
                <h5>IME - Metallurgische Prozesstechnik und Metallrecycling
                <br/>Institut und Lehrstuhl der RWTH Aachen </h5>
                <div className="row no-gutters">
                    <div className="col-3">
                        <p>Intzestr. 3<br/>
                            52056 Aachen<br/>
                            Gebäude 1401</p>
                    </div>
                    <div className="col-3">
                        <p>Phone: +49 241 80 95851<br/>
                            Fax: +49 241 80 92154<br/></p>
                    </div>
                    <div className="col-3">
                        <p>Email: <a href="mailto:institut@ime-aachen.de">institut@ime-aachen.de</a><br/>
                            URL: <a href="www.ime-aachen.de">www.ime-aachen.de</a></p>
                    </div>
                    <div className="col-3">
                        <ul className="social-menu footer-menu">
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
            </div>
            <div className="footer-logo-wrap">
                    <div className="footer-logo d-flex align-items-center">
                        <img src={process.env.PUBLIC_URL + '/img/ime_logo.png'} />
                    </div>
            </div>
        </div>
        <div id="site-info">
            <div className="container">
                <div className="row no-gutters">
                <div className="col-3">
                    {/* <h3 className="">RWTH</h3> */}
                    <ul>
                    <li className="">
                        <a href="imprint" title="Imprint (Footer)">Imprint</a>
                    </li>
                    </ul>
                </div>
                <div className="col-3">
                    {/* <h3 className="">Contacts</h3> */}
                    <ul>
                    <li className="">
                        <a href="privacy" title="Privacy Policy (Footer)">Privacy Policy</a>
                    </li>
                    </ul>
                </div>
                <div className="col-3">
                    {/* <h3 className="">Contacts</h3> */}
                    <ul>
                    <li className="">
                        <a href="privacy" title="Terms of service (Footer)">Terms of service</a>
                    </li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                    <li className="">
                        <a href="terms" title="Main Page (Footer)">Main Page</a>
                    </li>
                    </ul>
                </div>
                {/* <div className="col-3">
                    <div class="ime-logo">
                        <img src={process.env.PUBLIC_URL + '/img/ime_icon.png'} />
                    </div>
                </div> */}
                {/* <div className="col-3">
                    {/* <h3 className="">Imprint</h3> */}
                    {/* <ul className="social-menu footer-menu">
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
                </div> */}
                {/* <div className="last-child">
                    <h3 className="">Services</h3>
                    <ul>
                    </ul>
                </div> */}
                </div>
                
            </div>
        </div>
        </div>
    )
  }
}