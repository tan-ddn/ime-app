import React from 'react';
// import '../Scss/box.scss';
import Box from '../Box';

export default class News1 extends Box {
    constructor(props) {
        super(props);

        this.state = {
            content: {
                title: 'News',
                description: '<ul id="" class="news1-list">	<li><b>17.02.2021</b><br>        <a href="#">First steps in hydrogen metallurgy at IME</a></li><li><b>01.02.2021</b><br>        <a href="#">IME at LinkedIn</a></li><li><b>16.12.2020</b><br>        <a href="#">The power of more than 50 houshold microwaves </a></li><li><b>01.10.2020</b><br>        <a href="#">IME Aktuell – Current Issue</a></li>    </ul>',
                button: 'Read More &#187;',
            }
        };
    }
    
    render() {
        let classText = "events-box " + this.props.classNames;
        // console.log(classText);
        return (
            <div id="news-1" className={classText} style={{height: `${this.props.height}`}}>
                <div className="events-wrapper">
                    <h5 className="box-title" dangerouslySetInnerHTML={{__html: this.state.content.title}} />
                    <div className="events-sum" dangerouslySetInnerHTML={{__html: this.state.content.description}} />
                    <a className="anchor-style1" href="#" dangerouslySetInnerHTML={{__html: this.state.content.button}} />
                    {/* {this.state.date != '0' &&
                    <div className="events-date" dangerouslySetInnerHTML={{__html: this.state.content.date}} />
                    } */}
                </div>
            </div>
        )
    }
}