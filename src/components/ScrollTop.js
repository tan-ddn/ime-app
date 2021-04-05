import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ScrollTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showScroll: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScrollTop.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.checkScrollTop.bind(this));
    }

    checkScrollTop = () => {
        if (!this.state.showScroll && window.pageYOffset > 400) {
            this.setState({showScroll: true});
        } else if (this.state.showScroll && window.pageYOffset <= 400) {
            this.setState({showScroll: false});
        }
    };

    scrollTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <div className="scrollTop" onClick={this.scrollTop} style={{display: this.state.showScroll ? 'flex' : 'none'}} >
                <FontAwesomeIcon icon="angle-up"/>
            </div>
        )
    };
}