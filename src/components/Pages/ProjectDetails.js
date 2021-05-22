import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderBanner from '../HeaderBanner';
import { withRouter } from "react-router";

let projectDetails = {
    'id': 1,
    'title': ' 	Development of a pyro-/hydrometallurgical process for the recovery of valuable metals from WEEE through small-scale operations in South Africa',
    'type': 'Verbundforschung',
    'sponsorship': 'BMBF (DLR)',
    'duration': '01.06.2020 - 31.05.2022',
    'partner': 'Chemical Engineering Department UCT (University of Cape Town) - Südafrika',
    'description': 'With an annual production of over 50 million tons and a high content of valuable metals, electronic scrap represents an important secondary resource.However, current recycling technologies are dominated by large-scale, pyrometallurgical processes, so that smaller companies are not able to establish themselves in the market. A new recycling approach involves hydrometallurgical treatment of electronic scrap, which enables selective and environmentally friendly recovery of valuable metals. Prof. Jochen Petersen of the University of Cape Town was awarded the German-African Innovation Prize for his pioneering research in the complex areas of hydrometallurgy. The research project resulting from this award aims to further develop and implement previous operations on a small scale at local recycling companies in South Africa. The process include multi-stage leaching and recovery of precious and base metals as well as the recirculation of the process solution used. The German project partner IME - RWTH Aachen University, lead by Prof. Bernd Friedrich is contributing its expertise in thermal pretreatment to the project. This pretreatment of electronic scrap significantly facilitates the subsequent hydrometallurgical metal recovery. The technical know-how will be transferred through a cooperative workshop. In addition, the results of the project will be made available to local recycling companies to enable the technical implementation. In this context, the socio-economic and ecological sustainability of the project will be ecological sustainability of the project will be critically evaluated in a local African context.'
};

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails: projectDetails
        }
    }    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = id => {
        // console.log(id);
        this.setState({id: id});
    }
    
    render() {
        let basicDetails = Object.assign({}, projectDetails);
        delete basicDetails.description;
        delete basicDetails.id;
        console.log(this.state.projectDetails.description);
        return(
            <div className="team">
                <HeaderBanner img={process.env.PUBLIC_URL + '/img/home-slider/160224-IME-057.jpg'} transformY='5%' overlay='dark'/>
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                                <div className="content" role="article">
                                    <div id="intro" className="py-3">
                                        {/* {this.state.id} */}
                                        <h2 className="heading">Project Details</h2>
                                        <div className="row">
                                            <div className="py-2 col-12 col-sm-5">
                                                {/* <table className="table-lg">
                                                    <tbody>
                                                    {Object.keys(basicDetails).map((key, index) => (
                                                    <tr key={index}>
                                                        <th style={{'width': '120px', 'verticalAlign': 'initial'}} className="text-capitalize">{key}</th>
                                                        <td>{basicDetails[key]}</td>
                                                    </tr>
                                                    ))}
                                                    </tbody>
                                                </table> */}
                                                {Object.keys(basicDetails).map((key, index) => (
                                                    <dl key={index}>
                                                        <dt className="text-capitalize">{key}</dt>
                                                        <dd>{basicDetails[key]}</dd>
                                                    </dl>
                                                ))}
                                            </div>
                                            <div className="py-2 col-12 col-sm-7">
                                                {/* <table className="table-lg">
                                                    <tbody>
                                                    <tr>
                                                        <th style={{'width': '120px', 'verticalAlign': 'initial'}} >Description</th>
                                                        <td>{this.state.projectDetails.description}</td>
                                                    </tr>
                                                    </tbody>
                                                </table> */}
                                                <dl>
                                                    <dt>Description</dt>
                                                    <dd>{this.state.projectDetails.description}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}
export default withRouter(ProjectDetails);