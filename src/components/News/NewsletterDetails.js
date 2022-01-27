import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Db from '../../control/class.db';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class NewsletterDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get({action: 'NewsletterDetails', id: this.props.id}).then(res => res)
        };
    }

    componentDidMount() {
        // console.log(this.props.id);
        Db.get({action: 'NewsletterDetails', id: this.props.id}).then((res) => {
            this.setState({data: res});
        })
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            // console.log(this.props.id);
            Db.get({action: 'NewsletterDetails', id: this.props.id}).then((res) => {
                this.setState({data: res});
            })
        }
    }

    render() {
        let details = {ausgabe: ''};
        let pdf = '';
        if (this.state.data.success) {
            details = this.state.data.results[0];
            // console.log(details);
            pdf = process.env.PUBLIC_URL + '/pdf/ime_aktuell/'+details.pdfname;
        }
        return (details.ausgabe == '') ? 'Loading...' : (
            <div>
                <div className="pdf-preview events-img0">
                    <a target="_blank" className="preview-btn btn btn-dark" href={pdf}>View Pdf</a>
                    <Document file={pdf} renderMode="svg"
                        // onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {/* <Page pageNumber={pageNumber} /> */}
                        <Page pageNumber={1} />
                    </Document>
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                </div>
                <div style={{lineHeight: '1.4'}}>
                    <span>Topics of the edition {details.ausgabe} ({details.semester}):</span>
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
export default withLangSwitchListener(NewsletterDetails);