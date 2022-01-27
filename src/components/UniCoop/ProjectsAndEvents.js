import React from 'react';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import Db from '../../control/class.db';
import StyledPopup from '../Popup/Popup';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class ProjectsAndEvents extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            ppse: {success: false},
        }
    }

    componentDidMount() {
        Db.get({action: 'UniProjAndEvents', id: this.props.id}).then((res) => {
            this.setState({ppse: res});
        });
    }
    
    render() {
        let ppse = [];
        let popupBoxes = [];
        if (this.state.ppse.success) {
            ppse = this.state.ppse.results;
            // console.log(ppse);
            ppse.forEach((elm, index) => {
                elm['title'] = (localStorage.getItem('lang') === 'ge') ? elm.sna_Sonderaktiontitel_de : elm.sna_Sonderaktiontitel_eng;
                elm['options'] = (localStorage.getItem('lang') === 'ge') ? elm.sa_options_de : elm.sa_options_eng;
                elm['university'] = elm.sna_university;
                elm['period'] = elm.sna_zeitraum;
                elm['website'] = elm.sna_universitylink;
                popupBoxes[index] = '<div class="p-3"><h4 class="box-title mb-4">Project/Event</h4><table class="table table-striped table-hover table-responsive"><tbody><tr>';
                for (const[key, value] of Object.entries(elm)) {
                    let columns = ['title', 'options', 'university', 'period']
                    if (columns.indexOf(key) !== -1) {
                        popupBoxes[index] += '<th class="text-capitalize">'+key+'</th><td>'+value+'</td></tr><tr>';
                    } else if (key == 'website') {
                        popupBoxes[index] += '<th class="text-capitalize">'+key+'</th><td><a rel="noopener noreferrer" target="_blank" href="'+value+'">'+value+'</a></td></tr><tr>';
                    } else {
                    }
                }
                popupBoxes[index] += '</tr></tbody></table></div>';
            });
            // console.log(popupBoxes);
        }
        return (ppse.length == 0) ? 'Loading...' : (
            <div className="table-responsive">
            <table className="table table-striped table-hover ">
                <colgroup>
                    <col width="15%"></col>
                    <col width="70%"></col>
                    <col width="15%"></col>
                </colgroup>
                <thead className="thead-color1">
                    <tr>
                        <th>{(localStorage.getItem('lang') === 'ge') ? 'Option' : 'Options'}</th>
                        <th>{(localStorage.getItem('lang') === 'ge') ? 'Titel' : 'Title'}</th>
                        <th>{(localStorage.getItem('lang') === 'ge') ? 'Zeitraum' : 'Period'}</th>
                    </tr>
                </thead>
                <tbody>
                    {ppse.map((elm, index) => (
                    <tr key={index}>
                        <td>{elm.options}</td>
                        <td>
                            <StyledPopup trigger={<span className="link" >{elm.title}</span>} className="small-size">
                                <div dangerouslySetInnerHTML={{__html: popupBoxes[index]}}/>
                            </StyledPopup>
                        </td>
                        <td>{elm.period}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}

export default withLangSwitchListener(ProjectsAndEvents);