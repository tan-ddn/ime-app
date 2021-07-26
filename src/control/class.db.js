import React from 'react';

class Db {
    data = null;
    table = '';
    _columns = '';
    _cond = '';
    _innerJoin = false;
    _tableAs = '';
    _otherTable = '';
    _otherTableAs = '';
    _on = '';
    constructor(table = '', recent = false, months = 0, limit = null) {
        this.table = table;
        this.recent = recent;
        this.months = months;
        this.limit = limit;
    }

    set columns(value) {
        this._columns = value;
    }
    set cond(value) {
        this._cond = value;
    }
    set innerJoin(value) {
        this._innerJoin = value;
    }
    set tableAs(value) {
        this._tableAs = value;
    }
    set otherTable(value) {
        this._otherTable = value;
    }
    set otherTableAs(value) {
        this._otherTableAs = value;
    }
    set on(value) {
        this._on = value;
    }

    async query() {
        let url = new URL("http://" + window.location.hostname + "/ime-app-be/models/select.php");
        let params = {table: this.table, recent: this.recent, months: this.months, cond: this._cond};
        if (this._columns != '') params.columns = this._columns;
        if (this._innerJoin === true) {
            params.innerJoin = this._innerJoin;
            params.tableAs = this._tableAs;
            params.otherTable = this._otherTable;
            params.otherTableAs = this._otherTableAs;
            params.on = this._on;
        }
        url.search = new URLSearchParams(params).toString();
        console.log(url);
        let response = await fetch(url)
        .then((res) => {
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
    
    // queryInnerJoin() {
    //     let innerJoin = true;
    //     return this.query(innerJoin, otherTable, on);
    // }

    // queryTeamTitle() {
    //     let innerJoin = true, otherTable = 'team_titel', on = 'teamverwaltung.einteilung=team_titel.id';
    //     if (this.table == 'teamverwaltung') {
    //         return this.query(innerJoin, otherTable, on);
    //     }
    // }

    static getNews() {
        let newsDb = new this('news', true, 12);
        let news = newsDb.query();
        return news;
    }
    static getTeamGroups() {
        let groupDb = new this('team_einteilung');
        let groups = groupDb.query();
        // console.log(groups);
        return groups;
    }

    static getMemberFromTeamGroup(groupId) {
        let cond = 't.einteilung='+groupId;
        let memDb = new this('teamverwaltung');
        memDb.columns = 't.id, t.titel, t.einteilung, t.name, t.vorname, t.bild, t.tel, t.fax, t.mail, t.position, tt.titel';
        memDb.innerJoin = true;
        memDb.tableAs = 't';
        memDb.otherTable = 'team_titel';
        memDb.otherTableAs = 'tt';
        memDb.on = 't.titel=tt.id';
        memDb.cond = cond;

        let mem = memDb.query();
        // console.log(mem);
        return mem;
    }

    static getProfileDetails(id) {
        let cond = 't.id='+id;
        let profileDb = new this('teamverwaltung');
        profileDb.columns = 't.id, t.titel, t.einteilung, t.name, t.vorname, t.beruf, t.beruf_eng, t.bild, t.gebiet1, t.gebiet2, t.gebiet1_eng, t.gebiet2_eng, t.raum, t.tel, t.fax, t.mail, t.unternehmen1, t.unternehmen2, t.strasse, t.plz, t.ort, t.position, t.dissertation, t.dissertation_eng, t.dissert_url, t.duration, tt.titel';
        profileDb.innerJoin = true;
        profileDb.tableAs = 't';
        profileDb.otherTable = 'team_titel';
        profileDb.otherTableAs = 'tt';
        profileDb.on = 't.titel=tt.id';
        profileDb.cond = cond;

        let profile = profileDb.query();
        // console.log(profile);
        return profile;
    }

    static getGroupTitleFromProfile(id) {
        let cond = 't.id='+id;
        let groupDb = new this('teamverwaltung');
        groupDb.columns = 'te.einteilung, te.einteilung_eng';
        groupDb.innerJoin = true;
        groupDb.tableAs = 't';
        groupDb.otherTable = 'team_einteilung';
        groupDb.otherTableAs = 'te';
        groupDb.on = 't.einteilung=te.id';
        groupDb.cond = cond;

        let group = groupDb.query();
        return group;
    }

    static getResearchTopicFromProfile(id) {
        let cond = 'frdpc.contactPerson='+id;
        let topicDb = new this('fr_detail_project_contacts');
        topicDb.columns = 'frdpc.contactPerson, frdp.id, frdp.title, frdp.title_eng';
        topicDb.innerJoin = true;
        topicDb.tableAs = 'frdpc';
        topicDb.otherTable = 'fr_detail_project';
        topicDb.otherTableAs = 'frdp';
        topicDb.on = 'frdpc.project_id = frdp.id';
        topicDb.cond = cond;

        let topic = topicDb.query();
        return topic;
    }

    static getPubSocialLinks(id) {
        let cond = 'id='+id;
        let pubSocialDb = new this('teamverwaltung');
        pubSocialDb.columns = 'researchgate, googlescholar, scopus, orcid';
        pubSocialDb.cond = cond;

        let pubSocial = pubSocialDb.query();
        console.log(pubSocial);
        return pubSocial;
    }
}

export default Db;