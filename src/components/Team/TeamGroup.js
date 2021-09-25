import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '../Box';
import './team.scss';
import Db from '../../control/class.db';
import TeamBox from './TeamBox';

export default class TeamGroup extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            group: this.props.group,
            // members: null,
        }
    }

    // componentDidMount() {
        // let cond = 'einteilung='+this.state.group.id;
        // let memDb = new Db('teamverwaltung');
        // memDb.columns = 't.id, t.einteilung, t.name, t.vorname, t.bild, t.tel, t.fax, t.mail, t.position, tt.titel'
        // memDb.innerJoin = true;
        // memDb.tableAs = 't';
        // memDb.otherTable = 'team_titel';
        // memDb.otherTableAs = 'tt';
        // memDb.on = 't.einteilung=tt.id';
        // memDb.cond = cond;
        // memDb.query().then((data) => {
        //     if (data.success) this.setState({members: data.results});
        //     window.useScrollTo();
        //     // console.log(data);
        // })

        // this.setState({members: Db.getMemberFromTeamGroup(this.state.group.id)});
        // window.useScrollTo();

    //     this.getDb();
    // }

    // getDb() {
    //     Db.getMemberFromTeamGroup(this.props.group.id).then((data) => {
    //         // console.log(typeof data.results);
    //         this.setState({members: data.results});
    //     })
    // }

    // boxContainer(members) {
    //     // console.log(members);
    //     let boxContent = Array();
    //     members.forEach((elm, index) => {
    //         let title = '';
    //         if (elm.t_titel != 16) title = elm.tt_titel;
    //         boxContent[index] = {
    //             id: elm.t_id,
    //             link: "/team/" + elm.t_id,
    //             name: title + ' ' + elm.t_vorname + ' ' + elm.t_name,
    //             image: process.env.PUBLIC_URL + '/img/team/' + elm.t_bild,
    //             url: elm.t_url,
    //             description: '<p>Tel: ' + elm.t_tel + '<br/>Fax: ' + elm.t_fax + '<br/><a href="mailto:' + elm.t_mail + '">' + elm.t_mail + '</a></p>'
    //         };
    //     });
    //     return boxContent;
    // }

    render() {
        let groupTitle = this.state.group.einteilung_eng;
        if (this.state.group.id == 10) groupTitle = 'Scientific assistants (Postdocs)';

        let boxContent = Array();
        let groupDisplay = null;
        if (this.props.data.success) {
        let members = this.props.data.results;
        console.log(members);
        //Sort by position, name, and id
        members.sort((a, b) => {
            return a.t_position - b.t_position || a.t_name.localeCompare(b.t_name);
        });
            if (this.state.group.id == 3 || this.state.group.id == 4 ) {
                let leader = members.filter(x => x.t_position == '1');
                let coworker = members.filter(x => x.t_position == '2');
                let internee = members.filter(x => x.t_position == '3');
                leader.title_eng = 'Team Leader';
                coworker.title_eng = 'Co-worker';
                internee.title_eng = 'Internee';
                // console.log(leader);
                groupDisplay = [leader, coworker, internee].map((subgroup, index) => {
                    if (subgroup.length == 0) return;
                    // let boxContent = this.boxContainer(subgroup);
                    // let boxContentDisplay = boxContent.map((elm, index) => (
                    //     <div key={'team-'+elm.id} id={"team-"+elm.id} className="col-12 col-lg-4 d-flex">
                    //         <Box content={elm} classNames="team-box rounded bg-darkblue0" type="team" />                            
                    //     </div>
                    // ))
                    let boxContentDisplay = subgroup.map((elm, index) => (
                        <div key={index} className="col-12 col-lg-4 d-flex">
                        <TeamBox team={elm} /></div>
                    ))
                    return (<div key={"subgroup-"+index} className="py-2">
                        <h5 className="box-title m-0 p-0">{subgroup.title_eng}</h5>
                        <div className="row">{boxContentDisplay}</div>                        
                    </div>);
                });
                // console.log(groupDisplay);
            } else {
                // boxContent = this.boxContainer(members);
                // groupDisplay = (<div className="row">
                //     {boxContent.map((elm, index) => (
                //         <div key={'team-'+elm.id} id={"team-"+elm.id} className="col-12 col-lg-4 d-flex">
                //             <Box content={elm} classNames="team-box rounded bg-darkblue0" type="team" />                            
                //         </div>
                //     ))}
                // </div>);     
                groupDisplay = (<div className="row">
                    {members.map((elm, index) => (
                        <div key={index} className="col-12 col-lg-4 d-flex">
                            <TeamBox team={elm} />                     
                        </div>
                    ))}
                </div>);           
            }
        
        }
        return(
            <div className="team-group">
                <h4 className="box-title">{groupTitle}</h4>
                {groupDisplay}
            </div>
        );
    }
}