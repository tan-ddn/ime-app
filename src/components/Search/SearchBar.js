import React from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import './search.scss';

class SearchBar extends ResponsiveComponent {
    BarStyling = {width: "20rem", background: "#f2f2f2", border: "none", padding: "0.5rem"};
    constructor(props) {
        super(props);
    }

    render() {
        let className = (this.props.className) ? this.props.className : '';
        return (
            <input
                className={this.props.className}
                style={this.BarStyling}
                key=""
                value={this.props.input}
                placeholder={"Search..."}
                onChange={(e) => {this.props.onChange(e.target.value);}}
            />
        )
    }
}

export default SearchBar