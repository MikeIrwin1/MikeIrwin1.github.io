import requests from '../helpers/request.js';
import pubsub from '../helpers/pubsub.js';
import sortOrder from '../helpers/sortorder.js';

const Passengers = function () {
    this.data;
}

Passengers.prototype.bindEvents = function () {
    pubsub.subscribe('Form:passenger-edit-confirm', (event) => {
        this.editPassenger(event.detail);
    });
    pubsub.subscribe('Form:return-to-list', (event) => {
        this.getData();
    });

    this.getData();
}

Passengers.prototype.getData = function () {
    requests.getData("https://api.instantwebtools.net/v1/passenger?page=0&size=50")
        .then( (data) => {
            const passengersObject = JSON.parse(data.response);
            this.data = passengersObject;
            this.sortData();
            pubsub.publish('Passengers:data-loaded', this.data);
        })
}

Passengers.prototype.sortData = function () {
    this.data.data.sort(sortOrder("name"));
}

Passengers.prototype.editPassenger = function (payload) {
    const id = payload.id;
    const url = `https://api.instantwebtools.net/v1/passenger/${id}`;

    requests.put(payload, url);
}

export default Passengers;
