import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
// import Db from '../../control/class.db';
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';
import ExamLogin from '../Exams/ExamLogin';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import HiwiJobs from '../Jobs/HiwiJob';
import withLangSwitchListener from '../Languages/LangSwitchListener';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let intro_eng = '<p>You can have a look at all lectures and courses which are given at the IME in the current semester in <a href="https://online.rwth-aachen.de/RWTHonline/ee/ui/ca2/app/desktop/#/login" target="_blank">RWTHonline</a>. Access is only given for matriculated students of RWTH Aachen or employers of the university. <a href="https://online.rwth-aachen.de/RWTHonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses?$ctx=design=ca;lang=de;profile=STUDENT&$skip=0&$top=20&objTermId=187&orgId=14507&q=" target="_blank">Here</a> you find a direct link to the courses.</br></br> <b>Notification: online lectures at IME. </b></br></br>Due to the current situation, the IME has created an online contingency plan (<a href="http://www.metallurgie.rwth-aachen.de/data/Others/online_Lehrplan_IME.pdf">Download</a> note: due to the uncertain situation, this can change at any time). The big courses take place online this semester. We hope that lectures on a smaller scale (<20 students) will be held physically at the end of May, for which all measures regarding hygiene and safety distance will be specially followed. The lectures of larger dimensions will be broadcasted via zoom. Students are provided with the lecture manuscript as well as the exercise documents and exercise videos in Moodle. Since we do not want to do the practical course online, these will take place to a limited extent in compliance with the hygiene measures and the safety distance.</p>';
let intro = '<p>Alle Lehrveranstaltungen die das IME im aktuellen Semester anbietet, k&ouml;nnen Sie bei <a href="https://online.rwth-aachen.de/RWTHonline/ee/ui/ca2/app/desktop/#/login" target="_blank">RWTHonline</a> abrufen. Der Zugang ist jedoch nur f&uuml;r immatrikulierte Studenten der RWTH Aachen oder Hochschulangestellten gestattet. <a href="https://online.rwth-aachen.de/RWTHonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses?$ctx=design=ca;lang=de;profile=STUDENT&$skip=0&$top=20&objTermId=187&orgId=14507&q=">Hier</a> finden Sie den Direktlink zu unseren Veranstaltungen.</b></br></br> Auch das sogenannte Speed-Dating der Fachgruppe zur Orientierung bezüglich der Vertiefungsrichtungen im Masterstudium wird in diesem Jahr online durchgeführt. Unter dem folgenden Link ist der ungekürzte Beitrag zur Vorstellung des IME abrufbar: (<a href="https://www.youtube.com/watch?v=9pMCLttRJCo">Video)</a></br></br><iframe width="560" height="315" src="https://www.youtube.com/embed/9pMCLttRJCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></br></br> <b>Info: Aktuelle Situation in Bezug auf Covid-19 und online Lehre am IME </b></br></br> Aufgrund der derzeitigen Situation hat das IME einen online Lehrplan erstellt (<a href="http://www.metallurgie.rwth-aachen.de/data/Others/online_Lehrplan_IME.pdf">Download</a> Hinweis: durch die ungewisse Situation kann sich dieser jederzeit ändern). Die größeren Lehrveranstaltungen finden in diesem Semester online statt. Wir hoffen, dass Vorlesungen im kleineren Rahmen (< 20 Studenten) physisch Ende Mai abzuhalten sind, wofür alle Maßnahmen bzgl. Hygiene und Sicherheitsabstand eingehalten werden. Die Vorlesungen der größeren Veranstaltungen werden live mittels Zoom übertragen. Den Studierenden wird sowohl das Vorlesungsmanuskript als auch die Übungsunterlagen sowie Übungsvideos in Moodle zur Verfügung gestellt. Da wir in diesem Semester nicht auf unsere Praktika verzichten wollen, finden diese eingeschränkt unter Einhaltung der Hygienemaßnahmen und des Sicherheitsabstandes statt. </p>';

class Study extends Component {
    APIcalls = new imeAPICalls();

    constructor(props) {
        super(props);
        this.state = {
            intro: {},
            thesisIntro: {},
            // data: Db.get({action: 'Job'}).then(res => res)
            data: {}
        }
    }    

    componentDidMount() {
        // Db.get({action: 'Job'}).then((res) => {
        this.APIcalls.get({ endpoint: 'job' }).then((res) => {
            this.setState({data: res});
        });
        this.APIcalls.get({ endpoint: 'Texts', meta: 'Study' }).then((res) => {
            this.setState({intro: res});
        });
        this.APIcalls.get({ endpoint: 'Texts', meta: 'ThesisTopic' }).then((res) => {
            this.setState({thesisIntro: res});
        });
    }
    
    render() {
        if (!this.context.webText) return '';
        let jobs = [];
        let hiwi = [], bachelor = [], master = [], mini = [];
        if (this.state.data.success) {
            jobs = this.state.data.results;
            // console.log(jobs);
            jobs.forEach(element => {
                switch (element.j_art) {
                    case 3:
                        master.push(element);
                        break;
                    case 4:
                        mini.push(element);
                        break;
                    case 5:
                        bachelor.push(element);
                        break;
                    case 6:
                        hiwi.push(element);
                        break;
                    default:
                }
            });
            // console.log(master);
            // console.log(mini);
            // console.log(bachelor);
            // console.log(hiwi);
        }
        let texts = this.context.webText;
        let intro = '', thesisIntro = '';
        if (this.state.intro.success) {
            intro = this.state.intro.results.filter(x => x.sprache == this.context.language)[0].txt;
        }
        if (this.state.thesisIntro.success) {
            thesisIntro = this.state.thesisIntro.results.filter(x => x.sprache == this.context.language)[0].txt;
        }
        return jobs.length == 0 ? "Loading..." : (
            <div className="study">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/study/160224-IME-087.jpg'} transformY='5%' overlay='dark'/>
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
                                        <h2 className="heading">{texts.study.teaching}</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-8">
                                                    <div className="" dangerouslySetInnerHTML={{__html: intro}} />
                                                </div>
                                                <div className="py-2 col-12 col-sm-4">
                                                <img src={process.env.PUBLIC_URL + '/img/study/RWTHonline.png'} alt="RWTHonline" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="hiwi" className="py-3">
                                        <h2 className="heading">{texts.study.hiwi_jobs}</h2>
                                        {this.context.lang == 'ge'
                                        ? <div className="row">
                                            <div className="py-2 col-12">
                                                <p>Am IME besteht die M&ouml;glichkeit als studentische Hilfskraft mit einem Arbeitsumfang von 5 bis 8 Stunden in der Woche sehr praxisnah zu arbeiten.</p>
                                                <p>Alle Bewerbungen sollten bitte an untenstehenden kontakt gerichtet werden. Die Einstellung erfolgt je nach Bedarf des Insitutes.</p>
                                            </div>
                                            <div className="py-2 col-12 col-sm-6 text-left">
                                                <h4 className="box-title">Voraussetzungen</h4>
                                                <ul>
                                                    <li>Student einer Ingenieurwissenschaft mit werkstofftechnischem Hintergrund</li>
                                                    <li>Ab dem 3. Semester</li>
                                                    <li>Interesse an praktischer T&auml;tigkeit im Bereich der Pyro- und Hydrometallurgie</li>
                                                    <li>Sehr gute Deutschkenntnisse in Wort und Schrift</li>
                                                    <li>Sehr gute Kenntnisse der MS Office Anwendungen</li>
                                                </ul>
                                            </div>
                                            <div className="py-2 col-12 col-sm-6 text-left">
                                                <h4 className="box-title">Was wir bieten</h4>
                                                <ul>
                                                    <li>Anspruchsvolle Aufgaben in einem dynamischen und internationalen Team</li>
                                                    <li>Praxisnahe Erfahrungen durch die Mitwirkung an aktuellen Forschungsthemen aus der Industrie</li>
                                                    <li>Kontakte f&uuml;r zuk&uuml;nftige Praktika bei renommierten Unternehmen</li>
                                                </ul>
                                            </div>
                                        </div>
                                        : <div className="row">
                                            <div className="py-2 col-12">
                                                <p>At IME there is also the possibility of performing practical jobs as student assistant (HiWi) with a work scope of about 5 to 8 hours per week. If you don't find offers on this page, you may register in our interest list.</p>
                                                <p>Please direct all applications to the email contact below. Hiring is decided according to the institute’s demand. </p>
                                            </div>
                                            <div className="py-2 col-12 col-sm-6 text-left">
                                                <h4 className="box-title">Requirements</h4>
                                                <ul>
                                                    <li>Student of Metallurgy and Material sciences or other material related engineering field</li>
                                                    <li>Third semester and up</li>
                                                    <li>Strong interest in practical jobs in the areas of pyro- and hydrometallurgy</li>
                                                    <li>Good knowledge of the German language</li>
                                                    <li>Very good knowledge of the MS Office suite</li>
                                                </ul>
                                            </div>
                                            <div className="py-2 col-12 col-sm-6 text-left">
                                                <h4 className="box-title">What we offer</h4>
                                                <ul>
                                                    <li>Challenging duties in a dynamic and international team</li>
                                                    <li>Practical experience through active involvement in current research topics of the industry</li>
                                                    <li>Contacts to renowned companies for future practical trainings</li>
                                                </ul>
                                            </div>
                                        </div>}
                                        <div className="py-2 accordion" id="hiwi-accordion">
                                            <div className="card">
                                                <div className="card-header" id="hiwi-heading-1">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#hiwi-1" aria-expanded="true" aria-controls="hiwi-1">
                                                    {texts.study.hiwi_jobs}
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="hiwi-1" className="collapse " aria-labelledby="hiwi-heading-1" data-parent="#hiwi-accordion">
                                                    <HiwiJobs content={hiwi} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="thesis" className="py-3">
                                        <h2 className="heading">{texts.study.open_thesis_topics}</h2>
                                        
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <div dangerouslySetInnerHTML={{__html: thesisIntro}} />
                                            </div>
                                        </div>
                                        <div className="py-2 accordion" id="thesis-accordion">
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-1">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-1" aria-expanded="true" aria-controls="thesis-1">
                                                    {texts.study.master_thesis}
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-1" className="collapse " aria-labelledby="thesis-heading-1" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                    {master.map((elm, index) => {
                                                        let text = (this.context.lang == 'ge') ? elm.j_ueberschrift : elm.j_ueberschrift_eng;
                                                        if (text == '') {text = elm.j_ueberschrift;}
                                                        if (text == '') {text = elm.j_ueberschrift_eng;}
                                                        return (
                                                        <li key={index}><Link to={"/study/thesistopic/"+elm.j_id}>{text}</Link></li>
                                                        );
                                                    })}
                                                        {/* <li><Link to="/study/thesistopic/1">Investigation of alternative reducing agents for the production of ferroalloys</Link></li>
                                                        <li><Link to="/study/thesistopic/1">Modelling of Migration and Agglomeration of Particles in Aluminium Melt under Electromagnetically (EM)-Induced Flow</Link></li>
                                                        <li><Link to="/study/thesistopic/1">Automatization of the molten salt electrolysis process to produce neodymium and praseodymium</Link></li> */}
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-2">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-2" aria-expanded="true" aria-controls="thesis-2">
                                                    {texts.study.bachelor_thesis}
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-2" className="collapse " aria-labelledby="thesis-heading-2" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                    {bachelor.map((elm, index) => {
                                                        let text = (this.context.lang == 'ge') ? elm.j_ueberschrift : elm.j_ueberschrift_eng;
                                                        if (text == '') {text = elm.j_ueberschrift;}
                                                        if (text == '') {text = elm.j_ueberschrift_eng;}
                                                        return (
                                                        <li key={index}><Link to={"/study/thesistopic/"+elm.j_id}>{text}</Link></li>
                                                        );
                                                    })}
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-3">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-3" aria-expanded="true" aria-controls="thesis-3">
                                                    {texts.study.minithesis}
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-3" className="collapse " aria-labelledby="thesis-heading-3" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                    {mini.map((elm, index) => {
                                                        let text = (this.context.lang == 'ge') ? elm.j_ueberschrift : elm.j_ueberschrift_eng;
                                                        if (text == '') {text = elm.j_ueberschrift;}
                                                        if (text == '') {text = elm.j_ueberschrift_eng;}
                                                        return (
                                                        <li key={index}><Link to={"/study/thesistopic/"+elm.j_id}>{text}</Link></li>
                                                        );
                                                    })}
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="exams" className="py-3 pb-5">
                                        <h2 className="heading">{texts.study.mock_exams}</h2>
                                        <ExamLogin />
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
Study.contextType = globalLangStateContext;
export default withLangSwitchListener(withRouter(Study));