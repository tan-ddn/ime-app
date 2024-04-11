import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './inheritance/css/style.css';
import './custom.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lang = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : localStorage.setItem('lang', 'ge');
//Fetch languageuage json files and import to localStorage
const enText = fetch(process.env.PUBLIC_URL + '/lang/en.json')
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
    localStorage.setItem('enText', JSON.stringify(data));
  })
const geText = fetch(process.env.PUBLIC_URL + '/lang/ge.json')
  .then((r) => r.json())
  .then((data) => {
    localStorage.setItem('geText', JSON.stringify(data));
  })

Promise.all([lang, enText, geText]).then((res) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let fullscreenWidth = document.getElementsByClassName('fullscreen-width');

// // for (let elm of fullscreenWidth) {
// //   elm.style.cssText = "position: relative; width: 100vw;";
// // }

// // function initialize () {
// //   for (let elm of fullscreenWidth) {
// //     // console.log(elm);
// //     let rect = elm.getBoundingClientRect();
// //     let marginLeft = rect.left + 0;
// //     elm["marginLeft"] = marginLeft;
// //   }
// // }

// function resize() {
//   for (let elm of fullscreenWidth) {
//     elm.style.cssText = 'position: static;';
//     let viewWidth = document.body.clientWidth;
//     let rect = elm.getBoundingClientRect();
//     let marginLeft = rect.left + 0;

//     elm.style.cssText = "width: " + viewWidth + "px; margin-left: -" + marginLeft + "px;";
//     // console.log(elm);
//   }
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//   // console.log('DOM fully loaded and parsed');
//   // initialize ();
//   resize();
// });

// window.onresize = () => {
//   // console.log('window resized');
//   resize();
// }