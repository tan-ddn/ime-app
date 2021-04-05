import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';

export default class FullscreenWidth extends ResponsiveComponent {
    // DOMNode;

    constructor(props) {
        super(props);
        // this.fullscreenWidthRef = React.createRef();
        this.fullscreenWidthElm = null;
        this.setFullscreenWidthRef = elm => {
            this.fullscreenWidthElm = elm;
        }
        this.state = {
            // cssText: 'position: static;',
            viewWidth: document.body.clientWidth,
            transformLeft: 0
        };
        this.resize = () => {
            if (this.fullscreenWidthElm) {
                this.setState({transformLeft: 0});
                let spaceLeft = parseInt(this.fullscreenWidthElm.getBoundingClientRect().x)*-1;
                this.setState({viewWidth: document.body.clientWidth});
                // this.setState({transformLeft: spaceLeft}, this.transformText);
                this.setState({transformLeft: spaceLeft});
            }
        }
        this.resize = this.resize.bind(this);
    }
    
    componentDidMount() {
        // window.addEventListener("DOMContentLoaded", this.resize.bind(this));
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    // resize() {
    //     // let fullscreenWidth = document.getElementsByClassName('fullscreen-width');
    //     // for (let elm of fullscreenWidth) {
    //     //     elm.style.cssText = 'position: static;';
    //     //     let viewWidth = document.body.clientWidth;
    //     //     let rect = elm.getBoundingClientRect();
    //     //     let marginLeft = rect.left + 0;
        
    //     //     elm.style.cssText = "width: " + viewWidth + "px; margin-left: -" + marginLeft + "px;";
    //     //     // console.log(elm);
    //     // }

    //     let DOMNode = this.fullscreenWidthRef.current;
    //     // DOMNode.style.cssText = this.state.cssText;
    //     // let viewWidth = document.body.clientWidth;
    //     // let rect = DOMNode.getBoundingClientRect();
    //     // // console.log(rect);
    //     // DOMNode.style.cssText = "width: " + viewWidth + "px; margin-left: -" + rect.left + "px;";

    //     this.setState({transformLeft: 0});
    //     let spaceLeft = parseInt(DOMNode.getBoundingClientRect().x)*-1;
    //     this.setState({viewWidth: document.body.clientWidth});
    //     // this.setState({transformLeft: spaceLeft}, this.transformText);
    //     this.setState({transformLeft: spaceLeft});
    // }

    // transformText() {
    //     return 'translateX('+this.state.transformLeft+'px)';
    // }

    componentWillUnmount() {
        // window.removeEventListener("DOMContentLoaded", this.resize.bind(this));
        // window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        // console.log(this.state.transformLeft);
        return(
            // <div className={'fullscreen-width px-3 '+this.props.className}  ref={this.fullscreenWidthRef} style={{width: this.state.viewWidth, transform: this.transformText()}}>
            <div className={'fullscreen-width px-3 '+this.props.className}  ref={this.setFullscreenWidthRef} style={{width: this.state.viewWidth, marginLeft: this.state.transformLeft}}>
                {this.props.children}
            </div>
        );
    }
}