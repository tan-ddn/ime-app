import React, { Component } from 'react';
import Db from './class.db';
import imeAPICalls from '../imeAPICalls';

function withGetDb(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                // data: selectData(props),
                data: {},
            };
        }

        componentDidMount() {
            this.getDb();
        }

        getDb() {
            selectData(this.props).then((res) => {
                // console.log(res);
                this.setState({data: res});
                window.useScrollTo();
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default withGetDb;