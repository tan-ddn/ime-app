import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let intro = '<p>You can have a look at all lectures and courses which are given at the IME in the current semester in RWTHonline. Access is only given for matriculated students of RWTH Aachen or employers of the university. <a href="https://online.rwth-aachen.de/RWTHonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses?$ctx=design=ca;lang=de;profile=STUDENT&amp;$skip=0&amp;$top=20&amp;objTermId=187&amp;orgId=14507&amp;q=" target="_blank">Here</a> you find a direct link to the courses.</p><p><b>Notification: online lectures at IME. </b></p><p>Due to the current situation, the IME has created an online contingency plan (Download note: due to the uncertain situation, this can change at any time). The big courses take place online this semester. We hope that lectures on a smaller scale (<20 students) will be held physically at the end of May, for which all measures regarding hygiene and safety distance will be specially followed. The lectures of larger dimensions will be broadcasted via zoom. Students are provided with the lecture manuscript as well as the exercise documents and exercise videos in Moodle. Since we do not want to do the practical course online, these will take place to a limited extent in compliance with the hygiene measures and the safety distance.</p>';

class Study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
        }
    }    
    
    render() {
        return(
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
                                        <h2 className="heading">Teaching</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-8">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                                <div className="py-2 col-12 col-sm-4">
                                                <img src={process.env.PUBLIC_URL + '/img/study/RWTHonline.png'} alt="RWTHonline" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="hiwi" className="py-3">
                                        <h2 className="heading">HiWi Jobs</h2>
                                        <div className="row">
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
                                        </div>
                                        <div className="py-2 accordion" id="hiwi-accordion">
                                            <div className="card">
                                                <div className="card-header" id="hiwi-heading-1">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#hiwi-1" aria-expanded="true" aria-controls="hiwi-1">
                                                    Student worker
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="hiwi-1" className="collapse " aria-labelledby="hiwi-heading-1" data-parent="#hiwi-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-6">
                                                    <dd>
                                                        <dt>Description</dt>
                                                        <dd>Student worker</dd>
                                                        <dt>Topic</dt>
                                                        <dd>HiWi‘s gesucht !</dd>
                                                        <dt>Background</dt>
                                                        <dd>
                                                        <p>Du möchtest bei deinem Studium nicht nur über Büchern sitzen und suchst einen Job, bei dem Du 5-8 Stunden die Woche praxisnah arbeiten kannst?</p>
                                                        <p>Das IME bietet Dir:</p>
                                                        <ul>
                                                            <li>Anspruchsvolle Aufgaben in einem internationalen Team,</li>
                                                            <li>Praktische Arbeiten, die das theoretisch Gelernte experimentell vertiefen,</li>
                                                            <li>ein breites Spektrum aus Pyrometallurgie, Hydrometallurgie und angewandter Elektrochemie und Kontakte für zukünftige Praktika.</li>
                                                        </ul>
                                                        </dd>
                                                    </dd>
                                                    </div>
                                                    <div className="py-2 col-12 col-sm-6">
                                                    <dd>
                                                        <dt>Duration</dt>
                                                        <dd>6 months</dd>
                                                        <dt>Start</dt>
                                                        <dd>Immediately</dd>
                                                        <dt>Job definition</dt>
                                                        <dd>
                                                        <p>Was Du mitbringen solltest sind::</p>
                                                        <ul>
                                                            <li>Gute Kenntnisse der MS Office Anwendungen,</li>
                                                            <li>keine Angst vor flüssigem, heißem Metall,</li>
                                                            <li>keine Angst vor Säuren und Basen,</li>
                                                            <li>Spaß und Interesse an praktischen Arbeiten.</li>
                                                        </ul>
                                                        </dd>
                                                        <dt>Contact</dt>
                                                        <dd><a href="#">M. Sc. Dominic Feldhaus</a></dd>
                                                    </dd>
                                                    </div>
                                                    <div className="text-center py-2 col-12 col-sm-">
                                                    <img src={process.env.PUBLIC_URL + '/img/study/hiwi.png'} alt="hiwi" />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="thesis" className="py-3">
                                        <h2 className="heading">Open Thesis Topics</h2>
                                        
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p>The IME offers thesis topics to students of engineering and material sciences with a processing background at any time. Here you may find a selection of current thesis topics. You may also want to take the chance to contact our employees in order to make a personal appointment. We find interesting and exciting topics for everyone.</p>
                                            </div>
                                        </div>
                                        <div className="py-2 accordion" id="thesis-accordion">
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-1">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-1" aria-expanded="true" aria-controls="thesis-1">
                                                    Master Thesis
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-1" className="collapse " aria-labelledby="thesis-heading-1" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                        <li><Link to="/study/thesistopic/1">Investigation of alternative reducing agents for the production of ferroalloys</Link></li>
                                                        <li><Link to="/study/thesistopic/1">Modelling of Migration and Agglomeration of Particles in Aluminium Melt under Electromagnetically (EM)-Induced Flow</Link></li>
                                                        <li><Link to="/study/thesistopic/1">Automatization of the molten salt electrolysis process to produce neodymium and praseodymium</Link></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-2">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-2" aria-expanded="true" aria-controls="thesis-2">
                                                    Bachelor Thesis
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-2" className="collapse " aria-labelledby="thesis-heading-2" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                        <li><a href="#">Extraction of High-Entropy Alloys (HEAs) using ATR</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="thesis-heading-3">
                                                    <h4 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#thesis-3" aria-expanded="true" aria-controls="thesis-3">
                                                    Minithesis
                                                    </button>
                                                    </h4>
                                                </div>
                                                <div id="thesis-3" className="collapse " aria-labelledby="thesis-heading-3" data-parent="#thesis-accordion">
                                                <div className="card-body text-left row">
                                                    <div className="py-2 col-12 col-sm-">
                                                    <ul>
                                                        <li><a href="#">Experimental determination of growth rate behaviour during fractional crystallization using Cold Finger method</a></li>
                                                        <li><a href="#">Investigation of optimum vacuum distillation parameters to produce high purity magnesium</a></li>
                                                        <li><a href="#">Plasma Technology in Hydrometallurgy</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="exams" className="py-3 pb-5">
                                        <h2 className="heading">Exams</h2>
                                        <div className="exams-wrap p-4 bg-grey">
                                        <div className="row">
                                            <div className="py-2 col-12 col-sm-4">
                                            <p>Here you can download old tests or have a look at the results of new tests. Please ask for the necessary passwords in the lectures. </p>
                                            </div>
                                            <div className="py-2 col-12 col-sm-8">
                                            <form className="exam-form">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" for="semesterSelect">Edition (Semester):</span>
                                                    </div>
                                                    <select className="custom-select" id="semesterSelect">
                                                        <option value="17">Vertiefungsfach 1</option>
                                                        <option value="19">Study Major</option>
                                                        <option value="21">Hydrometallurgie</option>
                                                        <option value="15">Basisfach</option>
                                                        <option value="16">Basic Course</option>
                                                    </select>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" for="password">Password:</span>
                                                    </div>
                                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Login</button>
                                            </form>
                                            </div>
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
export default withRouter(Study);