import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';
import Db from '../../control/class.db';

export default class ExamList extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get({action: 'ExamUploads', id: null}).then(res => res)
        }
    }

    componentDidMount() {        
        Db.get({action: 'ExamUploads', id: this.props.id}).then((res) => {
            this.setState({data: res});
        });
    }

    render() {
        let className = "pt-3 " + this.props.className;
        let examRows = null;
        if (this.state.data.success) {
            let exams = this.state.data.results;
            console.log(exams);
            examRows = exams.map((elm, index) => {
                return (
                    <tr key={index}>{elm.fach}
                        <td>{index}</td>
                        <td>{elm.k_f_fach}</td>
                        <td><a href={process.env.PUBLIC_URL + '/pdf/exam/' + elm.k_u_pdf}>{elm.k_u_titel}</a></td>
                    </tr>
                )
            })
        };
        return (examRows == null) ? 'Loading...' : (
            <div className={className}>
                <p>Hier finden Sie alle derzeit verfügbaren (36) alten Klausuren zum Fach (Vertiefungsfach 1) online.</p>
                <div className="table-responsive">
                    <table className="table table-sm0 table-striped table-hover">
                        <thead class="thead-color1">
                        <tr>
                            <th>#</th>
                            <th>Fach</th>
                            <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {examRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}