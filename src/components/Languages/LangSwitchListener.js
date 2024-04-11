import React from 'react';
function withLangSwitchListener(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                webText: (localStorage.getItem('lang') === 'ge') ? JSON.parse(localStorage.getItem('geText')) : JSON.parse(localStorage.getItem('enText'))
            };
        }

        checkLang = () => {
            let newLang = localStorage.getItem('lang');
            this.setState({webText: JSON.parse(localStorage.getItem(newLang+'Text'))}, () => {
                // console.log(this.state.webText);
            });
        }

        componentDidMount() {
            window.addEventListener("storage", () => {
                // let webText = JSON.parse(localStorage.getItem('webText'));
                // console.log(webText);
                // this.setState({webText: webText});
                this.checkLang();
            });
        }

        render() {
            return <WrappedComponent webText={this.state.webText} {...this.props} />;
        }
    }
}
export default withLangSwitchListener;