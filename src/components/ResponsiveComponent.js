import { Component } from 'react';

export default class ResponsiveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenSize : 'xs',
            screenOrientation : 'horizontal'
        }
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {

        let screenSize = 'xs';
        if (window.innerWidth >= 1200) {
            screenSize = 'xl';
        } else if (window.innerWidth >= 992) {
            screenSize = 'lg';
        } else if (window.innerWidth >= 768) {
            screenSize = 'md';
        } else if (window.innerWidth >= 576) {
            screenSize = 'sm';
        } else {
            screenSize = 'xs';
        }
        if (screenSize !== this.state.screenSize) {
            this.setState({screenSize: screenSize});
        }

        let screenOrientation = 'horizontal';
        if (window.outerHeight > window.outerWidth) screenOrientation = 'vertical';
        if (screenOrientation !== this.state.screenOrientation) {
            this.setState({screenOrientation: screenOrientation});
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
}