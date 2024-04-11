import React, { Component } from 'react';
import MainContent from '../MainContent';
import HeaderBanner from '../HeaderBanner';
import MainContentDev from '../MainContentDev';
import HeaderBannerDev from '../HeaderBannerDev';

export default class HomeDev extends Component {
    componentDidMount() {
        document.body.classList.add('home');
    }

    componentWillUnmount() {
        document.body.classList.remove('home');
    }

    render() {
        return(
            <div className="home">
                <HeaderBannerDev id="home-banner" greenLogo={true} transformX={'10px'} />
                <div className="d-flex justify-content-between container sidebar-right0">
                    {/* <LeftSidebar/> */}
                    <div id="" role="article" className="main-content">
                        {/* <FacultyStage/> */}
                        <div id="wrapper-2-outer0">
                        <div id="wrapper">
                            {/*googleon: all*/}
                            <div className="">
                            <MainContentDev/>
                            </div>
                            {/* <p className="to-top-link">
                            <a href="#">top</a>
                            </p> */}
                        </div>
                        </div>
                    </div>
                    {/* <RightSidebar/> */}
                </div>
            </div>
        );
    }
}