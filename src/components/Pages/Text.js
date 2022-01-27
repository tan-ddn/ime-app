import React from 'react';
import Db from '../../control/class.db';
// import { Component } from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import withLangSwitchListener from '../Languages/LangSwitchListener';
import SanitizedHTML from 'react-sanitized-html';

class HomeTxt extends ResponsiveComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: Db.get({action: 'HomeTxt', id: 1}).then(res => res),
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.webText !== prevProps.webText) {
        this.fetchData();
      }
    }
  
    fetchData() {
      let lang = 1;
      if (localStorage.getItem('lang') === 'en') {
        lang = 2;
      }
      Db.get({action: 'HomeTxt', id: lang}).then((res) => {
        this.setState({data: res});
      });
    }
  
    render() {
      let greenLogoAlign = (this.state.screenSize === 'xs') ? 'center' : 'right';
      let homeTxt = {
        title: 'Loading...',
        txt: 'Loading...',
      };
      if (this.state.data.success) {
          let data = this.state.data.results[0];
          //console.log(data);
          homeTxt.title = data.titel;
          homeTxt.txt = data.txt;
      }
      return (
        <div id="homeTxt">
            <h2 className="heading">{homeTxt.title}</h2>
            <div className="row" style={{marginTop: '30px'}} >
            <SanitizedHTML className="col-12 col-sm-9" html={homeTxt.txt} />
            <div className="col-12 col-sm-3">
            <p style={{textAlign: greenLogoAlign}}>
                <img src={process.env.PUBLIC_URL + '/img/green.gif'} alt="Logo Green Metallurgy" />
            </p>
            </div>
            </div>
            {/*   <h2 className="heading">The world of Green Metallurgy</h2>
              <div className="row" style={{marginTop: '30px'}} >
                <div className="col-12 col-sm-9">
                <p>The activity of the Institute IME Process Metallurgically and Metal Recycling (Professor Dr.-Ing Dr. h.c. Bernd Friedrich)&nbsp; consists of applied research and  education/teaching in the fields of extractive metallurgy (pyrometallurgy and  hydrometallurgy), metal refining and electrolysis, as well as recycling of metals and residues. IME-RWTH is also a leading institute in field of process design and optimization in terms of resources efficiencies with special focus on critical waste streams aiming to support the sustainability on Circular Economy. We are involved in production technologies of complex alloys under vacuum up to demo-scale and powder synthesis in nano-scale.</p>
                </div>
                <div className="col-12 col-sm-3">
                <p style={{textAlign: greenLogoAlign}}>
                  <img src={process.env.PUBLIC_URL + '/img/green.gif'} alt="Logo Green Metallurgy" />
                </p>
                </div>
              </div> */}
        </div>
      );
    }
  }
  export default withLangSwitchListener(HomeTxt);