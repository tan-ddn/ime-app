import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HeaderBanner from '../HeaderBanner';
import HistoryTimeline from '../History/HistoryTimeline';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class About extends Component {
    render() {
        return(
            <div className="about">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/RWTH-FB5-039.jpg'} />
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div id="organization" className="py-3">
                                        <h2 className="heading">Our Organization</h2>
                                        <div className="py-3">
                                            <div className="pdf-preview organization-img">
                                                <img src={process.env.PUBLIC_URL + '/img/about/ime_orgaenisaet_id_2511.jpg'} alt="IME Organization"/>
                                                {/* <Document file={process.env.PUBLIC_URL + '/img/about/ime_orgaenisaet_id_2511.pdf'} renderMode="svg"
                                                    // onLoadSuccess={onDocumentLoadSuccess}
                                                > */}
                                                    {/* <Page pageNumber={pageNumber} /> */}
                                                    {/* <Page pageNumber={1} />
                                                </Document> */}
                                                {/* <p>Page {pageNumber} of {numPages}</p> */}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div id="history" className="py-3">
                                        <h2 className="heading">Our History</h2>
                                        <div className="py-30">
                                        <HistoryTimeline/>
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