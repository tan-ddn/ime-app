import React, { Component } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import GlobalLangStateProvider, { globalLangStateContext, useLangGlobalState } from '../../UserContext';
// import en from '../../../public/lang/en.json';
// import ge from '../../../public/lang/ge.json';
import PropTypes, { instanceOf } from 'prop-types'

// const webText = {en, ge};
// if (localStorage.getItem('lang') === null) {
//     localStorage.setItem('webText', JSON.stringify(webText.en));
// } else {
//     let initLang = localStorage.getItem('lang');
//     localStorage.setItem('webText', JSON.stringify(webText.[initLang]));
// }

// const LangSwitcher = () => {
//     const [state, dispatch] = useLangGlobalState();
//     let lang = (localStorage.getItem('lang') === null) ? 'en' : localStorage.getItem('lang');
//     const handleClick = (e, value) => {
//         e.preventDefault();

//         // return dispatch({lang: value, webText: JSON.stringify(webText[value])})
//         return dispatch({lang: value})
//     }
//     return (
//         <div>
//             {lang === 'ge' &&
//             // <a href="#" onClick={() => dispatch({ lang: 'en', webText: JSON.stringify(en) })}>
//             <a href="#" onClick={(e) => handleClick(e, 'en') }>
//                 <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_usa.png'} />      
//             </a>
//             }
//             {lang === 'en' &&
//             // <a href="#" onClick={() => dispatch({ lang: 'ge', webText: JSON.stringify(ge) })}>
//             <a href="#" onClick={(e) => handleClick(e, 'ge') }>
//                 <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_ger.png'} />
//             </a>
//             }
//         </div>
//     );
// }
// export default LangSwitcher;

export default class LangSwitcher extends Component {

    static get propTypes() {
        return {
            context: PropTypes.any,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleClick(e, value) {
        e.preventDefault();
        return this.props.context.updateLanguage(value);
    }

    render() {
        // console.log(this.props.context);
        return (
            <div>
                {this.props.context.lang === 'ge' &&
                    <a href="#" onClick={(e) => this.handleClick(e, 'en')}>
                        <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_bri.png'} />
                    </a>
                }
                {this.props.context.lang === 'en' &&
                    <a href="#" onClick={(e) => this.handleClick(e, 'ge')}>
                        <img alt="Language icon" src={process.env.PUBLIC_URL + '/img/icons/flag_ger.png'} />
                    </a>
                }
            </div>
        )
    }
}