import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Db from '../../control/class.db';
// import '../Scss/box.scss';
import Box from '../Boxes/Box';
import NewsBox from '../Boxes/NewsBox';
import NewsletterDetails from './NewsletterDetails';

// const [numPages, setNumPages] = useState(null);
// const [pageNumber, setPageNumber] = useState(1);

// function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
// }

const selectDropdown = '<dl style="font-size: .7em; margin: 4px 0 0;"><!--dt>Select Edition (Semester):</dt--><dd style="margin: 0;"><select name="ausgabe" id="ausgabe" class="w-100"><option value="" style="font-weight:bold;">Select Edition (Semester)</option>				<option value="44">SS 2020</option>				<option value="43">WS 2019/2020</option>				<option value="42">SS 2019</option>				<option value="41">WS 2018/2019</option>				<option value="40">SS 2018</option>				<option value="39">WS 2017/2018</option>				<option value="38">SS 2017</option>				<option value="37">WS 2016/2017</option>				<option value="36">SS 2016</option>				<option value="34">WS 2015/2016</option>				<option value="33">SS 2015</option>				<option value="32">WS 2014/2015</option>				<option value="31">SS 2014</option>				<option value="29">WS 2013/2014</option>				<option value="27">SS 2013</option>				<option value="26">WS 2012/2013</option>				<option value="4">SS 2012</option>				<option value="1">WS 2011/2012</option>				<option value="23">SS 2011</option>				<option value="22">WS 2010/2011</option>				<option value="21">SS 2010</option>				<option value="20">WS 2009/2010</option>				<option value="19">SS 2009</option>				<option value="24">WS 2008/2009</option>				<option value="18">SS 2008</option>				<option value="25">WS 2007/2008</option>				<option value="17">SS 2007</option>				<option value="16">WS 2006/2007</option>				<option value="15">SS 2006</option>				<option value="14">WS 2005/2006</option>				<option value="13">SS 2005</option>				<option value="12">WS 2004/2005</option>				<option value="11">SS 2004</option>				<option value="10">WS 2003/2004</option>				<option value="9">SS 2003</option>				<option value="8">WS 2002/2003</option>				<option value="7">SS 2002</option>				<option value="6">WS 2001/2002</option>				<option value="5">SS 2001</option>			</select></dd></dl>';
const topics = '<div><span>Topics of the edition 39 (SS 2020):</span><ul>                <li>phD topic -  Pyrolysis for integration of SLF in the WEEE Recycling</li>                <li>phD topic - "Early stage gold recovery from PCBs via thiosulfate leaching"</li>                <li>phD topic - Metallothermal scandium reduction</li>                </ul></div>';

export default class Newsletter extends Box {
    constructor(props) {
        super(props);

        this.state = {
            content: {
                // title: 'Newsletter',
                // description: '<div class="newsletter-sum">' + topics + '</div>',
                // button: 'Read Pdf &#187;',
            },
            id: null,
            data: Db.get('Newsletter').then(res => res)
        };
    }

    componentDidMount() {
        Db.get('Newsletter').then((res) => {
            this.setState({
                data: res,
                id: res.results[0].id,
            });
        });
    }

    handleChange = (event) => {
        this.setState({id: event.target.value}, () => {
            console.log(this.state.id);
        });
        // console.log(event.target.value);
    };
    
    render() {
        let classText = "events-box " + this.props.classNames;
        let newsletter = '';
        let selectDropdown = null;
        let options = null;
        if (this.state.data.success) {
            newsletter = this.state.data.results;
            // console.log(newsletter);
            options = newsletter.map((elm, index) => {
                if (index == 0) {
                    return (<option key={elm.id} value={elm.id} selected>{elm.semester}</option>);
                }
                return (<option key={elm.id} value={elm.id}>{elm.semester}</option>);
            });
            selectDropdown = (<div>Newsletter<div style={{fontSize: '.7em', margin: '4px 0 0;'}}><select name="newsletter" id="newsletter" className="w-100" onChange={this.handleChange} value={this.state.newsletterId}><option value="" style={{fontWeight: 'bold'}}>Select Edition (Semester)</option>{options}</select></div></div>);
            // console.log(selectDropdown);
        }
        return (newsletter == '') ? 'Loading...' : (
            <NewsBox title={selectDropdown} height={this.props.height}>
                <NewsletterDetails id={this.state.id} />
            </NewsBox>
        )
        // return (newsletter == '') ? 'Loading...' : (
        //     <div id="news-1" className={classText} style={{height: `${this.props.height}`}}>
        //         <div className="events-wrapper">
        //             <h5 className="box-title">Newsletter
        //                 <div style={{fontSize: '.7em', margin: '4px 0 0;'}}>
        //                     <select name="newsletter" id="newsletter" className="w-100" onChange={this.handleChange} value={this.state.newsletterId}>
        //                         <option value="" style={{fontWeight: 'bold'}}>Select Edition (Semester)</option>
        //                         {options}
        //                     </select>
        //                 </div>
        //             </h5>
        //             {this.state.newsletterId &&
        //             <NewsletterImage id={this.state.newsletterId} />
        //             }
        //             {/* <div className="pdf-preview events-img">
        //                 <a className="preview-btn btn btn-dark" href="#">View Pdf</a>
        //                 <Document file={process.env.PUBLIC_URL + '/pdf/ime_aektuell_nr_id_7989.pdf'} renderMode="svg"
        //                     // onLoadSuccess={onDocumentLoadSuccess}
        //                 >
        //                     {/* <Page pageNumber={pageNumber} /> */}
        //                     {/* <Page pageNumber={1} />
        //                 </Document> */}
        //                 {/* <p>Page {pageNumber} of {numPages}</p> */}
                        
        //             {/* </div> */}
        //             <div className="events-sum">
        //                 <div id="" className="newsletter-sum" dangerouslySetInnerHTML={{__html: topics}} />
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}