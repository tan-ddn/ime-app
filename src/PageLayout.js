import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, withRouter } from 'react-router-dom';
import { Home, About, Team, TeamProfile, Research, Equipment, ResearchProject, ProjectDetails, EquipmentCategory, Study, Association, Excursions, NetworkPartners, UniDetails, ThesisTopic, Imprint, Publications, News } from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import PhpTestPage from './components/PhpTest/PhpTestPage';
import Db from './control/class.db';
import withGetDb from './control/withGetDb';
// import Dashboard from './components/Dashboard';
import withLangSwitchListener from './components/Languages/LangSwitchListener';
import Alumni from './components/Pages/Alumni';
import Preise from './components/Pages/Preise';

const TeamGetDb = withGetDb(
    Team,
    () => Db.get({action: 'TeamGroups'})
);
const AlumniGetDb = withGetDb(
    Alumni,
    () => Db.get({action: 'TeamGroups'})
);
const NewsGetDb = withGetDb(
    News,
    () => Db.get({action: 'RecentNews'})
);

class PageLayout extends Component {

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
        return(
        <div className="page-wrap">
          <Header/>
          {/* <HeaderNav/> */}
          <Switch>
            <Route path="/test" exact component={() => <PhpTestPage />} />
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
            <Route path="/news" exact component={() => <NewsGetDb />} />
            
            {/* <Route path="/dashboard" exact component={() => <Dashboard />} /> */}
          </Switch>

          <Footer/>
          <ScrollTop/>
        </div>
        );
    }
}
export default withRouter(withLangSwitchListener(PageLayout));