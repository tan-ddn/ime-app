import React, { Component } from 'react';
import './publications.scss';
import PublicationTable from './PublicationTable';

const publications = [
    {
        title: 'Recycling Strategies for Ceramic All-Solid-State Batteries—Part I: Study on Possible Treatments in Contrast to Li-Ion Battery Recycling',
        metadata: 'Metals 2020, 10, 1523 DOI:10.3390/met10111523',
        tag: 'article in scientific journal',
        authors: 'Lilian Schwich geb. Peters, Michael Küpers, Martin Finsterbusch, Andrea Schreiber, Dina Fattakhova-Rohlfing, Olivier Guillon, Bernd Friedrich',
        year: '2020'
    },
    {
        title: 'Recovery of Cobalt From Primary and Secondary Materials – An Overview',
        metadata: 'MILITARY TECHNICAL COURIER, 2020, Vol. 68, Issue 2',
        tag: 'article in scientific journal',
        authors: 'Srecko Stopic, Bernd Friedrich',
        year: '2020'
    },
    {
        title: 'Evaluation of Recyclability of a WEEE Slag by Means of Integrative X-Ray Computer Tomography and SEM-Based Image Analysis',
        metadata: 'Minerals 2020, 10(4), 309 DOI: 10.3390/min10040309',
        tag: 'article in scientific journal',
        authors: 'Markus Buchmann, Nikolaus Borowski, Thomas Leißner, Thomas Heinig, Markus A. Reuter, Bernd Friedrich, Urs A. Peuker',
        year: '2020'
    },
]

export default class LatestPublications extends Component {
  render() {
    return (
        <PublicationTable className="latest-publications" thead="1" publications={publications} height={this.props.height}/>
        // <div id="" className="latest-publications" style={{height: `${this.props.height}`, marginTop: '30px'}} >
        //     <table className="table table-sm0 table-striped table-hover table-responsive">
        //         <thead className="thead-color1">
        //             <tr>
        //             <th scope="col">Year</th>
        //             <th scope="col">Publications</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //             <th scope="row">{publications[0].year}</th>
        //             <td>
        //                 <p className="tag">{publications[0].tag}</p>
        //                 <h6 className="title">{publications[0].title}</h6>
        //                 <p className="meta">{publications[0].metadata}</p>
        //                 <p className="authors">{publications[0].authors}</p>
        //             </td>
        //             </tr>
        //             <tr>
        //             <th scope="row">{publications[1].year}</th>
        //             <td>
        //                 <p className="tag">{publications[1].tag}</p>
        //                 <h6 className="title">{publications[1].title}</h6>
        //                 <p className="meta">{publications[1].metadata}</p>
        //                 <p className="authors">{publications[1].authors}</p>
        //             </td>
        //             </tr>
        //             <tr>
        //             <th scope="row">{publications[2].year}</th>
        //             <td>
        //                 <p className="tag">{publications[2].tag}</p>
        //                 <h6 className="title">{publications[2].title}</h6>
        //                 <p className="meta">{publications[2].metadata}</p>
        //                 <p className="authors">{publications[2].authors}</p>
        //             </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
  }
}