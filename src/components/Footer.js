import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { globalLangStateContext } from '../UserContext';

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
    let texts = (this.context.webText) ? this.context.webText : null;
    return (texts == null) ? '' : (
        <div id="site-footer">
        <div id="before-site-info">
            <div className="footer-container">
                <h5>{texts.home.ime_process_metallurgically_and_metal_recycling}
                <br/>{texts.home.chair_of_the_rwth_university}</h5>
                <div className="row no-gutters0 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-auto0 py-2">
                        <b>{texts.home.address}:</b>
                        <p style={{'marginLeft': '0px'}}>Intzestr. 3<br/>
                            52056 Aachen<br/>
                            Gebäude 1401</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-auto0 py-2">
                        <p>{texts.home.phone}: +49 241 80 95851<br/>
                            Fax: +49 241 80 92154<br/>
                            Email: <a href="mailto:institut@ime-aachen.de">institut@ime-aachen.de</a><br/>
                            URL: <a href="http://www.metallurgie.rwth-aachen.de">www.metallurgie.rwth-aachen.de</a></p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-auto0 py-2">
                        <b>{texts.home.social_network}:</b>
                        <ul>
                            {/* <li><Link to="/association">{texts.home.ime_society}</Link></li> */}
                            {/* <li><Link to="/excursions">Excursions</Link></li>
                            <li><Link to="/network">Network &amp; Partners</Link></li> */}
                        </ul>
                        <ul className="social-menu footer-menu">
                        <li className="menu-item">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.researchgate.net/profile/Bernd_Friedrich" title="ResearchGate">
                                    <img alt="ResearchGate icon" src={process.env.PUBLIC_URL + '/img/icons/rg_logo.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a rel="noopener noreferrer" target="_blank" href="https://de.wikipedia.org/wiki/Institut_und_Lehrstuhl_f%C3%BCr_Metallurgische_Prozesstechnik_und_Metallrecycling" title="Wikipedia">
                                    <img alt="Wikipedia icon" src={process.env.PUBLIC_URL + '/img/icons/120px-wikipedia.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/ime-process-metallurgy-and-metal-recycling" title="LinkedIn">
                                    <img alt="LinkedIn icon" src={process.env.PUBLIC_URL + '/img/icons/LinkedIn2.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/ime_rwth?igshid=wd2tyd7dg6b6" title="Instagram">
                                    <img alt="Instagram icon" src={process.env.PUBLIC_URL + '/img/icons/132px-Instagram.png'} />
                                    </a>
                                </li>
                        </ul>
                    </div>
                    {/* <div className="col-12 col-md-6 col-lg-3 col-xl-auto py-2">
                        
                    </div> */}
                </div>
            </div>
            <div className="footer-logo-wrap">
                    <div className="footer-logo d-flex align-items-center">
                        <img alt="IME icon" src={process.env.PUBLIC_URL + '/img/ime_logo1.png'} />
                    </div>
            </div>
        </div>
        <div id="site-info">
            <div className="container">
                <div className="row no-gutters">
                <div className="col-12 col-lg-4 col-sm-6">
                    {/* <h3 className="">RWTH</h3> */}
                    <ul>
                    <li className="">
                        <Link to="/imprint" title="Imprint (Footer)">{texts.home.imprint}</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 col-sm-6">
                    {/* <h3 className="">Contacts</h3> */}
                    <ul>
                    <li className="">
                        <Link to="/imprint#liability" title="Privacy Policy (Footer)">{texts.home.privacy_policy}</Link>
                    </li>
                    </ul>
                </div>
                {/* <div className="col-12 col-lg-3 col-sm-6"> */}
                    {/* <h3 className="">Contacts</h3> */}
                    {/* <ul>
                    <li className="">
                        <Link to="/imprint#terms" title="Terms of service (Footer)">Terms of service</Link>
                    </li>
                    </ul>
                </div> */}
                <div className="col-12 col-lg-4 col-sm-6">
                    <ul>
                    <li className="">
                        <Link to="/" title="Main Page (Footer)">{texts.home.main_page}</Link>
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
Footer.contextType = globalLangStateContext;
export default withRouter(Footer);