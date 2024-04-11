import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import Box from '../Boxes/Box';
import StyledPopup from '../Popup/Popup';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import TeamBox from '../Team/TeamBox';
import SanitizedHTML from 'react-sanitized-html';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';

let intro_eng = '<p>The IME organizes several excursions yearly. Beside of one-day excursions, which belong to certain lectures, there is also a two-week excursion every autumn. During those we visit several companies working in the field of non-ferrous metallurgy and related industries.</p><p>The goal of the excursions is, that students, but also institute employees can gain extensive insight into the diversity of metallurgical appliances.</p><p>In addition to technical aspects, getting to know new interesting countries or regions with their differing cultures is emphasized. That way, the two-week-excursions regularly go abroad. to European- and non-European countries.</p><p>For students participation is low-priced. For further information, ask the organising teams of the next excursion.</p>';
let intro = '<p>Das IME organisiert j&auml;hrlich mehrere Exkursionen. Neben Tagesexkursionen im Rahmen bestimmter Lehrveranstaltungen findet j&auml;hrlich im Herbst eine zweiw&ouml;chige Exkursion zu einer gro&szlig;en Auswahl von Unternehmen aus dem Bereich der Nichteisenmetallurgie statt.</p><p>Ziel dieser Exkursion ist es Studierenden, aber auch den Mitarbeitern des Instituts, einen umfassenden Einblick in die Vielfalt der metallurgischen Anwendungen zu erm&ouml;glichen. Neben technischen Aspekten erfolgt gleichzeitig auch immer ein Kennen lernen anderer interessanter L&auml;nder und Regionen mit ihren unterschiedlichen Kulturen. So f&uuml;hrt die zweiw&ouml;chige Exkursion regelm&auml;&szlig;ig ins europ&auml;ische sowie au&szlig;ereurop&auml;ische Ausland.</p><p>F&uuml;r Studierende ist die Teilnahme zu kosteng&uuml;nstigen Konditionen m&ouml;glich. N&auml;here Information sind bei den Organisationsteams der Exkursion zu erhalten.</p>';

let contacts = [
    {
    'id': 284,
    'name': 'M. Sc. Jil Schosseler',
    'tel': '+49 (0)241 80 90855',
    'fax': '+49 (0)241 80 92154',
    'email': 'jschosseler@ime-aachen.de',
    'img': process.env.PUBLIC_URL + '/img/team/bild25_id_9016.jpg',
    'url': '/team/284'
}
];

class Excursions extends Component {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);
        this.state = {
            intro: {},
            // info: Db.get({action: 'ExcursionInfo'}).then(res => res),
            // data: Db.get({action: 'Album', id: 4}).then(res => res)
            info: {},
            data: {}
        }
    }    
    
    componentDidMount() {
        this.APICalls.get({ endpoint: 'Texts', meta: 'Excursions' }).then((res) => {
            this.setState({intro: res});
        });
        this.APICalls.get({ endpoint: 'album/Excursion' }).then((res) => {
            // console.log(res);
            this.setState({info: res});
        });
        this.APICalls.get({ endpoint: 'album', id: 4 }).then((res) => {
            this.setState({data: res});
        });
    }
    
    render() {
        if (!this.context.webText) return '';
        // let contactsInfo = [];
        // contacts.forEach((elm, index) => {
        //     contactsInfo[index] = {
        //         link: "/team/" + elm.id,
        //         name: elm.name,
        //         image: elm.img,
        //         url: elm.url,
        //         description: '<p>Tel: ' + elm.tel + '<br/>Fax: ' + elm.fax + '<br/><a href="mailto:' + elm.email + '">' + elm.email + '</a></p>'
        //     };
        // });
        let infoHtml = 'Loading...';
        if (this.state.info.success) {
            let info = this.state.info.results[0];
            infoHtml = (
                <div id="excursion-info" className="py-3 col-12 col-sm-4">
                    <h2 className="heading">{(this.context.lang == 'ge') ? info.titel : info.titel_eng}</h2>
                    <SanitizedHTML html={(this.context.lang == 'ge') ? info.text : info.text_eng} />
                    <div className="team-group " style={{'padding': '0'}}>
                        <TeamBox id={info.ansprech} />
                        {/* {contactsInfo.map((elm, index) => (
                            <div key={index} className="col-12 col-lg-60 d-flex">
                                <Box content={elm} classNames="team-box rounded bg-darkblue0" type="team" />                            
                            </div>
                        ))} */}
                    </div>
                </div>);
        }
        let excursions = [];
        if (this.state.data.success) {
            excursions = this.state.data.results;
            console.log(excursions);
        }
        let intro = '';
        if (this.state.intro.success) {
            intro = this.state.intro.results.filter(x => x.sprache == this.context.language)[0].txt;
        }
        let texts = this.context.webText;
        return(
            <div className="excursions">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/excursions/RWTH-FB5-039.jpg'} transformY='0%' overlay=''/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div className="row">
                                        <div id="intro" className="py-3 col-sm-8">
                                            <h2 className="heading">{texts.social.excursions}</h2>
                                            <div className="intro-wrap0 p-40 bg-grey0">
                                            <div className="px-20">
                                                <div className="row">
                                                    <div className="py-20 col-12 col-sm-12">
                                                        <div className="" dangerouslySetInnerHTML={{__html: intro}} />
                                                    </div>
                                                    {/* <div className="py-2 col-12 col-sm-4">
                                                        <div className="mb-3"><img src={process.env.PUBLIC_URL + '/img/association/logo.png'} alt="IME-Society" /></div>            
                                                        <h4>Documents</h4>
                                                        <ul>
                                                            <li><a href={process.env.PUBLIC_URL + '/pdf/association/satzung.pdf'}>Satzung</a></li>
                                                            <li><a href={process.env.PUBLIC_URL + '/pdf/association/beitrittserklaerung.pdf'}>Mitgliedsantrag</a></li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        {infoHtml}
                                            
                                    </div>
                                    <div id="past-excursions" className="py-3 pb-5">
                                        <h2 className="heading">{texts.social.past_excurions}</h2>
                                        {excursions.map((elm) => {
                                            if (elm.pics == undefined) return;
                                            return (
                                            <div key={elm.id} className="past-excursions-wrap py-2 bg-grey0">
                                            <h4 className="box-title">{(this.context.lang == 'ge') ? elm.name : elm.name_eng}</h4>
                                            <div className="row">
                                                <div className="py-2 col-12">
                                                    <p className="gallery-row">
                                                        {elm.pics.map((e, i) => (
                                                            <StyledPopup key={i} className="border rounded">
                                                            <img src={process.env.PUBLIC_URL + '/img/albums/' + elm.file_name + '/' + e.pic} alt={elm.name_eng} />
                                                            </StyledPopup>
                                                        ))}
                                                    </p>
                                                </div>
                                            </div>
                                            </div>
                                            );
                                        })}
                                        {/* <div className="past-excursions-wrap py-2 bg-grey0">
                                            <h4 className="box-title">2019 - Bavaria and Austria </h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/42/dji_0265_v2_id_5209.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/42/gruppenfoto_bri_id_6191.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/42/gruppenfoto_pla_id_2345.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">2018 - Poland</h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/41/pic1_id_7425.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/41/pic2_id_5877.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/41/pic3_id_4559.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="annual-meeting-wrap py-2 bg-grey0">
                                            <h4 className="box-title">2017 - Northern Ruhr area and North Germany</h4>
                                        <div className="row">
                                            <div className="py-2 col-12">
                                                <p className="gallery-row">
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/39/2_trimet_id_3903.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/39/3_aurubis_id_6204.jpg'} alt="Meeting 2018" />
                                                    </StyledPopup>
                                                    <StyledPopup className="border rounded">
                                                    <img src={process.env.PUBLIC_URL + '/img/albums/39/8_wesermetaell_id_9468.jpg'} alt="Meeting 2018" />
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
Excursions.contextType = globalLangStateContext;
export default withLangSwitchListener(Excursions);