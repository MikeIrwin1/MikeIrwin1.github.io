import pubsub from '../helpers/pubsub.js';
import ContainerView from '../view/container.js';

const FormView = function (element) {
    this.element = element;
    this.passenger;
    this.airline;
}

FormView.prototype.bindEvents = function () {
    this.setEventHandlers();
    pubsub.subscribe('tablerow:edit-passenger-form', (event) => {
        this.passenger = event.detail;
        this.setFields(event.detail);
        ContainerView.showForm();
        // history.pushState(null, null, `/passenger/${this.passenger._id}/edit/`);
    })
    pubsub.subscribe('Passengers:airlines-data-loaded', (event) => {
        this.setAirlineDropdown(event.detail);
    })
}

FormView.prototype.setFields = function (passenger) {
    const nameInput = document.querySelector('#name');
    const tripsInput = document.querySelector('#trips');
    
    nameInput.setAttribute('value', passenger.name);
    tripsInput.setAttribute('value', passenger.trips);
}

FormView.prototype.setEventHandlers = function () {
    this.element.addEventListener('submit', (event) => {
        event.preventDefault();
        const formSubmission = this.handleFormSubmit(event.target);
        pubsub.publish('Form:passenger-edit-confirm', formSubmission);
        ContainerView.showFormSuccess();
        event.target.reset();
        // history.pushState(null, null, `/passenger/${this.passenger._id}`);
    })

    const cancelButton = document.querySelector('#passenger-edit-cancel');
    cancelButton.addEventListener('click', (event) => {
        ContainerView.showTable();
        // history.pushState(null, null, '/dist/index.html');
    })

    const returnButton = document.querySelector('#back-to-list');
    returnButton.addEventListener('click', (event) => {
        event.preventDefault();
        pubsub.publish('Form:return-to-list');
        ContainerView.showTable();
    })
}

FormView.prototype.handleFormSubmit = function (form) {
    const editedPassenger = {
        id: this.passenger._id,
        name: form.name.value,
        trips: form.trips.value,
        airline:form.airline.value
    }    

    return editedPassenger;
}

FormView.prototype.setAirlineDropdown = function(airlines){
    const select = document.querySelector('#airline');
    const passengerDefault = this.getAirlineID();
    
    airlines.forEach( (airline, index) => {
        const option = document.createElement('option');
        option.textContent = airline.name;
        option.value = airline.id;
        if (airline.id === passengerDefault) {
            option.setAttribute('selected', airline.id);
        }
        select.appendChild(option);
    })
}

FormView.prototype.getAirlineID = function () {
    if (this.passenger.airline.id) {
        return this.passenger.airline.id; 
    } else {
        return this.passenger.airline[0].id; 
    }
}

export default FormView;