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
        tableSection.setAttribute('aria-hidden', 'false');
        tableSection.classList.remove('fully-hidden');
        
        formContainer.classList.add('fully-hidden');
        formContainer.setAttribute('aria-hidden', 'true');

        form.classList.add('fully-hidden');
        form.setAttribute('aria-hidden', 'true');
        
        successMessage.classList.add('fully-hidden');
        successMessage.setAttribute('aria-hidden', 'true');
        
        airlineSection.classList.add('fully-hidden');
        airlineSection.setAttribute('aria-hidden', 'true');

        pageTitle.innerHTML = "Passenger list";
    },

    showFormSuccess: () => {
        tableSection.setAttribute('aria-hidden', 'true');
        tableSection.classList.add('fully-hidden');

        formContainer.classList.remove('fully-hidden');
        formContainer.setAttribute('aria-hidden', 'false');

        form.classList.add('fully-hidden');
        form.setAttribute('aria-hidden', 'true');

        successMessage.classList.remove('fully-hidden');
        successMessage.setAttribute('aria-hidden', 'false');

        airlineSection.classList.add('fully-hidden');
        airlineSection.setAttribute('aria-hidden', 'true');
    },

    showForm: () => {
        tableSection.setAttribute('aria-hidden', 'true');
        tableSection.classList.add('fully-hidden');


        formContainer.classList.remove('fully-hidden');
        formContainer.setAttribute('aria-hidden', 'false');

        form.classList.remove('fully-hidden');
        form.setAttribute('aria-hidden', 'false');

        successMessage.classList.add('fully-hidden');
        successMessage.setAttribute('aria-hidden', 'true');

        airlineSection.classList.add('fully-hidden');
        airlineSection.setAttribute('aria-hidden', 'true');
        pageTitle.innerHTML= 'Edit passenger details';
    },

    showAirlineDetails: (airline) => {
        tableSection.setAttribute('aria-hidden', 'true');
        tableSection.classList.add('fully-hidden');

        formContainer.classList.add('fully-hidden');
        formContainer.setAttribute('aria-hidden', 'true');

        form.classList.add('fully-hidden');
        form.setAttribute('aria-hidden', 'true');

        successMessage.classList.add('fully-hidden');
        successMessage.setAttribute('aria-hidden', 'true');

        airlineSection.classList.remove('fully-hidden');
        airlineSection.setAttribute('aria-hidden', 'false');

        airlineMeta.classList.remove('fully-hidden');
        airlineSection.setAttribute('aria-hidden', 'false');
        pageTitle.innerHTML= airline;
    }
}

export default ContainerView;