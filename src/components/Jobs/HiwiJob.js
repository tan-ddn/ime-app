import React from 'react';
import { Link } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';
import './jobs.scss';
// import Db from '../../control/class.db';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import { globalLangStateContext } from '../../UserContext';
import imeAPICalls from '../../imeAPICalls';

class HiwiJobs extends ResponsiveComponent {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);

        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        // Db.get({action: 'HiwiJobContact', id: 6}).then((res) => {
        //     this.setState({data: res});
        // });
        this.APICalls.get({ endpoint: 'Job/HiwiJob', type: 6}).then(res => {
            this.setState({data: res});
        })
    }

    render() {
        if (!this.context.webText) return '';
        let className = "card-body text-left " + this.props.className;
        let hiwiText = 'Loading...';
        let texts = this.context.webText;
        if (this.state.data.success) {
            let job = this.state.data.results;
            // console.log(job);
            hiwiText = this.props.content.map((elm, index) => (
                <div key={index} className="hiwi-job row">
                    <div className="py-2 col-12 col-sm-6">
                        <dl>
                            <dt>{texts.misc.description}</dt>
                            <dd>{(this.context.lang == 'ge') ? elm.ja_jobart : elm.ja_jobart_eng}</dd>
                            <dt>{texts.misc.topic}</dt>
                            <dd>{(this.context.lang == 'ge') ? elm.j_ueberschrift : elm.j_ueberschrift_eng}</dd>
                            <dt>{texts.misc.background}</dt>
                            <dd><SanitizedHTML html={(this.context.lang == 'ge') ? elm.j_problem : elm.j_problem_eng} /></dd>
                        </dl>
                    </div>
                    <div className="py-2 col-12 col-sm-6">
                        <dl>
                            <dt>{texts.misc.duration}</dt>
                            <dd>{elm.j_dauer_number} months</dd>
                            <dt>Start</dt>
                            <dd>Immediately</dd>
                            <dt>{texts.misc.job_definition}</dt>
                            <dd><SanitizedHTML html={(this.context.lang == 'ge') ? elm.j_aufgaben : elm.j_aufgaben_eng} /></dd>
                            <dt>{texts.team.contact}</dt>
                            <dd><Link to={"/team/"+elm.j_kontakt}>{job[index].tt_titel+' '+job[index].t_vorname+' '+job[index].t_name}</Link></dd>
                        </dl>
                    </div>
                    <div className="text-center py-2 col-12 col-sm-">
                        {elm.jp_pic && 
                            <img src={process.env.PUBLIC_URL + '/img/study/' + elm.jp_pic} alt="hiwi" />
                        }
                </div>
                </div>
            ));
        };
        // console.log(this.props.content);
        // console.log(hiwiText);
        return(
            <div className={className}>
                {hiwiText}
            </div>
        )
    };
}
HiwiJobs.contextType = globalLangStateContext;
export default withLangSwitchListener(HiwiJobs);