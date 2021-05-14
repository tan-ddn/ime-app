import React from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import ResponsiveComponent from './ResponsiveComponent';
// import MainNavToggle from './MainNavToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderNav extends ResponsiveComponent {
  constructor(props) {
      super(props);
      this.state = {
          clicked: false,
          className: this.props.className + ' vertical'
      };
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();
    this.unlisten = this.props.history.listen((location, action) => {
      // console.log('on route change');
      this.setState({clicked: false});
      this.state.className = this.state.className.replaceAll(' active', ' ');window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleClick() {
      this.setState({clicked: !(this.state.clicked)});
      if (this.state.clicked) {
        this.state.className = this.state.className.replaceAll(' active', ' ');
      } else {
        this.state.className += ' active';
      }
  }

  render() {
    // let mobileNav;
    // switch (this.state.screenSize) {
    //   case 'xs':
    //   case 'sm':
    //   case 'md':
    //     mobileNav = true;
    //     break;
    //   default:
    //     mobileNav = false;
    //     break;
    // }
    // if (mobileNav) this.state.className += ' mobile-nav';

    // var orientation = this.state.screenOrientation;
    // console.log('Screen orientation: '+orientation);
    // this.state.className += ' ' + orientation;
    if (this.state.screenOrientation === 'horizontal') {
      this.state.className = this.state.className.replaceAll(' vertical', ' horizontal');
    } else {
      this.state.className = this.state.className.replaceAll(' horizontal', ' vertical');
    }

    return (
      <div id={this.props.id} role="navigation" className={this.state.className}>
        {/* <div className="ime-logo-container">
          <div className="ime-logo">
            <img src={process.env.PUBLIC_URL + '/img/ime_icon.png'} />
          </div>
        </div> */}
        <h2>Navigation</h2>
        <div className="nav-toggle" onClick={this.handleClick}>
          <FontAwesomeIcon icon="bars" />
          <FontAwesomeIcon icon="times" />
        </div>
        {/* <MainNavToggle/> */}
        <div className="nav-global-main d-flex align-items-stretch justify-content-end">
          
          <ol className="toc style2">
            <li className="rwth_jsopen">
              <Link to="/about" className="panel" title="About Us (Main Navigation)" aria-controls="nav-section-0" tabIndex={0} aria-expanded="false" role="button" data-href="#">About Us</Link>
            </li>
            <li className="rwth_jsopen">
              <Link to="/team" className="panel" title="Team (Main Navigation)" aria-controls="nav-section-1" tabIndex={1} aria-expanded="false" role="button" data-href="#">Team</Link>
            </li>
            <li className="rwth_jsopen">
            <Link to="/research" className="panel" title="Research (Main Navigation)" aria-controls="nav-section-2" tabIndex={2} aria-expanded="false" role="button" data-href="#">Research</Link>
            </li>
            <li className="rwth_jsopen">
              <a className="panel" title="Equipment (Main Navigation)" aria-controls="nav-section-3" tabIndex={3} aria-expanded="false" role="button" data-href="#">Equipment</a>
            </li>
            <li className="rwth_jsopen">
              <a className="panel" title="Study (Main Navigation)" aria-controls="nav-section-4" tabIndex={4} aria-expanded="false" role="button" data-href="#">Study</a>
            </li>
            {this.props.type === 'mobile-nav' && <>
            <li className="rwth_jsopen">
              <a className="panel" title="News (Main Navigation)" aria-controls="nav-section-5" tabIndex={5} aria-expanded="false" role="button" data-href="#">News</a>
            </li>
            {/* <li className="rwth_jsopen">
              <a className="panel" title="Our Team (Main Navigation)" aria-controls="nav-section-6" tabIndex={6} aria-expanded="false" role="button" data-href="#">Our Team</a>
            </li> */}
            <li className="rwth_jsopen">
              <a className="panel" title="Publications (Main Navigation)" aria-controls="nav-section-7" tabIndex={7} aria-expanded="false" role="button" data-href="#">Publications</a>
            </li>
            {/* <li className="rwth_jsopen">
              <a className="panel" title="Research Areas (Main Navigation)" aria-controls="nav-section-8" tabIndex={8} aria-expanded="false" role="button" data-href="#">Research Areas</a>
            </li> */}
            <li className="rwth_jsopen">
              <a className="panel" title="Public Funded Projects (Main Navigation)" aria-controls="nav-section-9" tabIndex={9} aria-expanded="false" role="button" data-href="#">Public Funded Projects</a>
            </li>
            <li className="rwth_jsopen">
              <a className="panel" title="Social Activities (Main Navigation)" aria-controls="nav-section-10" tabIndex={10} aria-expanded="false" role="button" data-href="#">Social Activities</a>
            </li>
            </>}
          </ol>
          <ol className="toc style3 ml-4">
            <li id="nav-icons">
                            <ul className="tools-menu header-right-menu">
                                <li className="menu-item">
                                    <a href="contact" title="Contact">
                                    <img alt="Contact icon" src={process.env.PUBLIC_URL + '/img/icons/icon-347234_640.png'} />
                                    </a>
                                </li>
                                <li className="menu-item" title="Imprint">
                                    <a href="imprint">
                                    <img alt="Imprint icon" src={process.env.PUBLIC_URL + '/img/icons/information-1481584_640.png'} />
                                    </a>
                                </li>
                                <li className="menu-item" title="Language">
                                    <a href="language">
                                    <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_usa.png'} />
                                    </a>
                                </li>
                                <li className="menu-item" title="Staff login">
                                    <a href="login">
                                    <img alt="Login icon" src={process.env.PUBLIC_URL + '/img/icons/avatar-1577909_640.png'} />
                                    </a>
                                </li>
                            </ul>
                            <ul className="social-menu header-right-menu">
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
                                    <a target="_blank" href="linkedin" title="LinkedIn">
                                    <img alt="LinkedIn icon" src={process.env.PUBLIC_URL + '/img/icons/LinkedIn2.png'} />
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="instagram" title="Instagram">
                                    <img alt="Instagram icon" src={process.env.PUBLIC_URL + '/img/icons/132px-Instagram.png'} />
                                    </a>
                                </li>
                            </ul> 
            </li>
          </ol>
        </div>
        {this.props.type !== 'mobile-nav' && <>
        <div className="nav-global-inner" style={{clear: 'both'}}>
          <div className="nav-global-group">
            <div className="nav-global-wrapper" style={{display: 'none'}}>
              <div className="nav-global-item a11y-js-overflow" id="nav-section-1" aria-expanded="false" role="group">
                <div className="menu">
                  <div className="menu-box">
                    <h3 className="">Academics</h3>
                    <div className="overview">
                      <p>
                        <em className="more">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/~kvt/Studium/lidx/1/" title="To Portal Page (Academics)">To Portal Page</a>
                        </em>
                      </p>
                    </div>
                    <div className="menu-list-box">
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~frii/Aktuelles/lidx/1/" title="Academics > News">News</a>
                        </h4>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~txg/Studieninteressierte/lidx/1/" title="Academics > Before Your Studies">Before Your Studies</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studieninteressierte/~dwrh/Studienangebot/lidx/1/" title="Academics > Before Your Studies > Study Materials Science and Engineering">Study Materials Science and Engineering</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studieninteressierte/~ufh/Zugang-zum-Studium/lidx/1/" title="Academics > Before Your Studies > Admission">Admission</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studieninteressierte/~ufj/Berufsaussichten/lidx/1/" title="Academics > Before Your Studies > Job perspectives">Job perspectives</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studieninteressierte/~uiq/Studieren-in-Aachen/lidx/1/" title="Academics > Before Your Studies > Study at RWTH Aachen University">Study at RWTH Aachen University</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studieninteressierte/~ufl/Events/lidx/1/" title="Academics > Before Your Studies > Events">Events</a>
                          </li>
                          <li>
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~txg/Studieninteressierte/lidx/1/" title="Academics > Before Your Studies > More ...">More ...</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~txi/Studierende/lidx/1/" title="Academics > During Your Studies">During Your Studies</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studierende/~ucp/Beratung/lidx/1/" title="Academics > During Your Studies > Advisory Service">Advisory Service</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studierende/~ucx/Pruefungsausschuesse/lidx/1/" title="Academics > During Your Studies > Board of Examiners">Board of Examiners</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studierende/~ucy/Auslandsaufenthalt/lidx/1/" title="Academics > During Your Studies > Study Abroad">Study Abroad</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studierende/~uda/Exkursionen/lidx/1/" title="Academics > During Your Studies > Excursions">Excursions</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studierende/~udc/Stipendien/lidx/1/" title="Academics > During Your Studies > Scholarships and Awards">Scholarships and Awards</a>
                          </li>
                          <li>
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~txi/Studierende/lidx/1/" title="Academics > During Your Studies > More ...">More ...</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~kwo/Absolventen/lidx/1/" title="Academics > After Graduation">After Graduation</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Absolventen/~kzf/Angebote-fuer-Alumni/lidx/1/" title="Academics > After Graduation > Alumni Services">Alumni Services</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Absolventen/~ufo/Berufseinstieg/lidx/1/" title="Academics > After Graduation > Career Entry">Career Entry</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Absolventen/~ufp/Promotion/lidx/1/" title="Academics > After Graduation > Ph.D.">Ph.D.</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~kwl/Studiengaenge/lidx/1/" title="Academics > Courses of Studies - An Overview">Courses of Studies - An Overview</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studiengaenge/~ufx/Bachelorstudiengaenge/lidx/1/" title="Academics > Courses of Studies - An Overview > Bachelor Degree Programs">Bachelor Degree Programs</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studiengaenge/~fjwu/Masterstudiengaenge/lidx/1/" title="Academics > Courses of Studies - An Overview > Master Degree Programs">Master Degree Programs</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Studiengaenge/~ugh/Auslaufende-Diplomstudiengaenge/lidx/1/" title="Academics > Courses of Studies - An Overview > Auslaufende Diplomstudiengänge">Auslaufende Diplomstudiengänge</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/~kwq/Kontakt/lidx/1/" title="Academics > Contact">Contact</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Kontakt/~gpki/Kontakt-Administrative-Studienberatung/lidx/1/" title="Academics > Contact > Admininstrative Student Advisory">Admininstrative Student Advisory</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Kontakt/~gpkh/Kontakt-Fachstudienberatung/lidx/1/" title="Academics > Contact > Academic Student Advisory">Academic Student Advisory</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Kontakt/~hhlz/Mentoring/lidx/1/" title="Academics > Contact > Mentoring">Mentoring</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Studium/Kontakt/~gpkg/Kontakt-Fachschaft-MuW/lidx/1/" title="Academics > Contact > Student Council">Student Council</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="close" href="#">Close</a>
                </div>
              </div>
            </div>
            <div className="nav-global-wrapper" style={{display: 'none'}}>
              <div className="nav-global-item a11y-js-overflow" id="nav-section-2" aria-expanded="false" role="group">
                <div className="menu">
                  <div className="menu-box">
                    <h3 className="">Research</h3>
                    <div className="overview">
                      <p>
                        <em className="more">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/~kvw/Forschung/lidx/1/" title="To Portal Page (Research)">To Portal Page</a>
                        </em>
                      </p>
                    </div>
                    <div className="menu-list-box">
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~frio/Aktuelles/lidx/1/" title="Research > News">News</a>
                        </h4>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~ugy/Institute/lidx/1/" title="Research > Facilities">Facilities</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Institute/~hwfl/Institute/lidx/1/" title="Research > Facilities > Key Research Areas">Key Research Areas</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Institute/~hwfm/Exelenzcluster/lidx/1/" title="Research > Facilities > Clusters of Excellence">Clusters of Excellence</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Institute/~hwfn/Forschungspartnerschaften/lidx/1/" title="Research > Facilities > Research Partnerships">Research Partnerships</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Institute/~hwjb/Technologietransfer/lidx/1/" title="Research > Facilities > Transfer of Technology">Transfer of Technology</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Institute/~hwjc/RWTH-interne-Kooperationen/lidx/1/" title="Research > Facilities > Cooperations within the RWTH">Cooperations within the RWTH</a>
                          </li>
                          <li>
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~ugy/Institute/lidx/1/" title="Research > Facilities > More ...">More ...</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~kxb/Projekte/lidx/1/" title="Research > Networks">Networks</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Projekte/~bbzi/-der-Fachgruppe/lidx/1/" title="Research > Networks > ...our section takes part in">...our section takes part in</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~uhq/Kontakt/lidx/1/" title="Research > Publications">Publications</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Kontakt/~bcnt/Publikationen-unserer-Institute/lidx/1/" title="Research > Publications > ...our departments issued">...our departments issued</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/~kxc/Publikationen/lidx/1/" title="Research > Contact">Contact</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Forschung/Publikationen/~uhh/Institut-fuer-Eisenhuettenkunde-IEHK-/lidx/1/" title="Research > Contact > Professors">Professors</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="close" href="#">Close</a>
                </div>
              </div>
            </div>
            <div className="nav-global-wrapper" style={{display: 'none'}}>
              <div className="nav-global-item a11y-js-overflow" id="nav-section-3" aria-expanded="false" role="group">
                <div className="menu">
                  <div className="menu-box">
                    <h3 className="">Corporate Relations</h3>
                    <div className="overview">
                      <p>
                        <em className="more">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/~kvy/Wirtschaft/lidx/1/" title="To Portal Page (Corporate Relations)">To Portal Page</a>
                        </em>
                      </p>
                    </div>
                    <div className="menu-list-box">
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Wirtschaft/~frip/Aktuelles/lidx/1/" title="Corporate Relations > News">News</a>
                        </h4>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Wirtschaft/~kxh/Die-Fakultaet-als-Partner/lidx/1/" title="Corporate Relations > The Section as a Partner">The Section as a Partner</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Wirtschaft/Die-Fakultaet-als-Partner/~fnwp/Recruiting/lidx/1/" title="Corporate Relations > The Section as a Partner > Recruiting">Recruiting</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Wirtschaft/Die-Fakultaet-als-Partner/~hyhx/Foerdermoeglichkeiten/lidx/1/" title="Corporate Relations > The Section as a Partner > Funding Opportunities">Funding Opportunities</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Wirtschaft/Die-Fakultaet-als-Partner/~fnwq/Praxisnah-und-Interdisziplinaer/lidx/1/" title="Corporate Relations > The Section as a Partner > Practical and Interdisciplinary">Practical and Interdisciplinary</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="close" href="#">Close</a>
                </div>
              </div>
            </div>
            <div className="nav-global-wrapper" style={{display: 'none'}}>
              <div className="nav-global-item a11y-js-overflow" id="nav-section-4" aria-expanded="false" role="group">
                <div className="menu">
                  <div className="menu-box">
                    <h3 className="">The Division</h3>
                    <div className="overview">
                      <p>
                        <em className="more">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/~kwa/Die-Fachgruppe/lidx/1/" title="To Portal Page (The Division)">To Portal Page</a>
                        </em>
                      </p>
                    </div>
                    <div className="menu-list-box">
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxp/Aktuell/lidx/1/" title="The Division > News">News</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Aktuell/~fpao/Meldungen/lidx/1/" title="The Division > News > News">News</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Aktuell/~fpgk/Veranstaltungen/lidx/1/" title="The Division > News > Events">Events</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxq/Profil/lidx/1/" title="The Division > Profile">Profile</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Profil/~lae/Reputation/lidx/1/" title="The Division > Profile > Goals - Shaping our future">Goals - Shaping our future</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Profil/~nqyb/Profilbereich-MatSE/lidx/1/" title="The Division > Profile > Profilbereich MatSE">Profilbereich MatSE</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxr/Institute-und-Lehrstuehle/lidx/1/" title="The Division > Departments and Chairs">Departments and Chairs</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Institute-und-Lehrstuehle/~uhs/Institut-fuer-Eisenhuettenkunde-IEHK-/lidx/1/" title="The Division > Departments and Chairs > Department of Ferrous Metallurgy (IEHK)">Department of Ferrous Metallurgy (IEHK)</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Institute-und-Lehrstuehle/~uht/Institut-fuer-Gesteinshuettenkunde-GHI-/lidx/1/" title="The Division > Departments and Chairs > Institute of Mineral Engineering (GHI)">Institute of Mineral Engineering (GHI)</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Institute-und-Lehrstuehle/~uhu/Giesserei-Institut-GI-/lidx/1/" title="The Division > Departments and Chairs > Foundry Institute (GI)">Foundry Institute (GI)</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Institute-und-Lehrstuehle/~uhv/Institut-fuer-Bildsame-Formgebung-IBF-/lidx/1/" title="The Division > Departments and Chairs > Institute of Metal Forming (IBF)">Institute of Metal Forming (IBF)</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Institute-und-Lehrstuehle/~uhw/Institut-fuer-Industrieofenbau-und-Waermet/lidx/1/" title="The Division > Departments and Chairs > Department for Industrial Furnaces and Heat Engineering (IOB)">Department for Industrial Furnaces and Heat Engineering (IOB)</a>
                          </li>
                          <li>
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxr/Institute-und-Lehrstuehle/lidx/1/" title="The Division > Departments and Chairs > More ...">More ...</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxs/Einrichtungen/lidx/1/" title="The Division > Institutions">Institutions</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Einrichtungen/~xux/CIP-Pool/lidx/1/" title="The Division > Institutions > CIP-Pool">CIP-Pool</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Einrichtungen/~xuy/Lernraeume/lidx/1/" title="The Division > Institutions > Studying Facilities">Studying Facilities</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Einrichtungen/~xuz/Bibliotheken/lidx/1/" title="The Division > Institutions > Libraries">Libraries</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h4 className="">
                          <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/~kxu/Kontakt-und-Lageplaene/lidx/1/" title="The Division > Contact and Map">Contact and Map</a>
                        </h4>
                        <ul>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Kontakt-und-Lageplaene/~lan/Verwaltung/lidx/1/" title="The Division > Contact and Map > Division's Office">Division's Office</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Kontakt-und-Lageplaene/~lap/Hoersaeale/lidx/1/" title="The Division > Contact and Map > Departments and Chairs">Departments and Chairs</a>
                          </li>
                          <li className="">
                            <a href="/cms/Materialwissenschaft-und-Werkstofftechni/Die-Fachgruppe/Kontakt-und-Lageplaene/~bloa/Mitarbeiter-der-Fachgruppe/lidx/1/" title="The Division > Contact and Map > The Division's Staff">The Division's Staff</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a className="close" href="#">Close</a>
                </div>
              </div>
            </div>
          </div>  
        </div>
        </>}
      </div>
    )
  }
}

export default withRouter(HeaderNav);

HeaderNav.defaultProps = {
  id: 'nav-global',
  className: 'has-subnav'
};