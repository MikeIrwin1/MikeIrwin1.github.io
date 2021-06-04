import Passengers from './scripts/model/passengers.js';
import TableView from './scripts/view/table.js';
import FormView from './scripts/view/form.js';
import Airline from './scripts/view/airline.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');
    const passengers = new Passengers();
    passengers.bindEvents();

    const content = document.querySelector('#passenger-table');
    const table = new TableView(content);
    table.bindEvents();

    const formContainer = document.querySelector('form');
    const form = new FormView(formContainer);
    form.bindEvents();

    const airlineContainer = document.querySelector('#airline-details');
    const airline = new Airline(airlineContainer);
    airline.bindEvents();
});
