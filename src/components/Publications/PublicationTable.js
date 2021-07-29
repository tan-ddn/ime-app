import React from 'react';
import { publications } from '../../constants';
import Db from '../../control/class.db';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import PublicationAuthor from './PublicationAuthor';
import ReactPaginate from 'react-paginate';

export default class PublicationTable extends ResponsiveComponent {
    constructor(props) {
        super(props);

        this.state = {
            pageNo: 1,
            data: []
        }
    }

    componentDidMount() {
        if (this.props.teamId) {
            Db.get('PubFromProfile', this.props.teamId, this.state.pageNo).then((res) => {
                this.setState({data: res});
            });
        // } else {
        //     Db.getAllPub(this.state.pageNo).then((res) => this.setState({data: res}));
        }
    }

    handlePageClick = (obj) => {
        let selected = Number(obj.selected) + 1;
        this.setState({pageNo: selected}, () => {
            if (this.props.teamId) {
                Db.get('PubFromProfile', this.props.teamId, this.state.pageNo).then((res) => {
                    this.setState({data: res});
                });
            // } else {
            //     console.log(this.state.pageNo);
            //     Db.getAllPub(this.state.pageNo).then((res) => this.setState({data: res}));
            }
        });
    }

    echoPublications(publications) {
        console.log(publications);
        let publicationsHTML = publications.map((elm, index) => {
            let pdf = process.env.PUBLIC_URL + '/pdf/publications/' + elm.p_pdf;
            return <tr key={index}>
            <th scope="row">{elm.p_jahr}</th>
            <td>
                <p className="tag">{elm.pt_typ_eng}</p>
                <h6 className="title"><a href={pdf}>{elm.p_titel}</a></h6>
                <p className="meta">{elm.p_quelle}</p>
                <PublicationAuthor pubId={elm.p_id} />
            </td>
        </tr>
        });
        return publicationsHTML;
    }

    render() {
        let className = "publications " + this.props.className;
        let tableClass = "table table-sm0 table-striped table-hover table-responsive";
        let hasPag = (this.props.pagination == false) ? false : true, totalPages = 1, itemsPerPage = 10, pagiHTML = null;
        let publicationsHTML = 'Loading...';
        if (this.props.publications) {
            publicationsHTML = this.echoPublications(this.props.publications);
            totalPages = this.props.pagination.totalPages; 
            itemsPerPage = this.props.pagination.itemsPerPage;
        } else if (this.state.data.success) {
            publications = this.state.data.results;
            publicationsHTML = this.echoPublications(publications);
            hasPag = true; 
            totalPages = this.state.data.pagination.totalPages; 
            itemsPerPage = this.state.data.pagination.itemsPerPage;
        }
        // console.log(totalPages + ' ' + itemsPerPage);
        if (hasPag && totalPages>1) {
            let forcePage = Number(this.state.pageNo) - 1;
            pagiHTML = <ReactPaginate
                forcePage={forcePage}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                breakLabel={'...'}
                breakClassName={'break-me'}
                onPageChange={this.handlePageClick}
                containerClassName={'b-pagi'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
            />
        }
        return(
            <div id={this.props.id} className={className} style={{height: `${this.props.height}`}} >
                {pagiHTML}
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
                        {publicationsHTML}
                    </tbody>
                </table>
                {pagiHTML}
            </div>
        )
    };
}