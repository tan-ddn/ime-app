import React from 'react';
import { publications } from '../../constants';
import Db from '../../control/class.db';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import PublicationAuthor from './PublicationAuthor';
import ReactPaginate from 'react-paginate';
import SearchBar from '../Search/SearchBar';
import withLangSwitchListener from '../Languages/LangSwitchListener';

class PublicationTable extends ResponsiveComponent {
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

    fetchData = () => {
        if (this.props.recent == "1") {
            Db.get({action: 'RecentPub'}).then((res) => {
                this.setState({
                    data: res,
                    publications: res.results,
                });
            });
        } else if (this.props.teamId > 0) {
            Db.get({action: 'PubFromProfile', id: this.props.teamId, pageNo: this.state.pageNo}).then((res) => {
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
            Db.get({action: 'CoopUniPub', id: this.props.uniId, pageNo: this.state.pageNo}).then((res) => {
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
            Db.get({action: 'AllPub', id: -1, pageNo: this.state.pageNo, search: this.state.searchInput, keywords: this.state.keywords}).then((res) => {
                this.setState({
                    data: res, 
                    publications: res.results,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
                // console.log(this.state.totalPages);
            });
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.webText !== prevProps.webText) {
          this.fetchData();
        }
      }

    componentDidMount() {
        this.fetchData();
    }

    handlePageClick = (obj) => {
        let selected = Number(obj.selected) + 1;
        this.setState({pageNo: selected}, () => {
            if (this.props.teamId > 0) {
                Db.get({action: 'PubFromProfile', id: this.props.teamId, pageNo: this.state.pageNo}).then((res) => {
                    this.setState({data: res, publications: res.results});
                });
            // } else {
            //     console.log(this.state.pageNo);
            //     Db.getAllPub(this.state.pageNo).then((res) => this.setState({data: res}));
            } else if (this.props.uniId > 0) {
                Db.get({action: 'CoopUniPub', id: this.props.uniId, pageNo: this.state.pageNo}).then((res) => {
                    this.setState({data: res, publications: res.results});
                });
            } else {
                Db.get({action: 'AllPub', id: -1, pageNo: this.state.pageNo, search: this.state.searchInput, keywords: this.state.keywords}).then((res) => {
                    this.setState({
                        data: res, 
                        publications: res.results,
                        totalPages: res.pagination.totalPages,
                        itemsPerPage: res.pagination.itemsPerPage
                    });
                    // console.log(this.state.totalPages);
                });
            }
        });
    }

    updateInput = async (input) => {
        // console.log(input);
        this.setState({searchInput: input, pageNo: 1}, () => {
            let teamId = (this.props.teamId) ? this.props.teamId : -1;
            Db.get({action: 'AllPub', id: teamId, pageNo: this.state.pageNo, search: input, keywords: this.state.keywords}).then((res) => {
                this.setState({
                    data: res, 
                    publications: res.results,
                    totalPages: res.pagination.totalPages,
                    itemsPerPage: res.pagination.itemsPerPage
                });
                // console.log(this.state.totalPages);
            });
        });
    }

    echoPublications(publications) {
        // console.log(publications);
        if (publications == null || publications == undefined || publications == []) return (<tr><td colspan="2">{this.props.webText.publications.no_results}</td></tr>);
        let publicationsHTML = publications.map(elm => {
            let pdf = process.env.PUBLIC_URL + '/pdf/publications/' + elm.p_pdf;
            return <tr key={elm.p_id}>
            <th scope="row">{elm.p_jahr}</th>
            <td>
                <p className="tag">{(localStorage.getItem('lang') === 'ge') ? elm.pt_typ : elm.pt_typ_eng}</p>
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
            // console.log(publications);
            let limit = Number(this.props.limit);
            publications = this.state.publications.slice(0, limit);
        }
        publicationsHTML = this.echoPublications(publications);
        // console.log(publications);
        // console.log(this.props.webText);
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
                            <th scope="col">{this.props.webText.publications.year}</th>
                            <th scope="col">{this.props.webText.publications.title}</th>
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
export default withLangSwitchListener(PublicationTable);