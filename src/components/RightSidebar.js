import React, { Component } from 'react';

export default class RightSidebar extends Component {
  render() {
    return (
        <div id="nav" className="right-nav" role="navigation">
            <div id="nav-box">
                <h2 className="subnav">Sub-Navigation</h2>
                <ul id="sidebar-quick-access" role="navigation" className="sidebar-nav">
                  <li className="menu-item-strong">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className>
                        <a href="#">News</a>
                        </li>
                        <li className>
                        <a href="#">Team</a>
                        </li>
                        <li className>
                        <a href="#">Research Projects</a>
                        </li><li className>
                        <a href="#">Publications</a>
                        </li>
                        <li className>
                        <a href="#">Prizes</a>
                        </li>
                        <li className>
                        <a href="#">Lectures</a>
                        </li>
                        <li className>
                        <a href="#">Contact</a>
                        </li>
                    </ul>
                  </li>
                </ul>
                <ul className="sidebar-nav">
                  <li className="menu-item-strong">
                    <h5>Dates</h5>
                    <ul className="sidebar-subnav">
                        <li className>
                            
                        </li>
                    </ul>
                  </li>
                </ul>
                {/* <ul className="sidebar-nav">
                  <li className="menu-item-strong">
                    <a href="#" title="Network (Navigation)">Network</a>
                    <ul className="sidebar-subnav">
                        <li className>
                            <a href="#" title="Uni-cooperation (Navigation)">Uni-cooperation</a>
                        </li>
                        <li className>
                            <a href="#" title="Researchgate (Navigation)">Researchgate</a>
                        </li>
                        <li className>
                            <a href="#" title="Links (Navigation)">Links</a>
                        </li>
                        <li className>
                            <a href="#" title="AMAP (Navigation)">AMAP</a>
                        </li>
                        <li className>
                            <a href="#" title="aec e.V (Navigation)">aec e.V</a>
                        </li>
                        <li className>
                            <a href="#" title="EIT RawMaterials (Navigation)">EIT RawMaterials</a>
                        </li>
                    </ul>
                  </li>
                </ul>
                <ul className="sidebar-nav">
                  <li className="menu-item-strong">
                    <a href="#" title="Association (Navigation)">Association</a>
                    <ul className="sidebar-subnav">
                        <li className>
                            <a href="#" title="About The Club (Navigation)">About The Club</a>
                        </li>
                        <li className>
                            <a href="#" title="Annual meeting (Navigation)">Annual meeting</a>
                        </li>
                    </ul>
                  </li>
                </ul> */}
            </div>
        </div>
    )
  }
}