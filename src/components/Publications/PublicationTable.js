import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';

export default class PublicationTable extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            publications: this.props.publications
        }
    }


    render() {
        let className = "publications " + this.props.className;
        let tableClass = "table table-sm0 table-striped table-hover table-responsive";
        return(
            <div id={this.props.id} className={className} style={{height: `${this.props.height}`, marginTop: '30px'}} >
                <table className={tableClass}>
                    {this.props.thead === '1' &&
                        <thead className="thead-color1">
                            <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Publications</th>
                            </tr>
                        </thead>
                    }
                    <tbody>
                        {this.state.publications.map((elm, index) => (
                        <tr key={index}>
                            <th scope="row">{elm.year}</th>
                            <td>
                                <p className="tag">{elm.tag}</p>
                                <h6 className="title">{elm.title}</h6>
                                <p className="meta">{elm.metadata}</p>
                                <p className="authors">{elm.authors}</p>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
}