import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';
import { Link, useHistory, withRouter } from "react-router-dom";
import NewsSlider from './News/NewsSlider';
import Box from './Boxes/Box';
import EventsBox from './Events/EventsBox';
// import TeamCarousel from './Team/TeamCarousel';
import LatestPublications from './Publications/LatestPublications';
import ResearchAreas from './Research/ResearchAreas';
import LatestProjects from './Research/LatestProjects';
import InstaBox from './Instagram/InstaBox';
import News1 from './News/News1';
import Newsletter from './News/Newsletter';
import HomeTxt from './Pages/Text';
import FullscreenWidth from './FullscreenWidth';
import Db from '../control/class.db';
import withLangSwitchListener from './Languages/LangSwitchListener';
import imeAPICalls from '../imeAPICalls';
import { globalLangStateContext } from '../UserContext';

// const newsBoxes = [
//   {
//       title: 'News I',
//       description: 'Starting this year, the Aurubis-Award for excellent Master\'s theses with a grade of at least 1.3 will...',
//       button: 'Read More &#187;',
//       buttonUrl: '',
//       image: process.env.PUBLIC_URL + '/img/news/LiMCA_photo.jpg',
//       date: '05.03.2020'
//   },
//   {
//       title: 'News II',
//       description: 'A camera team from the german TV channel “Deutsche Welle” got an insight into the research...',
//       button: 'Read More &#187;',
//       buttonUrl: '',
//       image: process.env.PUBLIC_URL + '/img/news/battery_recycling.png',
//       date: '29.10.2019'
//   },
// ];

// const slides = [
//   {
//       id: 1,
//       titel_eng: 'IME Aktuell - Current Issue',
//       text_eng: 'The current issue of the IME Aktuell, published twice every year, is online now. Some promotional topics are presented, ...',
//       button: 'Read More',
//       link: '',
//       pic: 'ime_aektuell_jp_id_7224.jpg'
//   },
//   {
//       id: 2,
//       titel_eng: 'Joint research with a safety distance of 1500 km',
//       text_eng: 'In fulfillment of a DAAD project with The University of Belgrade, which includes mutual research and scientist exchange, ...',
//       button: 'Read More',
//       link: '',
//       pic: 'dominic_news_id_3840.jpg'
//   },
//   {
//       id: 3,
//       titel_eng: 'Improved exhaust gas cleaning by cyclone',
//       text_eng: 'Last week, the institute\'s own exhaust gas purification plant was upgraded. In this context, ...',
//       button: 'Read More',
//       link: '',
//       pic: 'zyklon_id_2211.jpg'
//   },
// ]

class MainContentDev extends ResponsiveComponent {
  APICalls = new imeAPICalls();

  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };
    // let db = new Db('news');
    // db.query().then((data) => {
    //   // console.log(data);
    //   if (data.success) this.setState({news: data.results});
    // })
  }

  componentDidMount() {
    // let db = new Db('news');
    // db.query().then((data) => {
    // Db.get({action: 'News'}).then((data) => {
    this.APICalls.get({ endpoint: 'News/Newsticker'}).then((data) => {
      // console.log(data);
      if (data.success) {
        this.setState({news: data.results});
      } else {
        console.log(data);
      }
    });
  }

  render() {
    let recentNews = null;
    if (this.state.news) recentNews = this.state.news.slice(0,5);
    let texts = (this.context.webText) ? this.context.webText : null;
    let assets = null;
    if (texts != null) {
       assets = [
        {
          title_eng: texts.home.ime_society,
          description_eng: 'Förderung der Qualität von Ausbildung und ...',
          title: texts.home.ime_society,
          description: 'Förderung der Qualität von Ausbildung und ...',
          button: texts.button.see_more + ' &#187;',
          buttonUrl: '/association',
          image: process.env.PUBLIC_URL + '/img/social/dsc06366_id_8980.jpg'
        },
        {
          title_eng: texts.home.excursions,
          description_eng: 'The IME organizes several excursions yearly...',
          title: texts.home.excursions,
          description: 'Das IME organisiert jährlich mehrere Exkursionen...',
          button: texts.button.see_more + ' &#187;',
          buttonUrl: '/excursions',
          image: process.env.PUBLIC_URL + '/img/social/gruppenfoto_bri_id_6191.jpg'
        },
        {
          title_eng: texts.home.network_partners,
          description_eng: 'We have an extensive network of partners...',
          title: texts.home.network_partners,
          description: 'Wir pflegen ein umfangreiches Netzwerk an Partnern...',
          button: texts.button.see_more + ' &#187;',
          buttonUrl: '/network',
          image: [process.env.PUBLIC_URL + '/img/partners/ntua_id_8109.jpg',
            process.env.PUBLIC_URL + '/img/partners/donetsk_id_5582.jpg', 
            process.env.PUBLIC_URL + '/img/partners/university_of_b_id_8947.jpg',
            process.env.PUBLIC_URL + '/img/partners/maeribor_id_1324.png',
            process.env.PUBLIC_URL + '/img/partners/istaenbul_id_5059.jpg',
            process.env.PUBLIC_URL + '/img/partners/ntnu_w_id_3627.png']
        },
        {
          title_eng: texts.home.now_in_instagram,
          description_eng: '',
          title: texts.home.now_in_instagram,
          description: '',
          button: texts.button.see_more + ' &#187;',
          buttonUrl: '',
          image: process.env.PUBLIC_URL + ''
        }
      ];
    }    
    return (texts == null && assets == null) ? '' : (
        <div className="content" role="article">
            <div id="home-news" className="py-3">
              <h2 className="heading"><Link to="/news">{texts.news.latest_news}</Link></h2>
              <FullscreenWidth>
              {/* <div className="fullscreen-width px-3"> */}
                <div className="main-row row justify-content-center" >
                  <div className="col-12 col-lg-6 col-xl-">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <NewsSlider slides={recentNews} imgFolder={process.env.PUBLIC_URL + '/img/news/'} urlStart={"/news#"} height="500px"/>
                      </div>
                      <div className="col-12 col-sm-6">
                        {/* <NewsBox height="500px" content={newsBoxes[0]}/> */}
                        <News1 news={recentNews} height="500px"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-">
                    <div className="row">
                      {/* <div className="col-4">
                        {/* <NewsBox height="500px" content={newsBoxes[0]}/>
                        { <News1 height="500px"/>
                      </div> */}
                      <div className="col-12 col-sm-6">
                        {/* <NewsBox height="500px" content={newsBoxes[1]}/> */}
                        <Newsletter height="500px"/>
                      </div>
                      <div className="col-12 col-sm-6">
                        <EventsBox height="500px" />
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              </FullscreenWidth>
              {/* <article className="news-article">
                <div className="row no-gutters">
                  <div className="col-3">
                    <div className="article-img">
                    <img src={process.env.PUBLIC_URL + '/img/news/ime_aektuell_jp_id_7224.jpg'} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="article-content">
                      <h5 className="title">IME Aktuell - Current Issue</h5>
                      <div className="article-text">
                        <p>The current issue of the IME Aktuell, published twice every year, is online now. Some promotional topics are presented, ...</p>
                      </div>
                      <a className="btn btn-primary" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="news-article">
                <div className="row no-gutters">
                  <div className="col-3">
                    <div className="article-img">
                    <img src={process.env.PUBLIC_URL + '/img/news/dominic_news_id_3840.jpg'} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="article-content">
                      <h5 className="title">Joint research with a safety distance of 1500 km</h5>
                      <div className="article-text">
                        <p>In fulfillment of a DAAD project with The University of Belgrade, which includes mutual research and scientist exchange, ...</p>
                      </div>
                      <a className="btn btn-primary" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="news-article">
                <div className="row no-gutters">
                  <div className="col-3">
                    <div className="article-img">
                    <img src={process.env.PUBLIC_URL + '/img/news/zyklon_id_2211.jpg'} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="article-content">
                      <h5 className="title">Improved exhaust gas cleaning by cyclone</h5>
                      <div className="article-text">
                        <p>Last week, the institute's own exhaust gas purification plant was upgraded. In this context, ...</p>
                      </div>
                      <a className="btn btn-primary" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </article> */}
            </div>
            {/* <div class="horizontal-sep"></div> */}
            <div id="intro" className="py-3">
              <HomeTxt/>
            </div>
            <div id="" className="py-2">
              <div className="row">
                <div className="col-12 col-lg-6 py-3">
                  <h2 className="heading"><Link to="/team">{texts.home.our_team}</Link></h2>
                  <img style={{marginTop: '0px'}} src={process.env.PUBLIC_URL + '/img/IME-4_s.jpg'} alt="" /> 
                  {/* <TeamCarousel/> */}
                </div>
                <div className="col-12 col-lg-6 py-3">
                  <h2 className="heading"><Link to="/publications">{texts.home.latest_publications} <span className="sub">[ {texts.button.see_all} ]</span></Link></h2>
                  <LatestPublications/>
                </div>
              </div>
            </div>
            <div id="research-areas" className="py-3">
              <h2 className="heading"><Link to="/research">{texts.home.research_areas} <span className="sub">[ {texts.button.see_all} ]</span></Link></h2>
              <ResearchAreas height=""/>
            </div>
            <div id="latest-projects" className="py-3">
              <h2 className="heading"><Link to="/research">{texts.home.latest_public_funded_projects}</Link></h2>
              <LatestProjects/>
            </div>
            <div id="social-assets" className="py-3 pb-5">
              <h2 className="heading">{texts.home.social_activities_and_networking}</h2>
              <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-lg-3">
                  <Box classNames="style2" height="440px" content={assets[0]} date="0" linkTitle="1"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <Box classNames="style2" height="440px" content={assets[1]} date="0" linkTitle="1"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <Box classNames="style2" height="440px" content={assets[2]} date="0" image="contain" linkTitle="1"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <InstaBox classNames="style2" height="440px" content={assets[3]} date="0" linkTitle="1"/>
                </div>
              </div>
            </div>
        </div>
    )
  }
}
MainContentDev.contextType = globalLangStateContext;

export default withLangSwitchListener(MainContentDev);