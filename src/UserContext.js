import React from 'react';
// import en from '../public/lang/en.json';
// import ge from '../public/lang/ge.json';

//Language global state
export const defaultLangGlobalState = {
    lang: (localStorage.getItem('lang') === null) ? 'en' : localStorage.getItem('lang'),
    webText: null,
    language: (localStorage.getItem('lang') === 'en') ? 2 : 1,
    updateLanguage: () => {},
};
export const globalLangStateContext = React.createContext(defaultLangGlobalState);
export const dispatchLangStateContext = React.createContext(undefined);
  
const GlobalLangStateProvider = ({ children }) => {
    if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'en') ;
    // if (localStorage.getItem('webText') === null) localStorage.setItem('webText', JSON.stringify(en));
    
    const reducer = (state, newValue) => {
        // console.log(state, newValue);
        localStorage.setItem('lang', newValue.lang);
        // localStorage.setItem('webText', newValue.webText);
        window.dispatchEvent( new Event('storage') );
        return {
            ...state, ...newValue
        }
    }
    const [state, dispatch] = React.useReducer(
    //   (state, newValue) => ({ ...state, ...newValue }),
        reducer,
        defaultLangGlobalState
    );
    return (
      <globalLangStateContext.Provider value={state}>
        <dispatchLangStateContext.Provider value={dispatch}>
          {children}
        </dispatchLangStateContext.Provider>
      </globalLangStateContext.Provider>
    );
};
export const useLangGlobalState = () => [
    React.useContext(globalLangStateContext),
    React.useContext(dispatchLangStateContext)
];
  

export default GlobalLangStateProvider