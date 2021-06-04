import pubsub from '../helpers/pubsub.js';
import ContainerView from '../view/container.js';

const AirlineView = function () {
    this.airline;
}

AirlineView.prototype.bindEvents = function () {
    pubsub.subscribe('tablerow:airline-clicked', (event) =>{
        this.airline = event.detail;
        ContainerView.showAirlineDetails(this.airline.name);
        this.setDetails();
    })
}

AirlineView.prototype.setDetails = function () {
    console.log(this.airline);
    const slogan = document.querySelector('.ds_leader');
    const banner = document.querySelector('#airline-details img');
    const country = document.querySelector('.country');
    const headquarters = document.querySelector('.headquarters');
    const year = document.querySelector('.year');
    const web = document.querySelector('.ds_metadata__value a');
    
    country.innerHTML = `Country of establishment: ${this.airline.country}`;
    headquarters.innerHTML = `Location of headquarters: ${this.airline.head_quaters}`;
    year.innerHTML = `Year founded: ${this.airline.established}`;
    slogan.innerHTML = `"${this.airline.slogan}"`;
    banner.src = this.airline.logo;
    web.href = `https://${this.airline.website}`;
    web.innerHTML = `https://${this.airline.website}`;
}

export default AirlineView;