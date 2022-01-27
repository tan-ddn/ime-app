import React from 'react';
import { Link, passCorrect } from 'react-router-dom';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import SanitizedHTML from 'react-sanitized-html';
import Db from '../../control/class.db';
import ExamList from './ExamList';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class ExamLogin extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            pass: this.props.pass,
            fach: null,
            data: Db.get({action: 'FachDetails'}).then(res => res),
            passCorrect: null
        }
    }

    handleFachChange(e) {
        this.setState({id: e.target.value });
    }
      
    handlePassChange(e) {
        this.setState({pass: e.target.value });
    }
      
    handleClick(e){
        e.preventDefault();
        Db.get({action: 'FachId', id: this.state.id, pageNo: null, search: this.state.pass}).then((res) => {
            this.setState({fach: res});
            // console.log(this.state.fach);
            if (this.state.fach.success) {
                this.setState({passCorrect: true});
                // return (<passCorrect to={'/study/exam/'+this.state.id} />)
            } else {
                this.setState({passCorrect: false});
            }
        });
    }

    componentDidMount() {        
        Db.get({action: 'FachDetails'}).then((res) => {
            this.setState({data: res});
        });
    }

    render() {
        let className = "exams-wrap p-4 bg-grey " + this.props.className;
        let fachSelect = 'Loading...';
        if (this.state.data.success) {
            let fachs = this.state.data.results;
            // console.log(fachs);
            fachSelect = fachs.map((elm, index) => {
                return (
                    <option key={index} value={elm.id}>{elm.fach}</option>
                )
            })
        };
        return(
            <div className={className}>
            <div className="row">
                <div className="py-2 col-12 col-sm-4">
                {localStorage.getItem('lang') == 'ge'
                ? <p>Hier bieten wir Ihnen die M&ouml;glichkeit alte Klausuren runterzuladen bzw. Ergebnisse neuer Klausuren einzusehen. Die entsprechenden Passw&ouml;rter erfragen Sie bitte in der Vorlesung.</p>
                : <p>Here you can download old tests or have a look at the results of new tests. Please ask for the necessary passwords in the lectures. </p>
                }
                </div>
                <div className="py-2 col-12 col-sm-8">
                <form className="exam-form">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" htmlFor="semesterSelect">Edition (Semester):</span>
                        </div>
                        <select className="custom-select" id="semesterSelect" value={this.state.id} onChange={(e) => this.handleFachChange(e)} >
                            <option value="">Select Fach</option>
                            {fachSelect}
                            {/* <option value="17">Vertiefungsfach 1</option>
                            <option value="19">Study Major</option>
                            <option value="21">Hydrometallurgie</option>
                            <option value="15">Basisfach</option>
                            <option value="16">Basic Course</option> */}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" htmlFor="password">Password:</span>
                        </div>
                        <input type="pass" className="form-control" id="pass" placeholder="Password" value={this.state.pass} onChange={(e) => this.handlePassChange(e)} />
                    </div>
                    <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>Login</button>
                    <div className="mt-3">
                        {/* { this.state.passCorrect &&
                        <Link to={'/study/exam/'+this.state.id}>Login successfully! Click here to view the exams.</Link>
                        } */}
                        { this.state.passCorrect == false &&
                        <span className="text-danger">Incorrect password!</span>
                        }
                        { this.state.passCorrect &&
                            <ExamList id={this.state.id} />
                        }
                    </div>
                </form>
                </div>
            </div>            
            </div>
        )
    };
}

export default withLangSwitchListener(ExamLogin);