import React, { Component } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import GlobalLangStateProvider, { globalLangStateContext, useLangGlobalState } from '../../UserContext';
// import en from '../../../public/lang/en.json';
// import ge from '../../../public/lang/ge.json';

// const webText = {en, ge};
// if (localStorage.getItem('lang') === null) {
//     localStorage.setItem('webText', JSON.stringify(webText.en));
// } else {
//     let initLang = localStorage.getItem('lang');
//     localStorage.setItem('webText', JSON.stringify(webText.[initLang]));
// }

const LangSwitcher = () => {
    const [state, dispatch] = useLangGlobalState();
    let lang = (localStorage.getItem('lang') === null) ? 'en' : localStorage.getItem('lang');
    const handleClick = (e, value) => {
        e.preventDefault();

        // return dispatch({lang: value, webText: JSON.stringify(webText[value])})
        return dispatch({lang: value})
    }
    return (
        <div>
            {lang === 'ge' &&
            // <a href="#" onClick={() => dispatch({ lang: 'en', webText: JSON.stringify(en) })}>
            <a href="#" onClick={(e) => handleClick(e, 'en') }>
                <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_usa.png'} />      
            </a>
            }
            {lang === 'en' &&
            // <a href="#" onClick={() => dispatch({ lang: 'ge', webText: JSON.stringify(ge) })}>
            <a href="#" onClick={(e) => handleClick(e, 'ge') }>
                <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_ger.png'} />
            </a>
            }
        </div>
    );
}
export default LangSwitcher;

// export default class LangSwitcher extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             lang: (localStorage.getItem('lang') === null) ? 'en' : localStorage.getItem('lang'),
//         };
//     }

//     handleSwitch = (e, la) => {
//         e.preventDefault();
//         window.localStorage.setItem('lang', la);
//         window.dispatchEvent( new Event('storage') );
//         this.setState({lang: la});
//         // localStorage.setItem('webText', JSON.stringify(webText[la]));
//     }

//     render() {
//     return (
//         <div>
//             {this.state.lang === 'ge' &&
//             <a href="#" onClick={(e) => this.handleSwitch(e, 'en')}>
//                 <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_usa.png'} />      
//             </a>
//             }
//             {this.state.lang === 'en' &&
//             <a href="#" onClick={(e) => this.handleSwitch(e, 'ge')}>
//                 <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_ger.png'} />
//             </a>
//             }
//         </div>
//     )
//     }
// }