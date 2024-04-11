import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Db from '../../control/class.db';

export default class NewsletterImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get({action: 'NewsletterPdf', id: this.props.id}).then(res => res)
        };
    }

    componentDidMount() {
        // console.log(this.props.id);
        Db.get({action: 'NewsletterPdf', id: this.props.id}).then((res) => {
            this.setState({data: res});
        })
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            // console.log(this.props.id);
            Db.get({action: 'NewsletterPdf', id: this.props.id}).then((res) => {
                this.setState({data: res});
            })
        }
    }

    render() {
        let pdf = '';
        if (this.state.data.success) {
            pdf = process.env.PUBLIC_URL + '/pdf/ime_aktuell/'+this.state.data.results[0].pdf;
            // console.log(pdf);
        }
        return (
            <div className="pdf-preview events-img">
                <a target="_blank" className="preview-btn btn btn-dark" href={pdf}>View Pdf</a>
                <Document file={pdf} renderMode="svg"
                    // onLoadSuccess={onDocumentLoadSuccess}
                >
                    {/* <Page pageNumber={pageNumber} /> */}
                    <Page pageNumber={1} />
                </Document>
                {/* <p>Page {pageNumber} of {numPages}</p> */}
            </div>
        )
    }
}