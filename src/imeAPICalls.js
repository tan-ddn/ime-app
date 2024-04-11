class imeAPICalls {
    // Utility functions
    // Merge array of objects into 1 object
    mergerObj(array) {
        let item = array[0];
        for (let i=1; i < array.length; i++) {
            item = Object.assign(item, array[i]);
        }

        //Include access_token
        let userLS = localStorage.getItem('user');
        if (userLS != undefined && userLS != null && userLS != '') {
            let user =  JSON.parse(userLS);
            if (user && user.hasOwnProperty('access_token')) item.access_token = user.access_token
        }
        
        return item;
    }
    
    // Set URL search params
    setSearch(params = {}) {
        let search = params;
        search.action = this.action;
        this.search = new URLSearchParams(params).toString();
    }

    // Call endpoint
    async callEndpoint(endpoint = '', config = {}, paramObj = {}) {
        let url = new URL("https://" + window.location.hostname + "/ime-rest-api/index.php/"+endpoint);
        //let fetchConfig = config;
        if (paramObj) {
            url.search = new URLSearchParams(paramObj).toString();
        }
        console.log(url, config, paramObj);
        let response = await fetch(url, config)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.error(err);
        });
        return response;
    }

    // Prepare data for api calls
    prepare(args) {
        let dataObj = this.mergerObj(args);
        return dataObj;
    }

    // Handle api calls
    get() { //arguments: function, var1, var2, ...
        let paramObj = this.prepare(arguments);
        // console.log(paramObj);
        let config = {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
        }
        return this.callEndpoint(paramObj.endpoint, {}, paramObj);
    }
    post() { //arguments: function, var1, var2, ...
        let dataObj = this.prepare(arguments);
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        }
        return this.callEndpoint(dataObj.endpoint, config, {});
    }
    put() { //arguments: function, var1, var2, ...
        let dataObj = this.prepare(arguments);
        let config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        }
        return this.callEndpoint(dataObj.endpoint, config, {});
    }
    delete() { //arguments: function, var1, var2, ...
        let paramObj = this.prepare(arguments);
        let config = {
            method: 'DELETE',
        }
        return this.callEndpoint(paramObj.endpoint, config, paramObj);
    }

    upload(formUpload) {
        // console.log(formUpload);
        if (formUpload === null) return {success: 1, msg: 'Empty Upload File'};
        let config = {
            method: 'POST',
            body: formUpload
        }
        return this.callEndpoint('upload', config, {});
        // return this.uploadFile(formUpload);
    }

    // Handle upload request | Not working
    async uploadFile(formUpload) {
        let url = new URL("https://" + window.location.hostname + "/ime-rest-api/controller/upload.php");
        // console.log(url);
        let response = await fetch(url, {
            method: 'PUT',
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
}

export default imeAPICalls