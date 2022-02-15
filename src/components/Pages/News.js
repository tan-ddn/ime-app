import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import sanitizeHtml from 'sanitize-html';
import HeaderBanner from '../HeaderBanner';
import StyledPopup from '../Popup/Popup';
import Db from '../../control/class.db';
import PageLayout from '../../PageLayout';
import SanitizedHTML from 'react-sanitized-html';
import StringHandle from '../../utility/stringHandle';

let intro = '<p>Our whole series of Dr.- thesis can be viewed and purchased at the following link. <a href="http://www.shaker.de/de/content/catalogue/index.asp?lang=de&amp;ID=6&amp;category=280" target="_blank" rel="nofollow noopener"> Search PhD Thesis</a>.</p>';
// let news = [
//     {
//         'datum': '31.05.2021',
//         'autor': 'cstallmeister',
//         'titel_eng': 'greenBatt Cluster launched with IME participation',
//         'text_eng': '<p>The Recycling & Green Battery competence cluster launched in September 2020 is one of four new battery competence clusters with which the BMBF aims to strengthen battery research along the entire value chain in Germany. Together with the other clusters, it is part of the umbrella concept "Research Factory Battery", which creates synergies on the research side with the European Green Deal and the IPCEI projects of the Federal Ministry for Economic Affairs and Energy (BMWi). At the same time, it is part of the cross-cutting battery lifecycle initiative. The "Recycling & Green Battery" (greenBatt) cluster is intended to lay the foundations for the sustainable recycling of batteries and their raw materials as well as the closing of material and substance cycles in the battery life cycle.</p><p>Specifically, innovative solutions and process modules up to TRL 6 are to be developed within greenBatt (funding volume approx. €30 million). To this end, a total of 15 individual projects involving 34 institutes from German universities and research institutions are building on previous research projects. They cover the areas of LifeCycle Design & Engineering as well as Digitalization & Green Battery (3 projects), Sustainable Raw Material Extraction as well as Resynthesis (3 projects), Testing & Disassembly as well as Mechanical Processing (4 projects) and Chemical Processing (5 projects).</p><p>With its battery recycling expertise, the IME is involved in individual projects as well as in the cluster-wide accompanying project and thus in the cluster management.</p>',
//         'pic': 'greenbaett_id_4576.png'
//     },
//     {
//         'datum': '29.04.2021',
//         'autor': 'cstallmeister',
//         'titel_eng': 'IME Aktuell - current edition',
//         'text_eng': '<p>The current issue of the IME Aktuell, published twice every year, is online now. Current topics include the recovery of bismuth from residues from the lead industry, the BMBF cluster greenBatt and an article on the topic “waste to product – a vision for incineration ashes close reality “.</p><p>The magazine can be downloaded from the following link.</p><p>www.metallurgie.rwth-aachen.de/new/src/index2.php?route=ime_aktuell</p>',
//         'pic': 'ime_aektuell_pn_id_8090.png'
//     },
//     {
//         'datum': '20.04.2021',
//         'autor': 'cstallmeister',
//         'titel_eng': 'Slag recovery in EAF',
//         'text_eng': '<p>The production of heavy metal containing slags is unavoidable in the lead and copper industry. Despite contained valuable metals like lead and zinc, this slags are mostly deposited. For this reason, the IME investigates the possibility of a slag treatment in a pilot scale EAF within the EIT RawMaterials founded project SlagVal (ID 17181). The aim is the recovery of valuable metals and the conversion of slag to a mineral construction material. This makes an important contribution to conserving resources and avoiding landfills.</p>',
//         'pic': 'eaf_blei_id_2469.png'
//     },
// ];
// let db = new Db('news');
// db.query().then((data) => {
//     // console.log(data);
//     if (data.success) news = data.results;
// });

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: intro,
            // news: null,
        };
        // let db = new Db('news', true, 12);
        // db.query().then((data) => {
        //   // console.log(data);
        //   if (data.success) this.setState({news: data.results});
        // })
    }

    // componentDidMount() {
    //     let db = new Db('news', true, 12);
    //     db.query().then((data) => {
    //       // console.log(data);
    //       if (data.success) this.setState({news: data.results});
    //       window.useScrollTo();
    //     })
    // }
    
    render() {
        let News = Array();
        // if (this.state.news) News = this.state.news;
        if (this.props.data.success) {
            // console.log(this.props.data);
            News = this.props.data.results;
        }
        return(
            <div className="news">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/RWTH-FB5-039.jpg'} transformY='-15%'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    {/* <div id="intro" className="py-3">
                                        <h2 className="heading">PhD Thesis</h2>
                                        <div className="intro-wrap p-4 bg-grey">
                                        <div className="px-2">
                                            <div className="row">
                                                <div className="py-2 col-12 col-sm-3">
                                                <figure>
                                                    <img src={process.env.PUBLIC_URL + '/img/publications/Drarbeit.png'} alt="Building of the IME" />
                                                </figure>
                                                </div>
                                                <div className="py-2 col-12 col-sm-9">
                                                    <div className="" dangerouslySetInnerHTML={{__html: this.state.intro}} />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}
                                    <div id="news" className="py-3">
                                        <h2 className="heading">News (Last 12 months)</h2>
                                        {/* <div className="row mb-3">
                                        <div className="col-11" dangerouslySetInnerHTML={{__html: this.state.}} />
                                        <div className="col-1">
                                        <img className="float-right" src={process.env.PUBLIC_URL + '/img/publications/pdf_icon_small.gif'} alt="Building of the IME" />
                                        </div>
                                        </div> */}
                                        <div className="">
                                            {News.map((elm, index) => {
                                                let textEng = StringHandle.beautifyHTML(elm.text_eng);
                                                return (
                                                <div id={elm.id} key={index} className="news-box py-4 border-bottom">
                                                    <h5 className="box-titel_eng">{elm.titel_eng}</h5>
                                                    <div className="row">
                                                    <div className="col-12 col-md-4">
                                                    <p>Posted on <Moment format="DD.MM.YYYY">{elm.datum}</Moment> by {elm.autor}</p>
                                                    <p><StyledPopup className="border rounded text-center">
                                                    <img src={process.env.PUBLIC_URL+'/img/news/'+elm.pic} alt={'pic: ' + elm.titel_eng} />
                                                    </StyledPopup></p>
                                                    {(elm.pdf) && <p>PDF file: <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+'/pdf/news/'+elm.pdf}>{elm.pdf}</a></p>}
                                                    </div>
                                                    <div className="col-12 col-md-8">
                                                    {/* <div className="" dangerouslySetInnerHTML={{__html: sanitizeHtml(elm.text_eng)}} /> */}
                                                    <SanitizedHTML className="" html={ textEng } />
                                                    {(elm.link) && <div>Link: <a target="_blank" rel="noopener noreferrer" href={'//'+elm.link}>{elm.link}</a></div>}
                                                    </div>
                                                    </div>
                                                </div>
                                            )})}
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
export default withRouter(News);