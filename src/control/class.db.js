import React from 'react';

class Db {
    // static search = null;
    data = null;
    table = '';
    action = '';
    search = '';
    constructor(action = '') {
        this.action = action;
        this.setSearch();
    }
    
    // Merge array of objects into 1 object
    mergerObj = (array) => {
        let item = array[0];
        for (let i=1; i < array.length; i++) {
            item = Object.assign(item, array[i]);
        }
        return item;
    }
    
    setSearch(params = {}) {
        let search = params;
        search.action = this.action;
        this.search = new URLSearchParams(params).toString();
    }

    async queryByGet(paramObj) {
        let url = new URL("http://" + window.location.hostname + "/ime-app-be/models/get.php");
        // url.search = this.search;
        url.search = new URLSearchParams(paramObj).toString();
        console.log(url);
        let response = await fetch(url)
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            if (data.success) {
                data.results.reverse();
            }
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.error(err);
        });
        // console.log(response);
        return response;
    }

    // static get(item, id=null, pageNo=null, search='', keywords='') {
    //     let func = 'get'+item;
    //     let obj = new this(func);
    //     obj.setSearch({
    //         id: id,
    //         pageNo: pageNo,
    //         search: search,
    //         keywords: keywords,
    //     });
    //     return obj.queryByGet();
    // }

    // static getDb(item, pageNo=null, perPage=0, search='', keywords='') {
    //     let func = 'getDb'+item;
    //     let obj = new this(func);
    //     obj.setSearch({
    //         pageNo: pageNo,
    //         perPage: perPage,
    //         search: search,
    //         keywords: keywords,
    //     });
    //     return obj.queryByGet();
    // }

    static get() { //arguments: function, var1, var2, ...
        let obj = new this();
        let paramObj = obj.mergerObj(arguments);
        paramObj.action = 'get'+paramObj.action;
        return obj.queryByGet(paramObj);
    }

    static getDb() { //arguments: function, var1, var2, ...
        let obj = new this();
        let paramObj = obj.mergerObj(arguments);
        paramObj.action = 'getDb'+paramObj.action;
        return obj.queryByGet(paramObj);
    }


    async queryByPost(dataObj) {
        let url = new URL("http://" + window.location.hostname + "/ime-app-be/models/post.php");
        // console.log(url);
        let data = JSON.stringify(dataObj);
        console.log(data);
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.error(err);
        });;
        return response;
    }

    static set() { //arguments: function, var1, var2, ...
        // let func = 'set'+arguments[0];
        // let obj = new this(func);
        let obj = new this();
        let dataObj = obj.mergerObj(arguments);
        dataObj.action = 'set'+dataObj.action;
        return obj.queryByPost(dataObj);
    }

    async uploadFile(formUpload) {
        let url = new URL("http://" + window.location.hostname + "/ime-app-be/models/post.php");
        // console.log(url);
        let response = await fetch(url, {
            method: 'POST',
            body: formUpload,
        })
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.error(err);
        });;
        return response;
    }

    static upload(formUpload) {
        let obj = new this();
        return obj.uploadFile(formUpload);
    }

}

export default Db;