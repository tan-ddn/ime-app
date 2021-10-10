import React from 'react';
import { publications } from '../../constants';
import Db from '../../control/class.db';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import PublicationAuthor from './PublicationAuthor';
import ReactPaginate from 'react-paginate';
import SearchBar from '../Search/SearchBar';

export default class PublicationTable extends ResponsiveComponent {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);

        this.state = {
            searchInput: '',
            keywords: (this.props.keywords) ? this.props.keywords : '',
            pageNo: 1,
            hasPag: (this.props.pagination == false) ? false : true,
            totalPages: 1,
            itemsPerPage: 10,
            publications: [],
            data: []
        }
    }

    componentDidMount() {
        if (this.props.recent == "1") {
            Db.get('RecentPub').then((res) => {
                this.setState({
                    data: res,
                    publications: res.results,
                });
            });
        } else if (this.props.teamId > 0) {
            Db.get('PubFromProfile', this.props.teamId, this.state.pageNo).then((res) => {
                this.setState({
                    data: res,
                    publications: res.results,
                    hasPag: true,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
            });
        // } else {
        //     Db.getAllPub(this.state.pageNo).then((res) => this.setState({data: res}));
        } else if (this.props.uniId > 0) {
            Db.get('CoopUniPub', this.props.uniId, this.state.pageNo).then((res) => {
                this.setState({
                    data: res,
                    publications: res.results,
                    hasPag: true,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
            });
        } else {
            // console.log(this.props.keywords);
            Db.get('AllPub', -1, this.state.pageNo, this.state.searchInput, this.state.keywords).then((res) => {
                this.setState({
                    data: res, 
                    publications: res.results,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
                console.log(this.state.totalPages);
            });
        }
    }

    handlePageClick = (obj) => {
        let selected = Number(obj.selected) + 1;
        this.setState({pageNo: selected}, () => {
            if (this.props.teamId > 0) {
                Db.get('PubFromProfile', this.props.teamId, this.state.pageNo).then((res) => {
                    this.setState({data: res, publications: res.results});
                });
            // } else {
            //     console.log(this.state.pageNo);
            //     Db.getAllPub(this.state.pageNo).then((res) => this.setState({data: res}));
            } else if (this.props.uniId > 0) {
                Db.get('CoopUniPub', this.props.uniId, this.state.pageNo).then((res) => {
                    this.setState({data: res, publications: res.results});
                });
            } else {
                Db.get('AllPub', -1, this.state.pageNo, this.state.searchInput, this.state.keywords).then((res) => {
                    this.setState({
                        data: res, 
                        publications: res.results,
                        totalPages: res.pagination.totalPages,
                        itemsPerPage: res.pagination.itemsPerPage
                    });
                    console.log(this.state.totalPages);
                });
            }
        });
    }

    updateInput = async (input) => {
        console.log(input);
        this.setState({searchInput: input, pageNo: 1}, () => {
            let teamId = (this.props.teamId) ? this.props.teamId : -1;
            Db.get('AllPub', teamId, this.state.pageNo, input, this.state.keywords).then((res) => {
                this.setState({
                    data: res, 
                    publications: res.results,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
                console.log(this.state.totalPages);
            });
        });
    }

    echoPublications(publications) {
        console.log(publications);
        if (publications == null || publications == undefined || publications == []) return (<tr><td colspan="2">No Results.</td></tr>);
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
        let tableClass = "table table-sm0 table-striped table-hover";
        // let hasPag = (this.props.pagination == false) ? false : true, totalPages = 1, itemsPerPage = 10;
        let publications = this.state.publications, publicationsHTML = 'Loading...';
        // if (this.props.publications) {
        //     this.setState({publications: this.props.publications});
        //     totalPages = this.props.pagination.totalPages; 
        //     itemsPerPage = this.props.pagination.itemsPerPage;
        // } else if (this.state.data.success) {
        //     this.setState({publications: this.state.data.results});
        //     // publicationsHTML = this.echoPublications(publications);
        //     hasPag = true; 
        //     totalPages = this.state.data.pagination.totalPages; 
        //     itemsPerPage = this.state.data.pagination.itemsPerPage;
        // }
        if (this.props.limit) {
            let limit = Number(this.props.limit);
            publications = this.state.publications.splice(0, limit);
        }
        publicationsHTML = this.echoPublications(publications);
        // console.log(totalPages + ' ' + itemsPerPage);
        let pagiHTML = null;
        if (this.state.hasPag && this.state.totalPages>1) {
            let forcePage = Number(this.state.pageNo) - 1;
            pagiHTML = <ReactPaginate
                forcePage={forcePage}
                pageCount={this.state.totalPages}
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
                <div className="row">
                    <div className="col-12 col-md-8">{pagiHTML}</div>
                    <div className="col-12 col-md-4">
                        {this.props.search &&
                        <SearchBar className="publication-search" input={this.state.searchInput} onChange={this.updateInput}/>
                        }
                    </div>
                </div>
                <div className="table-responsive">
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
                </div>
                {pagiHTML}
            </div>
        )
    };
}