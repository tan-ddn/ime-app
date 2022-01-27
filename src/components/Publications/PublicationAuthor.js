import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Db from '../../control/class.db';

export default class PublicationAuthor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: Db.get({action: 'AuthorFromPub', id: this.props.pubId}).then((res) => res)
        }
    }

    componentDidMount() {
        // Db.getWithId('AuthorFromPub', this.props.pubId).then((res) => {
        Db.get({action: 'AuthorFromPub', id: this.props.pubId}).then((res) => {
            this.setState({data: res});
        });
    }

    //The publication author database is archaic and unorganized, this is the best I can do to properly display authors accordingly
    pubAuthorName(author) {
        let name = author.name;
        if (author.name.indexOf("٠") != -1) {
            let nameArr = author.name.split("٠");
            name = nameArr[1];
        }
        return name;
    }

    render() {
        let pubAuthorHTML = '';
        if (this.state.data.success) {
            let authors = this.state.data.results;
            // console.log(authors);
            pubAuthorHTML = authors.map((elm, index) => {
                let name = this.pubAuthorName(elm);
                let comma = (index === authors.length-1) ? "" : ", ";
                if (elm.team_id >= 900 || elm.team_id === null) {
                    return <span className="after-comma0" key={index}>
                        {name+comma}</span>
                } else {
                    let url = '/team/'+elm.team_id;
                    return <span className="after-comma0" key={index}><Link to={url}>{name}</Link>{comma}</span>
                }   
            });
        }
        return(
            <p className="authors">{pubAuthorHTML}</p>
        )
    };
}