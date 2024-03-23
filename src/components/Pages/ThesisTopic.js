import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import Db from '../../control/class.db';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import SanitizedHTML from 'react-sanitized-html';
import imeAPICalls from '../../imeAPICalls';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let intro = '<p>The IME offers thesis topics to students of engineering and material sciences with a processing background at any time. Here you may find a selection of current thesis topics.</p><p>You may also want to take the chance to contact our employees in order to make a personal appointment. We find interesting and exciting topics for everyone. </p>';

let masterThesis = {
    'id': 1,
    'topic': 'Investigation of alternative reducing agents for the production of ferroalloys',
    'description': 'Master Thesis',
    'background': 'The metallurgical industry generates massive amounts of CO2, due to the usage of fossil coal and coke as reducing agents. Substitution with CO2 neutral reducing agents like coke generated from biomass or industrial residues could improve the CO2 balance of metallurgical processes.',
    'jobDefinition': 'Alternative reducing agents should be investigated in the lab-scale electric arc furnaces of the IME. The process of interest is the production of ferrochromium starting with chrome ore. The process parameters, yield, metal- and slag quality have to be compared for different reducing agents. Due to the high melting point of the magnesia-alumina slag, different fluxes should be investigated, to decrease the liquidus temperature of the slag.',
    'duration': '6 months',
    'start': 'immediately',
    'contact': 'M. Sc. Marcus Sommerfeld',
    'image': process.env.PUBLIC_URL + '/img/jobs/bild_f_r_aussch_id_8345.png'
};

class ThesisTopic extends Component {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);
        this.state = {
            // id: null,
            intro: intro,
            // masterThesis: masterThesis,
            // data: Db.get({action: 'Job', id: this.props.match.params.id}).then(res => res),
            // contact: Db.get({action: 'JobContact', id: this.props.match.params.id}).then(res => res)
            data: {},
            contact: {},
            similarThesis: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // this.setState({id: id});
        // Db.get({action: 'Job', id}).then((res) => {
        this.APICalls.get({ endpoint: 'job', id: id }).then((res) => {
            this.setState({ data: res });
            if (res.success) {
                this.APICalls.get({ endpoint: 'job', type: res.results[0].j_art }).then((res) => {
                    this.setState({ similarThesis: res });
                });
            }
        });
        // Db.get({action: 'JobContact', id}).then((res) => {
        this.APICalls.get({ endpoint: 'job/Contact', id: id }).then((res) => {
            this.setState({ contact: res });
        });
    }

    render() {
        // {Object.keys(leftColumn).map((key, index) => {
        //     if (key == 'jobDescription') key = 'job description';
        // })};

        let leftColumn = {};
        let rightColumn = {};
        let job = { jp_pic: '' };
        let contact;
        let otherThesis = [];
        if (this.state.data.success & this.state.contact.success) {
            job = this.state.data.results[0];
            contact = this.state.contact.results[0];
            job.j_ueberschrift_eng = (job.j_ueberschrift_eng == '') ? job.j_ueberschrift : job.j_ueberschrift_eng;
            job.j_problem_eng = (job.j_problem_eng == '') ? job.j_problem : job.j_problem_eng;
            job.j_aufgaben_eng = (job.j_aufgaben_eng == '') ? job.j_aufgaben : job.j_aufgaben_eng;
            // leftColumn['topic'] = job.j_ueberschrift_eng;
            leftColumn['description'] = job.ja_jobart_eng;
            leftColumn['duration'] = job.j_dauer_number + ' month(s)';
            leftColumn['start'] = 'Immediately';
            leftColumn['contact'] = (<Link to={'/team/' + job.j_kontakt}>{contact.tt_titel + ' ' + contact.t_vorname + ' ' + contact.t_name}</Link>);
            rightColumn['background'] = job.j_problem_eng;
            rightColumn['job definition'] = job.j_aufgaben_eng;
            // console.log(leftColumn);
        }
        if (this.state.similarThesis.success) {
            otherThesis = this.state.similarThesis.results;
        }
        return (
            <div className="study">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/study/160224-IME-087.jpg'} transformY='5%' overlay='dark' />
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
                                            <h2 className="heading"><Link className="d-inline-block " to="/study">Study</Link> <span className="text-dark">&#187; {leftColumn['description']}</span></h2>
                                            <div className="intro-wrap p-4 bg-grey">
                                                <div className="px-2">
                                                    <div className="row">
                                                        <div className="py-2 col-12 col-sm-">
                                                            <div className="" dangerouslySetInnerHTML={{ __html: this.state.intro }} />
                                                            <Link className='d-block pt-3' to="/study#hiwi">See all current jobs &amp; thesis &#187;</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="thesis" className="py-3">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-6 text-left">
                                                    <h2 className="heading">Other {job.ja_jobart_eng}</h2>
                                                    <ul>
                                                        {otherThesis.map((elm, index) => {
                                                            let text = (localStorage.getItem('lang') == 'ge') ? elm.j_ueberschrift : elm.j_ueberschrift_eng;
                                                            if (text == '') { text = elm.j_ueberschrift; }
                                                            if (text == '') { text = elm.j_ueberschrift_eng; }
                                                            return (
                                                                <li className='pb-3' key={index}><Link to={"/study/thesistopic/" + elm.j_id}>{text}</Link></li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="py-2 col-12 col-sm-6">
                                                    <h2 className="heading">Thesis' Details</h2>
                                                    <dl>
                                                        <dt>Topic</dt>
                                                        <dd>{job.j_ueberschrift_eng}</dd>
                                                    </dl>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            {Object.keys(leftColumn).map((key, index) => (
                                                                <dl key={index}>
                                                                    <dt className="text-capitalize">{key}</dt>
                                                                    <dd>{leftColumn[key]}</dd>
                                                                </dl>
                                                            ))}
                                                        </div>
                                                        <div className='col-6'>
                                                            <div className="rounded">
                                                                {job.jp_pic &&
                                                                    <img src={process.env.PUBLIC_URL + '/img/jobs/' + job.jp_pic} alt={'Image: ' + leftColumn['description']} />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <table className="table-lg">
                                                    <tbody>
                                                    {Object.keys(leftColumn).map((key, index) => (
                                                    <tr key={index}>
                                                        <th style={{'width': '120px', 'verticalAlign': 'initial'}} className="text-capitalize">{key}</th>
                                                        <td>{leftColumn[key]}</td>
                                                    </tr>
                                                    ))}
                                                    </tbody>
                                                </table> */}
                                                    {/* <table className="table-lg">
                                                    <tbody>
                                                    <tr>
                                                        <th style={{'width': '120px', 'verticalAlign': 'initial'}} >Description</th>
                                                        <td>{this.state.projectDetails.description}</td>
                                                    </tr>
                                                    </tbody>
                                                </table> */}
                                                    {Object.keys(rightColumn).map((key, index) => (
                                                        <dl key={index}>
                                                            <dt className="text-capitalize">{key}</dt>
                                                            <dd><SanitizedHTML html={rightColumn[key]} /></dd>
                                                        </dl>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="to-top-link">
                            <a href="#">top</a>
                            </p> */}
                            </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}
export default withRouter(ThesisTopic);