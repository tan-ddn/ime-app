// import React, { Component } from 'react';
// import '../Scss/box.scss';
import $ from 'jquery';
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
        $.ajax({
            url: instaUrl,
            type: "GET",
            contentType: "application/jsonp",
            statusCode: {
              200: function(data) {
                console.log(data);
              }
            },
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true
        }).done(function(data) {
            console.log(data);
        });

        // fetch(instaUrl, {
        //     method: 'OPTIONS',
        //     headers: {
        //         'Access-Control-Request-Method': 'GET',
        //         'Access-Control-Request-Headers': 'Content-Type',
        //     }
        //   })
        //   .then(response => {
        //     console.log(response);
        //     if (response.ok) {
        //         return response.json();
        //     } else {
        //         throw new Error('Something went wrong ...');
        //     }
        //   });

        // fetch(instaUrl, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'text/html'
        //     }
        // })
        //   .then(response => {
        //     console.log(response);
        //     if (response.ok) {
        //         return response.json();
        //     } else {
        //         throw new Error('Something went wrong ...');
        //     }
        //   })
        //   .then(data => this.setState({ data: data }))
        //   .catch(error => this.setState({ error }));

        // console.log(this.state.data);
    }

    // render() {
    //     const {hits} = this.state;
    // }
}