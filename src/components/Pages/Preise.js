import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import HistoryTimeline from '../History/HistoryTimeline';
import ResearchFeatures from '../Research/ResearchFeatures';
import imeAPICalls from '../../imeAPICalls';
import { Link } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Preise extends Component {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);
        this.state = {
            record: {}
        }
    }

    componentDidMount() {
        this.APICalls.get({ endpoint: 'Infoboard/Preisecat' }).then((res) => {
            this.setState({ record: res });
        });
    }

    render() {
        let preiseCat = Array();
        if (this.state.record.success) {
            preiseCat = this.state.record.results;

        }
        return (preiseCat === undefined || preiseCat.length == 0) ? '' : (
            <div className="preise">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/about/IME_Gebaeude_Juni_2004-027.jpg'} transformY='-15%' />
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                            <div id="wrapper">
                                {/*googleon: all*/}
                                <div className="">
                                    <div className="content" role="article">
                                        <div className="py-3">
                                            <h2 className="heading"><Link className="d-inline-block " to="/about">About Us</Link> <span className="text-dark">&#187; Awards</span></h2>
                                            {preiseCat.map((elm, index) => {
                                                let name = elm.name;
                                                let text = elm.text;
                                                if (localStorage.getItem('lang') === 'en') {
                                                    name = elm.name_eng;
                                                    text = elm.text_eng;
                                                }
                                                return (
                                                    <div key={index} id="awards" className="p-3">
                                                        <h4 className="heading">{name}</h4>
                                                        <div className='row'>
                                                            <div className='col-md-3'>
                                                                <div className='preise-img'>
                                                                    <img src={process.env.PUBLIC_URL + '/img/preise/' + elm.pic} alt={name} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'><div dangerouslySetInnerHTML={{ __html: text }} /></div>
                                                            <div className='col-md-5'>
                                                                <PreiseTable preiseCat={elm.name} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* <p className="to-top-link">
                            <a href="#">top</a>
                            </p> */}
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

class PreiseTable extends Component {
    APICalls = new imeAPICalls();

    constructor(props) {
        super(props);
        this.state = {
            record: {}
        }
    }

    componentDidMount() {
        this.APICalls.get({ endpoint: 'Infoboard/Preise', preise_cat: this.props.preiseCat }).then((res) => {
            this.setState({ record: res });
        });
    }

    render() {
        let preise = Array();
        let th_name = 'Name', th_year = 'Year';
        if (localStorage.getItem('lang') === 'ge') {
            th_year = 'Jahr';
        }
        let preiseRows = '';
        if (this.state.record.success) {
            preise = this.state.record.results;
            preiseRows = preise.map((elm, index) => {
                let name = elm.Name_eng;
                if (localStorage.getItem('lang') === 'ge') {
                    name = elm.Name;
                }
                return (
                    <tr key={index}>
                        <td>{elm.jahr}</td>
                        <td>{name}</td>
                    </tr>
                )
            });
        }
        return (preise === undefined || preise.length == 0) ? '' : (
            <table className='table table-sm0 table-striped table-hover'>
                <thead className='thead-color1'>
                    <tr>
                        <th>{th_year}</th>
                        <th>{th_name}</th>
                    </tr>
                </thead>
                <tbody>
                    {preiseRows}
                </tbody>
            </table>
        )
    }

}