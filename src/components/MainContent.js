import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';
import NewsSlider from './News/NewsSlider';
import NewsBox from './News/NewsBox';
import EventsBox from './Events/EventsBox';
// import TeamCarousel from './Team/TeamCarousel';
import LatestPublications from './Publications/LatestPublications';
import ResearchAreas from './Research/ResearchAreas';
import LatestProjects from './Research/LatestProjects';
import InstaBox from './Instagram/InstaBox';
import News1 from './News/News1';
import Newsletter from './News/Newsletter';
import FullscreenWidth from './FullscreenWidth';

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
const assets = [
  {
    title: 'IME-Society',
    description: 'RemovAl-Removing the Waste Streams from the Primary Aluminum Production and Other Metal Sectrosin Europe ...',
    button: 'see more &#187;',
    buttonUrl: '',
    image: process.env.PUBLIC_URL + '/img/social/dsc06366_id_8980.jpg'
  },
  {
    title: 'Excursions',
    description: 'The IME organizes several excursions yearly. Beside of one-day excursions, ...',
    button: 'see more &#187;',
    buttonUrl: '',
    image: process.env.PUBLIC_URL + '/img/social/gruppenfoto_bri_id_6191.jpg'
  },
  {
    title: 'Network & Partners',
    description: 'We have an extensive network of partners. These include i...',
    button: 'see more &#187;',
    buttonUrl: '',
    image: [process.env.PUBLIC_URL + '/img/partners/ntua_id_8109.jpg',
      process.env.PUBLIC_URL + '/img/partners/donetsk_id_5582.jpg', 
      process.env.PUBLIC_URL + '/img/partners/university_of_b_id_8947.jpg',
      process.env.PUBLIC_URL + '/img/partners/maeribor_id_1324.png',
      process.env.PUBLIC_URL + '/img/partners/istaenbul_id_5059.jpg',
      process.env.PUBLIC_URL + '/img/partners/ntnu_w_id_3627.png']
  },
  {
    title: 'Now in Instagram',
    description: '',
    button: 'see more &#187;',
    buttonUrl: '',
    image: process.env.PUBLIC_URL + ''
  }
];

export default class MainContent extends ResponsiveComponent {
  render() {
    let greenLogoAlign = 'right';
    greenLogoAlign = (this.state.screenSize === 'xs') && 'center';
    return (
        <div className="content" role="article">
            <div id="home-news" className="py-3">
              <h2 className="heading"><a href="#">Latest News</a></h2>
              <FullscreenWidth>
              {/* <div className="fullscreen-width px-3"> */}
                <div className="main-row row justify-content-center" >
                  <div className="col-12 col-lg-6 col-xl-">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <NewsSlider height="500px"/>
                      </div>
                      <div className="col-12 col-sm-6">
                        {/* <NewsBox height="500px" content={newsBoxes[0]}/> */}
                        <News1 height="500px"/>
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
              <div className="pt-4 text-center"><a className="btn btn-primary">View All News</a></div>
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
              <h2 className="heading"><a href="">The world of Green Metallurgy</a></h2>
              <div className="row" style={{marginTop: '30px'}} >
                <div className="col-12 col-sm-9">
                <p>The activity of the Institute IME Process Metallurgically and Metal Recycling (Professor Dr.-Ing Dr. h.c. Bernd Friedrich)&nbsp; consists of applied research and  education/teaching in the fields of extractive metallurgy (pyrometallurgy and  hydrometallurgy), metal refining and electrolysis, as well as recycling of metals and residues. IME-RWTH is also a leading institute in field of process design and optimization in terms of resources efficiencies with special focus on critical waste streams aiming to support the sustainability on Circular Economy. We are involved in production technologies of complex alloys under vacuum up to demo-scale and powder synthesis in nano-scale.</p>
                </div>
                <div className="col-12 col-sm-3">
                <p style={{textAlign: greenLogoAlign}}>
                  <img src={process.env.PUBLIC_URL + '/img/green.gif'} alt="" />
                </p>
                </div>
              </div>
            </div>
            <div id="" className="py-2">
              <div className="row">
                <div className="col-12 col-lg-6 py-3">
                  <h2 className="heading"><a href="">Our Team</a></h2>
                  <img style={{marginTop: '15px'}} src={process.env.PUBLIC_URL + '/img/teaem_2020_web_id_8598.jpg'} alt="" />
                  {/* <TeamCarousel/> */}
                </div>
                <div className="col-12 col-lg-6 py-3">
                  <h2 className="heading"><a href="">Latest Publications <span className="sub">[ see all ]</span></a></h2>
                  <LatestPublications/>
                </div>
              </div>
            </div>
            <div id="research-areas" className="py-3">
              <h2 className="heading"><a href="">Research Areas <span className="sub">[ see all ]</span></a></h2>
              <ResearchAreas height=""/>
            </div>
            <div id="latest-projects" className="py-3">
              <h2 className="heading"><a href="">Latest Public Funded Projects</a></h2>
              <LatestProjects/>
            </div>
            <div id="social-assets" className="py-3 pb-5">
              <h2 className="heading"><a href="">Social Activities</a></h2>
              <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-lg-3">
                  <NewsBox classNames="style2" height="440px" content={assets[0]} date="0"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <NewsBox classNames="style2" height="440px" content={assets[1]} date="0"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <NewsBox classNames="style2" height="440px" content={assets[2]} date="0" image="contain"/>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <InstaBox classNames="style2" height="440px" content={assets[3]} date="0"/>
                </div>
              </div>
            </div>
        </div>
    )
  }
}