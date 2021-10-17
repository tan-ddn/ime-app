import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import ResponsiveComponent from '../ResponsiveComponent';
import './box.scss';
// import Box from '../Box';

export default class NewsBox extends ResponsiveComponent {
    
//   render() {
//     let classText = "events-box " + this.props.classNames;
//     console.log(classText);
//     let imageClass = "events-img " + this.props.image;
//     return (
//         <div id="events" className={classText} style={{height: `${this.props.height}`}}>
//             <div className="events-wrapper">
//                 <h5 className="box-title">{this.props.props.title}</h5>
//                 <div className={imageClass}>
//                     <img src={this.props.props.image} alt="" />
//                 </div>
//                 <div className="events-sum">
//                     {this.props.props.description}
//                 </div>
//                 <a className="anchor-style1" href="">{this.props.props.button} &#187;</a>
//                 {this.props.date != '0' &&
//                 <div className="events-date">
//                     {this.props.props.date}
//                 </div> 
//                 }
//             </div>
//         </div>
//     )
//   }
    render() {
        let classText = "events-box news-box " + this.props.classNames;
        return (
            <div id="news-1" className={classText} style={{height: `${this.props.height}`}}>
                <div className="events-wrapper">
                    <h5 className="box-title">
                        {this.props.title}
                    </h5>
                    {this.props.image}
                    {/* <div className="events-sum" dangerouslySetInnerHTML={{__html: this.props.content.description}} /> */}
                    {this.props.children &&
                    <div className="events-sum">
                        {this.props.children}
                    </div>
                    }
                    {/* {this.props.content.button &&
                    <Link to={this.props.content.buttonUrl} className="anchor-style1" dangerouslySetInnerHTML={{__html: this.props.content.button}} />
                    } */}
                    {/* {this.props.content.date != '0' &&
                    <div className="events-date" dangerouslySetInnerHTML={{__html: this.props.content.date}} />
                    } */}
                </div>
            </div>
        )
    }
}