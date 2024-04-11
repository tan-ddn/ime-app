import React, { Component } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Db from '../../control/class.db';
import imeAPICalls from '../../imeAPICalls';
import { globalLangStateContext } from '../../UserContext';
import withLangSwitchListener from '../Languages/LangSwitchListener';

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// // import '@react-pdf-viewer/default-layout/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

class NewsletterDetails extends Component {
    APICalls = new imeAPICalls();
    // defaultLayoutPluginInstance = defaultLayoutPlugin();

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            pdf: '',
        };
    }

    componentDidMount() {
        // console.log(this.props.id);
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            // console.log(this.props.id);
            this.fetchData();
        }
    }

    fetchData() {
        this.APICalls.get({ endpoint: 'News/Newsletter', id: this.props.id }).then(res => {
            this.setState({ data: res });
        })
    }

    render() {
        let details = { ausgabe: '' };
        let pdf = '';
        if (this.state.data.success) {
            details = this.state.data.results[0];
            // console.log(details);
            pdf = process.env.PUBLIC_URL + '/pdf/ime_aktuell/' + details.pdf;
        }
        let texts = (this.context) ? this.context.webText : null;
        console.log(pdf);
        return (details.ausgabe == '' || texts == null || pdf == '') ? 'Loading...' : (
            <div>
                <div className="pdf-preview events-img0">
                    <a target="_blank" className="preview-btn btn btn-dark" href={pdf}>View Pdf</a>
                    <Document file={pdf} renderMode="canvas"
                        // onLoadProgress={({ loaded, total }) => alert('Loading a document: ' + (loaded / total) * 100 + '%')}
                        onLoadSuccess={(e) => console.log(e, pdf)}
                    >
                    {/* <Page pageNumber={pageNumber} /> */}
                    <Page pageNumber={1} />
                    </Document>
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                    {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                        <div style={{ width: '100%' }}>
                            <Viewer
                                fileUrl={pdf}
                                plugins={[
                                    // this.defaultLayoutPluginInstance,
                                ]}
                            />
                        </div>
                    </Worker> */}
                </div>
                <div style={{ lineHeight: '1.4' }}>
                    <span>{texts.news.topic_of_the_edition} {details.ausgabe} ({details.semester}):</span>
                    {localStorage.getItem('lang') === 'ge'
                        ? (<ul>
                            <li>{details.thema1}</li>
                            <li>{details.thema2}</li>
                            <li>{details.thema3}</li>
                        </ul>)
                        : (<ul>
                            <li>{details.thema_eng1}</li>
                            <li>{details.thema_eng2}</li>
                            <li>{details.thema_eng3}</li>
                        </ul>)
                    }

                </div>
            </div>
        )
    }
}
NewsletterDetails.contextType = globalLangStateContext;
export default withLangSwitchListener(NewsletterDetails);