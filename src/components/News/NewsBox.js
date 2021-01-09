import React, { Component } from 'react';
import '../Scss/box.scss';

export default class NewsBox extends Component {
    
  render() {
    return (
        // {let content = this.props.content}
        <div id="events" className="events-box" style={{height: `${this.props.height}`}}>
            <div className="events-wrapper">
                <h5 className="box-title">{this.props.content.title}</h5>
                <div className="events-img">
                    <img src={this.props.content.image} alt="" />
                </div>
                <div className="events-sum">
                    {this.props.content.description}
                </div>
                <a className="anchor-style1" href="">Read More &#187;</a>
                <div className="events-date">
                    {this.props.content.date}
                </div> 
            </div>
        </div>
    )
  }
}