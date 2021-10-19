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
    
    setSearch(params = {}) {
        let search = params;
        search.action = this.action;
        this.search = new URLSearchParams(params).toString();
    }

    async querySelect() {
        let url = new URL("http://" + window.location.hostname + "/ime-app-be/models/select.php");
        url.search = this.search;
        // console.log(url);
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

    static get(item, id=null, pageNo=null, search='', keywords='') {
        let func = 'get'+item;
        let obj = new this(func);
        obj.setSearch({
            id: id,
            pageNo: pageNo,
            search: search,
            keywords: keywords,
        });
        return obj.querySelect();
    }

    // static getWithId(item, id) {
    //     let func = 'get'+item;
    //     let obj = new this(func);
    //     obj.setSearch({id: id});
    //     return obj.querySelect();
    // }

    // static getPubFromProfile(teamId, pageNo) {
    //     let obj = new this('getPubFromProfile');
    //     obj.setSearch({
    //         teamId: teamId,
    //         pageNo: pageNo,
    //     });
    //     return obj.querySelect();
    // }

    // static getAllPub(pageNo) {
    //     let obj = new this('getAllPub');
    //     obj.setSearch({pageNo: pageNo});
    //     return obj.querySelect();
    // }

    // static getNews() {
    //     return new this('getNews').querySelect();
    // }
    // static getRecentNews() {
    //     return new this('getRecentNews').querySelect();
    // }

    // static getTeamGroups() {
    //     return new this('getTeamGroups').querySelect();
    // }

    // static getMemberFromTeamGroup(groupId) {
    //     let members = new this('getMemberFromTeamGroup');
    //     members.setSearch({groupId: groupId});
    //     return members.querySelect();
    // }

    // static getProfileDetails(id) {
    //     let details = new this('getProfileDetails');
    //     details.setSearch({profileId: id});
    //     return details.querySelect();
    // }

    // static getGroupTitleFromProfile(id) {
    //     let title = new this('getGroupTitleFromProfile');
    //     title.setSearch({profileId: id});
    //     return title.querySelect();
    // }

    // static getResearchTopicFromProfile(id) {
    //     let topic = new this('getResearchTopicFromProfile');
    //     topic.setSearch({profileId: id});
    //     return topic.querySelect();
    // }

    // static getPubSocialLinks(id) {
    //     let pubSocial = new this('getPubSocialLinks');
    //     pubSocial.setSearch({profileId: id});
    //     return pubSocial.querySelect();
    // }
}

export default Db;