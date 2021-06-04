import pubsub from '../helpers/pubsub.js';
import ContainerView from '../view/container.js';

const FormView = function (element) {
    this.element = element;
    this.passenger;
}

FormView.prototype.bindEvents = function () {
    this.setEventHandlers();
    pubsub.subscribe('tablerow:edit-passenger-form', (event) => {
        this.passenger = event.detail;
        this.setFields(event.detail);
        ContainerView.showForm();
        // history.pushState(null, null, `/passenger/${this.passenger._id}/edit/`);
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
    }    
    
    if (this.passenger.airline.id) {
        editedPassenger.airline = this.passenger.airline.id; 
    } else {
        editedPassenger.airline = this.passenger.airline[0].id; 
    }

    return editedPassenger;
}

export default FormView;