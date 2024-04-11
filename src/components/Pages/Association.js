import React, { Component } from 'react';
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import StyledPopup from '../Popup/Popup';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let intro = '<h4>Ziele des Vereins</h4><p>Förderung der Qualität von Ausbildung und Forschung am IME Metallurgische Prozesstechnik und Metallrecycling (Institut und Lehrstuhl der RWTH Aachen), insbes. auf dem Gebiet der Nichteisenmetallurgie</p><h4>Durch</h4><ul><li>Unterstützung bei der Sicherstellung einer praxisbezogenen Lehre und Ausbildung.</li><li>Finanzielle Unterstützung der IME- Fachexkursionen.</li><li>Anwerbung, Betreuung und Förderung von Studenten.</li><li>Anbindung der IME Absolventen/innen an das Institut.</li><li>Organisation wissenschaftlicher Veranstaltungen. (z.B. Industrieseminare).</li><li>Verbesserung der Institutsausstattung, insbes. für die Außenwirkung.</li></ul>';

class Association extends Component {
    APIcalls = new imeAPICalls;

    constructor(props) {
        super(props);
        this.state = {
            intro: {},
            personalia: {},
            data: {},
            yearlymeetings: {}
        }
    }    

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.fetchData();
        }
    }

    fetchData() {
        this.APIcalls.get({endpoint: 'Album', id: 1}).then(res => {
            this.setState({data: res});
        });
        this.APIcalls.get({endpoint: 'Texts', meta: 'Association'}).then(res => {
            this.setState({intro: res});
        });
        this.APIcalls.get({endpoint: 'Texts', meta: 'Verein'}).then(res => {
            this.setState({personalia: res});
        });
        this.APIcalls.get({endpoint: 'Texts', meta: 'YearlyMeetings'}).then(res => {
            this.setState({yearlymeetings: res});
        });
    }
    
    render() {
        if (!this.context.lang) return '';
        let meetings = [], personalia = null;
        if (this.state.data.success) {
            meetings = this.state.data.results;
            console.log(meetings);
        }
        if (this.state.personalia.success) {
            personalia = this.state.personalia.results.filter(x => x.sprache == this.context.language)[0];
            console.log(personalia);
        }
        let intro = '';
        if (this.state.intro.success) {
            intro = this.state.intro.results.filter(x => x.sprache == this.context.language)[0].txt;
        }
        let yearlymeetings = '';
        if (this.state.yearlymeetings.success) {
            yearlymeetings = this.state.yearlymeetings.results.filter(x => x.sprache == this.context.language)[0].txt;
        }
        let texts = this.context.webText;
        return (personalia == null) ? '' : (
            <div className="association">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/association/160224-IME-149.jpg'} transformY='0%' overlay='dark'/>
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
                                        <h2 className="heading">{this.context.webText.social.association}</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-8">
                                                    <div className="" dangerouslySetInnerHTML={{__html: intro}} />
                                                </div>
                                                <div className="py-2 col-12 col-sm-4">
                                                    <div className="mb-3"><img src={process.env.PUBLIC_URL + '/img/association/logo.png'} alt="IME-Society" /></div>            
                                                    <h4>Documents</h4>
                                                    <ul>
                                                        <li><a href={process.env.PUBLIC_URL + '/pdf/association/Satzung_Stand_01.01.2018.pdf'}>Satzung</a></li>
                                                        <li><a href={process.env.PUBLIC_URL + '/pdf/association/Beitrittserklaerung2.pdf'}>Mitgliedsantrag</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="personal" className="py-3">
                                        <h2 className="heading">{texts.social.personalia}</h2>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                {/* {localStorage.getItem('lang') == 'ge'
                                                ? <table className="table table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                    <th>Vorsitzender</th>
                                                    <td>Dr.-Ing. Urban Meurer<br/>
                                                    <a href="mailto:umeurer@berzelius.de">umeurer@berzelius.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>stell.-Vorsitzender</th>
                                                    <td>Prof. Dr. Bernd Friedrich<br/>
                                                    <a href="mailto:bfriedrich@ime-aachen.de">bfriedrich@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Geschäftsführer</th>
                                                    <td>Alex Birich, M.Sc.<br/>
                                                    <a href="mailto:abirich@ime-aachen.de">abirich@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Schatzmeister</th>
                                                    <td>Dr. Ing. Marco Zander<br/>
                                                    <a href="mailto:"></a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Info / Kontakt</th>
                                                    <td>Mrs. Nadine Hellmann<br/>
                                                    <a href="mailto: 	nhellmann@ime-aachen.de">nhellmann@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                : <table className="table table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                    <th>Chairman</th>
                                                    <td>Dr.-Ing. Urban Meurer<br/>
                                                    <a href="mailto:umeurer@berzelius.de">umeurer@berzelius.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Assistant Chair </th>
                                                    <td>Prof. Dr. Bernd Friedrich<br/>
                                                    <a href="mailto:bfriedrich@ime-aachen.de">bfriedrich@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Manager</th>
                                                    <td>Alex Birich, M.Sc.<br/>
                                                    <a href="mailto:abirich@ime-aachen.de">abirich@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Treasurer</th>
                                                    <td>Dr. Ing. Marco Zander<br/>
                                                    <a href="mailto:"></a>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <th>Info / Contact</th>
                                                    <td>Mrs. Nadine Hellmann<br/>
                                                    <a href="mailto: 	nhellmann@ime-aachen.de">nhellmann@ime-aachen.de</a>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                } */}
                                                <div dangerouslySetInnerHTML={{__html: personalia.txt}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="annual-meeting" className="py-3 pb-5">
                                        <h2 className="heading">{texts.social.yearly_meetings}</h2>
                                        <div dangerouslySetInnerHTML={{__html: yearlymeetings}} />
                                        {meetings.map((elm) => {
                                            if (elm.pics == undefined) return;
                                            return (
                                            <div key={elm.id} className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">{(localStorage.getItem('lang')) == 'ge' ? elm.name : elm.name_eng}</h4>
                                            <div className="row">
                                                <div className="py-2 col-12">
                                                    <p className="gallery-row">
                                                        {elm.pics.map((e, i) => (
                                                            <StyledPopup key={i} className="border rounded">
                                                            <img src={process.env.PUBLIC_URL + '/img/albums/' + elm.file_name + '/' + e.pic} alt={elm.name_eng} />
                                                            </StyledPopup>
                                                        ))}
                                                        {/* <StyledPopup className="border rounded">
                                                        <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_1_id_5674.jpg'} alt="Meeting 2018" />
                                                        </StyledPopup>
                                                        <StyledPopup className="border rounded">
                                                        <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_2_id_6049.jpg'} alt="Meeting 2018" />
                                                        </StyledPopup>
                                                        <StyledPopup className="border rounded">
                                                        <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_3_id_9406.jpg'} alt="Meeting 2018" />
                                                        </StyledPopup> */}
                                                    </p>
                                                </div>
                                            </div>
                                            </div>
                                            );
                                        })}
                                        {/* <div className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">Annual Meeting 2018</h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_1_id_5674.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_2_id_6049.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2018/ab_3_id_9406.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">Annual Meeting 2017</h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2017/img_8664_id_6046.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2017/img_8700_id_5468.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2017/img_8777_id_5336.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">Annual Meeting 2016</h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2016/img_0560_jpg_id_6683.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2016/img_0583_jpg_id_8696.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/association/meeting2016/mg_0896_jpg_id_6216.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                </p>
                                            </div>
                                        </div>
                                        </div> */}
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
Association.contextType = globalLangStateContext;

export default withLangSwitchListener(Association);