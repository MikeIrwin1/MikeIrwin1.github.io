'use strict';

const requests = {    
    getData: (url) => {
        const request = new XMLHttpRequest();

        return new Promise( (resolve, reject) => {
            request.onreadystatechange = () => {
                if (request.readyState !== 4) {
                    return;
                }

                if (request.status >= 200 && request.status < 300) {
                    resolve(request);
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open("GET", url, true);
            request.send();
        });
    },

    put: (data, url) => {
        const request = new XMLHttpRequest();
        const body = JSON.stringify(data);

        request.open("PUT", url);

        request.setRequestHeader("Content-Type", "application/json");    
        request.onreadystatechange = () => {
            if (request.readyState !== 4) {
                return;
            } else {
                console.log(request.status);
                console.log(request.statusText);
            }
        };

        request.send(body);

    }
};

export default requests;
