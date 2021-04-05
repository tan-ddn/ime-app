// import React, { Component } from 'react';
// import '../Scss/box.scss';
import Box from '../Box';

const instaUrl = 'https://www.instagram.com/ime_rwth/?__a=1';

export default class InstaBox extends Box {
    constructor(props) {
        super(props);
      
        this.state = {
            content: this.props.content,
            data: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch(instaUrl)
          .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ data: data }))
          .catch(error => this.setState({ error }));

        // console.log(this.state.data);
    }

    // render() {
    //     const {hits} = this.state;
    // }
}