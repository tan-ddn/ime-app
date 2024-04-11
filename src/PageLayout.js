import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, withRouter } from 'react-router-dom';
import { Home, About, Team, TeamProfile, Research, Equipment, ResearchProject, ProjectDetails, EquipmentCategory, Study, Association, Excursions, NetworkPartners, UniDetails, ThesisTopic, Imprint, Publications, News, HomeDev } from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import PhpTestPage from './components/PhpTest/PhpTestPage';
import withGetDb from './control/withGetDb';
// import Dashboard from './components/Dashboard';
import withLangSwitchListener from './components/Languages/LangSwitchListener';
import Alumni from './components/Pages/Alumni';
import Preise from './components/Pages/Preise';
import imeAPICalls from './imeAPICalls';
import PropTypes, { instanceOf } from 'prop-types';
import { globalLangStateContext } from './UserContext';
import CookieConsent from "react-cookie-consent";

let APICalls = new imeAPICalls();

const TeamGetDb = withGetDb(
    Team,
    () => APICalls.get({ endpoint: 'Team/Groups' })
);
const AlumniGetDb = withGetDb(
    Alumni,
    () => APICalls.get({ endpoint: 'Team/Groups' })
);
const NewsGetDb = withGetDb(
    News,
    () => APICalls.get({ endpoint: 'News/RecentNewsticker' })
);
const sitemap = [
    { path: "/test", component: PhpTestPage, name: 'PHP Test Page', exact: true },
    { path: "/", component: Home, name: 'Home', exact: true },
    { path: "/home", component: HomeDev, name: 'HomeDev', exact: true },
    { path: "/about", component: About, name: 'About', exact: true },
    { path: "/preise", component: Preise, name: 'Preise', exact: true },
    { path: "/team", component: TeamGetDb, name: 'Team', exact: true },
    { path: "/team/:id", component: TeamProfile, name: 'TeamProfile', exact: true },
    { path: "/alumni", component: AlumniGetDb, name: 'Alumni', exact: true },
    { path: "/research", component: Research, name: 'Research', exact: true },
    { path: "/research/:id", component: ResearchProject, name: 'Research Projects', exact: true },
    { path: "/research/project/:id", component: ProjectDetails, name: 'Project Details', exact: true },
    { path: "/publications", component: Publications, name: 'Publications', exact: true },
    { path: "/equipment", component: Equipment, name: 'Equipment', exact: true },
    { path: "/equipment/:id", component: EquipmentCategory, name: 'Equipment Category', exact: true },
    { path: "/study", component: Study, name: 'Study', exact: true },
    { path: "/study/thesistopic/:id", component: ThesisTopic, name: 'Thesis Topic', exact: true },
    { path: "/association", component: Association, name: 'Association', exact: true },
    { path: "/excursions", component: Excursions, name: 'Excursions', exact: true },
    { path: "/network", component: NetworkPartners, name: 'Network Partners', exact: true },
    { path: "/unidetails/:id", component: UniDetails, name: 'Uni Details', exact: true },
    { path: "/imprint", component: Imprint, name: 'Imprint', exact: true },
    { path: "/news", component: NewsGetDb, name: 'News', exact: true },
]

class PageLayout extends Component {

    static get propTypes() {
        return {
            context: PropTypes.any,
        };
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            // let id = location.hash.substring(1);
            window.useScrollTo();
        });
    }

    componentDidUpdate() {
        // let id = window.location.hash.substring(1);
        // window.useScrollTo();
        // console.log(id);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        if (!this.context.webText) return '';
        // let sitemapRender = ;
        return (
            <div className="page-wrap">
                <Header />
                {/* <HeaderNav/> */}
                <Switch>
                    {sitemap.map((e, i) => {
                        return (
                            <Route key={i} path={e.path} exact={e.exact} name={e.name} render={(props) => (
                                <e.component {...props} />
                                // <globalLangStateContext.Consumer>
                                //     {({ language }) => (
                                // <e.component {...props} context={{ language }} />
                                // )}
                                // </globalLangStateContext.Consumer>
                            )} />
                        )
                    })}
                    {/* <Route path="/test" exact component={() => <PhpTestPage />} />
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/preise" exact component={() => <Preise />} />
                    <Route path="/team" exact component={() => <TeamGetDb />} />
                    <Route path="/alumni" exact component={() => <AlumniGetDb />} />
                    <Route path="/team/:id" exact component={() => <TeamProfile />} />
                    <Route path="/research" exact component={() => <Research />} />
                    <Route path="/research/:id" exact component={() => <ResearchProject />} />
                    <Route path="/research/project/:id" exact component={() => <ProjectDetails />} />
                    <Route path="/publications" exact component={() => <Publications />} />
                    <Route path="/equipment" exact component={() => <Equipment />} />
                    <Route path="/equipment/:id" exact component={() => <EquipmentCategory />} />
                    <Route path="/study" exact component={() => <Study />} />
                    <Route path="/study/thesistopic/:id" exact component={() => <ThesisTopic />} />
                    <Route path="/association" exact component={() => <Association />} />
                    <Route path="/excursions" exact component={() => <Excursions />} />
                    <Route path="/network" exact component={() => <NetworkPartners />} />
                    <Route path="/unidetails/:id" exact component={() => <UniDetails />} />
                    <Route path="/imprint" exact component={() => <Imprint />} />
                    <Route path="/news" exact component={() => <NewsGetDb />} /> */}

                    {/* <Route path="/dashboard" exact component={() => <Dashboard />} /> */}
                </Switch>

                <Footer />
                <ScrollTop />
                <CookieConsent
                    buttonText={this.context.webText.button.i_understand}
                    buttonStyle={{ color: "#fff", backgroundColor: "#00539f", fontSize: "1em" }}>
                    {this.context.webText.cookie.text}
                </CookieConsent>
            </div>
        );
    }
}
PageLayout.contextType = globalLangStateContext;
export default withRouter(withLangSwitchListener(PageLayout));