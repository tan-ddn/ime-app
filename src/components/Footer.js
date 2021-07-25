import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends Component {

    // useScrollTo = id => {
    //     // console.log(id);
    //     if (id) {
    //         const el = document.getElementById(id);
    //         // console.log(el);
    //         const top = (el) && window.scrollY + el.getBoundingClientRect().top;
    //         window.scrollTo({ top, behavior: "smooth" });
    //     }
    // }

    // componentDidMount() {
    //     this.unlisten = this.props.history.listen((location, action) => {
    //         let id = location.hash.substring(1);
    //         this.useScrollTo(id);
    //     });
    // }

    // componentDidUpdate() {
    //     let id = window.location.hash.substring(1);
    //     this.useScrollTo(id);        
    // }

    // componentWillUnmount() {
    //     this.unlisten();
    // }
  
  render() {
    return (
        <div id="site-footer">
        <div id="before-site-info">
            <div className="footer-container">
                <h5>IME - Metallurgische Prozesstechnik und Metallrecycling
                <br/>Institut und Lehrstuhl der RWTH Aachen </h5>
                <div className="row no-gutters0 justify-content-between">
                    <div className="col-12 col-md-6 col-xl-auto">
                        <b>Social Activities:</b>
                        <ul>
                            <li><Link to="/association">IME-Society</Link></li>
                            <li><Link to="/excursions">Excursions</Link></li>
                            <li><Link to="/network">Network &amp; Partners</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-xl-auto">
                        <b>Address:</b>
                        <p style={{'marginLeft': '0px'}}>Intzestr. 3<br/>
                            52056 Aachen<br/>
                            Gebäude 1401</p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-auto">
                        <p>Phone: +49 241 80 95851<br/>
                            Fax: +49 241 80 92154<br/>
                            Email: <a href="mailto:institut@ime-aachen.de">institut@ime-aachen.de</a><br/>
                            URL: <a href="www.ime-aachen.de">www.ime-aachen.de</a></p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-auto">
                        <ul className="social-menu footer-menu">
                                <li className="menu-item">
                                    <a target="_blank" href="researchgate" title="ResearchGate">
                                    <img alt="ResearchGate icon" src={process.env.PUBLIC_URL + '/img/icons/rg_logo.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="wiki" title="Wikipedia">
                                    <img alt="Wikipedia icon" src={process.env.PUBLIC_URL + '/img/icons/120px-wikipedia.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="LinkedIn" title="LinkedIn">
                                    <img alt="LinkedIn icon" src={process.env.PUBLIC_URL + '/img/icons/LinkedIn2.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="instagram" title="Instagram">
                                    <img alt="Instagram icon" src={process.env.PUBLIC_URL + '/img/icons/132px-Instagram.png'} />
                                    </a>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-logo-wrap">
                    <div className="footer-logo d-flex align-items-center">
                        <img alt="IME icon" src={process.env.PUBLIC_URL + '/img/ime_logo.png'} />
                    </div>
            </div>
        </div>
        <div id="site-info">
            <div className="container">
                <div className="row no-gutters">
                <div className="col-6 col-lg-3">
                    {/* <h3 className="">RWTH</h3> */}
                    <ul>
                    <li className="">
                        <Link to="/imprint" title="Imprint (Footer)">Imprint</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    {/* <h3 className="">Contacts</h3> */}
                    <ul>
                    <li className="">
                        <Link to="/imprint#liability" title="Privacy Policy (Footer)">Privacy Policy</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    {/* <h3 className="">Contacts</h3> */}
                    <ul>
                    <li className="">
                        <Link to="/imprint#terms" title="Terms of service (Footer)">Terms of service</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    <ul>
                    <li className="">
                        <Link to="/" title="Main Page (Footer)">Main Page</Link>
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
export default withRouter(Footer);