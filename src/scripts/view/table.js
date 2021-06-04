import PubSub from '../helpers/pubsub.js';

const TableView = function (container) {
  this.container = container;
}

TableView.prototype.bindEvents = function () {
  PubSub.subscribe('Passengers:passenger-data-loaded', (event) => {
    const data = event.detail.data;
    this.render(data);
  })
};

TableView.prototype.render = function (data) {
    this.setupTable();
    this.addPassengers(data);
};

TableView.prototype.setupTable = function () {
    const headingTitles = ["Name", "Trips", "Airline", "Action"];
    
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const head = document.createElement('thead');
    const headingRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    
    table.className = "ds_table";
    this.container.innerHTML = '';
    
    headingTitles.forEach( (heading) => {
        const title = document.createElement('th');
        title.innerText = heading;
        headingRow.appendChild(title);
    })

    caption.innerText = "Sorted passenger list";

    table.appendChild(head);
    table.appendChild(caption);
    head.appendChild(headingRow);
    table.appendChild(tableBody);

    this.container.appendChild(table);
};

TableView.prototype.addPassengers = function (passengerData) {
    const tableBody = document.querySelector('tbody');
    passengerData.forEach( (passenger, index) => {
        const tablerow = this.createRow(passenger, index+1);
        tableBody.appendChild(tablerow);
    })
};

TableView.prototype.createRow = function (passenger, index) {
    const tablerow = document.createElement('tr');
    const name = document.createElement('td');
    const trips = document.createElement('td');
    const airline = document.createElement('td');
    const action = document.createElement('td');
    
    
    const link = this.createAirlineLink(passenger.airline, index);
    
    name.innerText = passenger.name;
    name.id = `name-${index}`;
    
    trips.innerText = passenger.trips;
    trips.id = `trips-${index}`;

    airline.appendChild(link);
    tablerow.appendChild(name);
    tablerow.appendChild(trips);
    tablerow.appendChild(airline);
    tablerow.appendChild(action);
    
    const editButton = this.createEditButton(passenger, index);
    action.id = `action-${index}`;
    action.appendChild(editButton);
    return tablerow;
}

TableView.prototype.createEditButton = function (passenger, index) {
    const button = document.createElement('button');
    button.classList.add("ds_button", "ds_button--small", "ds_button--secondary");
    button.id = `edit-${index}`;
    button.type = 'button';
    button.innerText = 'Edit';

    button.addEventListener( 'click', (event) => {
        PubSub.publish('tablerow:edit-passenger-form', passenger);
    })
    return button;
}

TableView.prototype.createAirlineLink = function (airline, index) {
    const link = document.createElement('a');
    let airlineData;
    
    if(Array.isArray(airline)) {
        airlineData = airline[0];
    } else {
        airlineData = airline;
    }

    link.innerText = airlineData.name;
    link.href = `#!/airline/${airlineData.name}`;

    link.addEventListener( 'click', (event) => {
        PubSub.publish('tablerow:airline-clicked', airlineData);
    })

    return link;
}

export default TableView;
