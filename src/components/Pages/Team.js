import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import TeamGroup from '../Team/TeamGroup';
import Db from '../../control/class.db';
import withGetDb from '../../control/withGetDb';
import withLangSwitchListener from '../Languages/LangSwitchListener';

let intro_eng = '<p>Here you find all employees working currently at the IME - "metallurgy and metal recycling" - ordered by their fields of work.</p><p>If you are searching for a proper contact person, you have the opportunity to get into contact directly per web form. An up to date list of all employees you will find here.</p><p>To get an overview on the institutes organisation and team, you can have a look at this flowchart. </p>';
let intro = '<p>Hier finden Sie alle Mitarbeiter die im IME- &quot;Metallurgische Prozesstechnik und Metallrecycling&quot; zur Zeit arbeiten, nach den jeweiligen Arbeitsgebieten sortiert aufgelistet.</p><p>Sollten Sie auf der Suche nach einem geeignetem Ansprechpartner sein, besteht hier die M&ouml;glichkeit der direkten Kontaktaufnahme, per Webformular.</p><p>Eine immer aktuelle Liste aller Mitarbeiter finden Sie hier.</p>';

const TeamGroupGetDb = withGetDb(
    TeamGroup,
    // (Db, props) => Db.getWithId('MemberFromTeamGroup', props.group.id)
    (Db, props) => Db.get({action: 'MemberFromTeamGroup', id: props.group.id})
);

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            // data: null,
        };
    }    

    componentDidMount() {
        this.updateIntro();
    }
    
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.webText !== prevProps.webText) {
          this.updateIntro();
        }
      }
    
    updateIntro() {
        if (localStorage.getItem('lang') === 'ge') {
            this.setState({intro: intro});
        } else {
            this.setState({intro: intro_eng});
        }
    }
    
    // componentDidMount() {
        // let db = new Db('team_einteilung');
        // db.query().then((data) => {
        //   // console.log(data);
        //   if (data.success) {
        //     this.setState({groups: data.results});
        //     // this.state.groups.forEach(element => {
        //     //     let cond = 'einteilung='+element.id;
        //     //     let memDb = new Db('teamverwaltung');
        //     //     memDb.condition = cond;
        //     //     memDb.query().then((data) => {
        //     //         if (data.success) element.members = data.results;
        //     //     })
        //     //     // console.log(element);
        //     // });
        //   }          
        //   window.useScrollTo();
        // })

        // let groups = Db.getTeamGroups();
        // this.setState({groups: groups});

    //     this.getDb();
    // }

    // getDb() {
    //     Db.getTeamGroups().then((data => {
    //         // console.log(typeof data.results);
    //         this.setState({groups: data.results});
    //     }));
        
    // }
    
    render() {
        let teams = 'Loading...';
        // console.log(this.props.data);
        if (this.props.data.success) {
            //Remove Alumni group
            let data = this.props.data.results.filter(x => x.id != 8);
            //Sort by sort order and name
            data.sort((a, b) => {
                return a.sort - b.sort || a.einteilung.localeCompare(b.einteilung);
            })
            teams = data.map((elm, index) => (
                <TeamGroupGetDb key={index} group={elm} />
            ))
        }

        return(
            <div className="team">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/team/RWTH-FB5-043-1920px.jpg'} transformY='-10%' overlay='dark'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div id="intro" className="py-3">
                                        <h2 className="heading">Team</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-3">
                                                    <img src={process.env.PUBLIC_URL + '/img/teaem_2020_web_id_8598.jpg'} alt="IME Team" />
                                                </div>
                                                <div className="py-2 col-12 col-sm-9">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="staff" className="py-3">
                                        <h2 className="heading">Our Staff</h2>
                                        {teams}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}

export default withLangSwitchListener(Team);