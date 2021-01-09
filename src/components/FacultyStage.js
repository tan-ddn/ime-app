import React, { Component } from 'react';

export default class FacultyStage extends Component {
  render() {
    return (
      <div id="faculty-stage">
        <div id="stage">
            <div className="teaser-wrapper">
                <div className="teaser-placeholder">
                    <img src={process.env.PUBLIC_URL + '/img/1_2_id_7038.jpg'} alt="" />
                </div>

            </div>
        </div>
        {/* <div id="quick-access" role="navigation">
            <h2 className>Quick Links</h2>
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
        </div> */}
      </div>
    )
  }
}