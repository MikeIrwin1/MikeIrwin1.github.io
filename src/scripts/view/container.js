const tableSection = document.querySelector('#passenger-table');
const formContainer = document.querySelector('#form-container');
const form = document.querySelector('form');
const pageTitle = document.querySelector('.ds_page-header__title');
const successMessage = document.querySelector('nav');
const airlineSection = document.querySelector('#airline-details');
const airlineMeta = document.querySelector('.ds_page-header__metadata');
const header = document.querySelector('.ds_site-header');

const ContainerView = {
    showTable: () => {
        tableSection.classList.remove('fully-hidden');
        formContainer.classList.add('fully-hidden');
        form.classList.add('fully-hidden');
        successMessage.classList.add('fully-hidden');
        airlineSection.classList.add('fully-hidden');
        pageTitle.innerHTML = "Passenger list";
        history.pushState(null, null, '/dist/index.html');
    },

    showFormSuccess: () => {
        tableSection.classList.add('fully-hidden');
        formContainer.classList.remove('fully-hidden');
        form.classList.add('fully-hidden');
        successMessage.classList.remove('fully-hidden');
        airlineSection.classList.add('fully-hidden');
    },

    showForm: () => {
        tableSection.classList.add('fully-hidden');
        formContainer.classList.remove('fully-hidden');
        form.classList.remove('fully-hidden');
        successMessage.classList.add('fully-hidden');
        airlineSection.classList.add('fully-hidden');
        pageTitle.innerHTML= 'Edit passenger details';
    },

    showAirlineDetails: (airline) => {
        tableSection.classList.add('fully-hidden');
        formContainer.classList.add('fully-hidden');
        form.classList.add('fully-hidden');
        successMessage.classList.add('fully-hidden');
        airlineSection.classList.remove('fully-hidden');
        airlineMeta.classList.remove('fully-hidden');
        pageTitle.innerHTML= airline;
    }
}

export default ContainerView;