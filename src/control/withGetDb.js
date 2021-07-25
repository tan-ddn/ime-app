import React, { Component } from 'react';
import Db from './class.db';

function withGetDb(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(Db, props),
            };
        }

        componentDidMount() {
            this.getDb();
        }

        getDb() {
            selectData(Db, this.props).then((res) => {
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