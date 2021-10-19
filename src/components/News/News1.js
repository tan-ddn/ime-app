import React from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
// import '../Scss/box.scss';
import Moment from 'react-moment';
import NewsBox from '../Boxes/NewsBox';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class News1 extends NewsBox {
    constructor(props) {
        super(props);

        this.state = {
            content: {
                title: 'News',
                // description: '<ul id="" class="news1-list">	<li><b>17.02.2021</b><br>        <a href="#">First steps in hydrogen metallurgy at IME</a></li><li><b>01.02.2021</b><br>        <a href="#">IME at LinkedIn</a></li><li><b>16.12.2020</b><br>        <a href="#">The power of more than 50 houshold microwaves </a></li><li><b>01.10.2020</b><br>        <a href="#">IME Aktuell – Current Issue</a></li>    </ul>',
                // button: 'Read More &#187;',
            }
        };
    }

    componentDidMount() {
    }

    render() {
        let news = 'Loading...';
        if (this.props.news) {
            news = this.props.news.slice(0, 4).map((elm) => {
                let link = "/news#"+elm.id;
                let title = (localStorage.getItem('lang') === 'ge') ? elm.titel : elm.titel_eng;
                return (<li key={elm.id} id={"news-"+elm.id}>
                    <b><Moment format="DD.MM.YYYY">{elm.datum}</Moment></b><br/>
                    <Link to={link}>{title}</Link>
                </li>);
            })
        }
        return (
            <NewsBox title={this.props.webText.news.title} height={this.props.height}>
                <ul id="" className="news1-list">
                    {news}
                </ul>
            </NewsBox>
        )
    }
    
    // render() {
    //     let classText = "events-box " + this.props.classNames;
    //     // console.log(classText);
    //     let news = 'Loading...';
    //     if (this.props.news) {
    //         news =  this.props.news.slice(0, 4).map((elm) => {
    //             let link = "/news#"+elm.id;
    //             return (<li key={elm.id} id={"news-"+elm.id}>
    //                 <b><Moment format="DD.MM.YYYY">{elm.datum}</Moment></b><br/>
    //                 <Link to={link}>{elm.titel_eng}</Link>
    //             </li>);
    //         });
    //     } 
    //     return (
    //         <div id="news-1" className={classText} style={{height: `${this.props.height}`}}>
    //             <div className="events-wrapper">
    //                 <h5 className="box-title" dangerouslySetInnerHTML={{__html: this.state.content.title}} />
    //                 {/* <div className="events-sum" dangerouslySetInnerHTML={{__html: this.state.content.description}} /> */}
    //                 <div className="events-sum">
    //                     <ul id="" className="news1-list">
    //                     {news}
    //                     </ul>
    //                 </div>
    //                 <Link className="anchor-style1" to="/news" dangerouslySetInnerHTML={{__html: this.state.content.button}} />
    //                 {/* {this.state.date != '0' &&
    //                 <div className="events-date" dangerouslySetInnerHTML={{__html: this.state.content.date}} />
    //                 } */}
    //             </div>
    //         </div>
    //     )
    // }
}
export default withLangSwitchListener(News1);