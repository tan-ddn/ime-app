import React, { Component } from 'react';
import Db from '../../control/class.db';

export default class PhpTestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    // console.log(window.location.hostname);
    // let url = new URL("http://"+window.location.hostname+"/ime-app-be/models/news.php");
    // let params = {table:'news'};
    // url.search = new URLSearchParams(params).toString();
    // fetch(url)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     data.results.reverse();
    //     console.log(data);
    //     if (data.success) this.setState({news: data.results});
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let db = new Db('news');
    db.query().then((data) => {
      // console.log(data);
      if (data.success) this.setState({data: data.results});
    })
  }

  render() {
    return (
      <div>
        <div className="container py-5 my-5">
            <div className="py-5 my-5"></div>
          <h1>MySQL Output:</h1>
          <div className="wrapper">
            <pre className="">
              {JSON.stringify(this.state.data, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}