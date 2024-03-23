import React, { Component } from 'react';
import { Link, useHistory, withRouter } from "react-router-dom";
import './box.scss';
import Slider from "react-slick";
import SanitizedHTML from 'react-sanitized-html';
import StringHandle from '../../utility/stringHandle';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            type: this.props.type,
            linkTitle: this.props.linkTitle,
            lang: 2,
        };
    }

    componentDidMount() {
        this.changeLang();
    }
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.webText !== prevProps.webText) {
          this.changeLang();
        }
    }
    
    changeLang() {
        if (localStorage.getItem('lang') === 'ge') {
            this.setState({lang: 1});
        } else {
            this.setState({lang: 2});
        }
    }

    renderLink(href, linkContent, className = '') {
        if (this.state.content.externalBtnUrl) {
            return (<a className={className} target='_blank' rel="noopener noreferrer" href={href}>{linkContent}</a>);
        } else {
            return (<Link className={className} to={href} dangerouslySetInnerHTML={{__html: linkContent}} />);
        }
    }
    
    renderTitle(linkTitle) {
        let title = (this.state.lang == 1) ? this.state.content.title : this.state.content.title_eng;
        // console.log(this.state.lang);
        switch(linkTitle) {
            case '1':
                // return (
                //     <Link to={this.state.content.buttonUrl}>
                //         {title}
                //     </Link>
                // );
                return this.renderLink(this.state.content.buttonUrl, title);
            default:
                return title;
        }
    }

    teamSummary() {
        // console.log('teamSummary');
        let des = (this.state.lang == 1) ? this.state.content.description : this.state.content.description_eng;
        let linkHtml = this.renderLink(this.state.content.link, this.state.content.name);
        console.log(linkHtml);
        return (
            <div className="events-sum">
                <h6 className="team-name">
                    {/* <Link to={this.state.content.link}><span dangerouslySetInnerHTML={{__html: this.state.content.name}} /></Link> */}
                    {linkHtml}
                </h6>
                <div dangerouslySetInnerHTML={{__html: des}} />
            </div>
        );
    }
    researchSummary() {
        let link = "/research/" + this.state.content.id;
        // console.log(link);
        let des = (this.state.lang == 1) ? this.state.content.description : this.state.content.description_eng;
        let linkHtml = this.renderLink(link, this.state.content.button, "btn btn-primary");
        return (
            <div className="events-sum">
                {/* <p>{this.state.content.description}</p> */}
                <SanitizedHTML className="mb-3" html={StringHandle.extract(des, 50) + '...' } />
                {/* <Link className="btn btn-primary" to={link}>{this.state.content.button}</Link> */}
                {linkHtml}
            </div>
        );
    }

    renderSummary(type) {
        let des = (this.state.lang == 1) ? this.state.content.description : this.state.content.description_eng;
        switch(type) {
            case 'team':
                return this.teamSummary();
            case 'research':
                return this.researchSummary();
            case 'equipment':
                return null;
            default:
                return <div className="events-sum" dangerouslySetInnerHTML={{__html: des}} />;
        }
    }

    render() {
        let classText = "events-box " + this.props.classNames;
        // console.log(classText);
        let imageClass = "events-img " + this.props.image;
    
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            arrows: false
        }
    
        return (
            <div id={this.props.id} className={classText} style={{height: `${this.props.height}`}}>
                <div className="events-wrapper">
                    {this.state.content.title
                    ? this.props.titleSize === 'small'
                        // ? <h6 className="box-title" dangerouslySetInnerHTML={{__html: this.renderTitle(this.state.linkTitle)}} />
                        // : <h5 className="box-title" dangerouslySetInnerHTML={{__html: this.renderTitle(this.state.linkTitle)}} />
                        ? <h6 className="box-title">{this.renderTitle(this.state.linkTitle)}</h6>
                        : <h5 className="box-title">{this.renderTitle(this.state.linkTitle)}</h5>
                    : ''
                    }
                    {!Array.isArray(this.state.content.image)
                    ? <div className={imageClass}>
                        <img src={this.state.content.image} alt="" />
                    </div>
                    : 
                    <Slider {...settings} className="box-img-slider">
                            {this.state.content.image.map((item, index) => (
                                <div key={index} className="slide-img partner-logo" >
                                    <img src={item} alt="" />
                                </div>
                            ))}
                    </Slider>
                    }
                    {this.renderSummary(this.props.type)}
                    {/* {this.props.profile === '1'
                        ? <div className="events-sum" >
                            <h6 className="team-name"><Link to={this.state.content.link}><span dangerouslySetInnerHTML={{__html: this.state.content.name}} /></Link></h6>
                            <div dangerouslySetInnerHTML={{__html: this.state.content.description}} />
                            </div>
                        : <div className="events-sum" dangerouslySetInnerHTML={{__html: this.state.content.description}} />
                    }                     */}
                    {/* {this.state.content.button && <Link to={this.state.content.buttonUrl} className="anchor-style1" dangerouslySetInnerHTML={{__html: this.state.content.button}} />} */}
                    {this.state.content.button && this.renderLink(this.state.content.buttonUrl, this.state.content.button, 'anchor-style1')}
                    {this.state.content.date !== '' &&
                        <div className="events-date" dangerouslySetInnerHTML={{__html: this.state.content.date}} />
                    }
                </div>
            </div>
        )
    }
}
export default withLangSwitchListener(Box);