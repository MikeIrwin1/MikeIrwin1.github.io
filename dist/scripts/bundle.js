/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_model_passengers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/model/passengers.js */ \"./src/scripts/model/passengers.js\");\n/* harmony import */ var _scripts_view_table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view/table.js */ \"./src/scripts/view/table.js\");\n/* harmony import */ var _scripts_view_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/view/form.js */ \"./src/scripts/view/form.js\");\n/* harmony import */ var _scripts_view_airline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/view/airline.js */ \"./src/scripts/view/airline.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('Javascript loaded');\r\n    const passengers = new _scripts_model_passengers_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    passengers.bindEvents();\r\n\r\n    const content = document.querySelector('#passenger-table');\r\n    const table = new _scripts_view_table_js__WEBPACK_IMPORTED_MODULE_1__.default(content);\r\n    table.bindEvents();\r\n\r\n    const formContainer = document.querySelector('form');\r\n    const form = new _scripts_view_form_js__WEBPACK_IMPORTED_MODULE_2__.default(formContainer);\r\n    form.bindEvents();\r\n\r\n    const airlineContainer = document.querySelector('#airline-details');\r\n    const airline = new _scripts_view_airline_js__WEBPACK_IMPORTED_MODULE_3__.default(airlineContainer);\r\n    airline.bindEvents();\r\n});\r\n\n\n//# sourceURL=webpack://fed-test-airline/./src/app.js?");

/***/ }),

/***/ "./src/scripts/helpers/pubsub.js":
/*!***************************************!*\
  !*** ./src/scripts/helpers/pubsub.js ***!
  \***************************************/
/***/ ((module) => {

eval("const PubSub = {\r\n    publish: function (channel, payload) {\r\n      const event = new CustomEvent(channel, {\r\n        detail: payload\r\n      });\r\n      document.dispatchEvent(event);\r\n    },\r\n  \r\n    subscribe: function (channel, callback) {\r\n      document.addEventListener(channel, callback);\r\n    }\r\n  };\r\n  \r\n  module.exports = PubSub;\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/helpers/pubsub.js?");

/***/ }),

/***/ "./src/scripts/helpers/request.js":
/*!****************************************!*\
  !*** ./src/scripts/helpers/request.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst requests = {    \r\n    getData: (url) => {\r\n        const request = new XMLHttpRequest();\r\n\r\n        return new Promise( (resolve, reject) => {\r\n            request.onreadystatechange = () => {\r\n                if (request.readyState !== 4) {\r\n                    return;\r\n                }\r\n\r\n                if (request.status >= 200 && request.status < 300) {\r\n                    resolve(request);\r\n                } else {\r\n                    reject({\r\n                        status: request.status,\r\n                        statusText: request.statusText\r\n                    });\r\n                }\r\n            };\r\n\r\n            request.open(\"GET\", url, true);\r\n            request.send();\r\n        });\r\n    },\r\n\r\n    put: (data, url) => {\r\n        const request = new XMLHttpRequest();\r\n        const body = JSON.stringify(data);\r\n\r\n        request.open(\"PUT\", url);\r\n\r\n        request.setRequestHeader(\"Content-Type\", \"application/json\");    \r\n        request.onreadystatechange = () => {\r\n            if (request.readyState !== 4) {\r\n                return;\r\n            } else {\r\n                console.log(request.status);\r\n                console.log(request.statusText);\r\n            }\r\n        };\r\n\r\n        request.send(body);\r\n\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requests);\r\n\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/helpers/request.js?");

/***/ }),

/***/ "./src/scripts/helpers/sortorder.js":
/*!******************************************!*\
  !*** ./src/scripts/helpers/sortorder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortOrder = function (prop){\r\n    return function(a,b){\r\n       if( a[prop] > b[prop]){\r\n           return 1;\r\n       }else if( a[prop] < b[prop] ){\r\n           return -1;\r\n       }\r\n       return 0;\r\n    }\r\n }\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortOrder);\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/helpers/sortorder.js?");

/***/ }),

/***/ "./src/scripts/model/passengers.js":
/*!*****************************************!*\
  !*** ./src/scripts/model/passengers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/request.js */ \"./src/scripts/helpers/request.js\");\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/pubsub.js */ \"./src/scripts/helpers/pubsub.js\");\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_sortorder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/sortorder.js */ \"./src/scripts/helpers/sortorder.js\");\n\r\n\r\n\r\n\r\nconst Passengers = function () {\r\n    this.data;\r\n}\r\n\r\nPassengers.prototype.bindEvents = function () {\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe('Form:passenger-edit-confirm', (event) => {\r\n        this.editPassenger(event.detail);\r\n    });\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe('Form:return-to-list', (event) => {\r\n        this.getPassengerData();\r\n    });\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe('tablerow:edit-passenger-form', (event) => {\r\n        this.getAirlineData();\r\n    });\r\n\r\n    this.getPassengerData();\r\n}\r\n\r\nPassengers.prototype.getPassengerData = function () {\r\n    _helpers_request_js__WEBPACK_IMPORTED_MODULE_0__.default.getData(\"https://api.instantwebtools.net/v1/passenger?page=0&size=50\")\r\n        .then( (data) => {\r\n            const passengersObject = JSON.parse(data.response);\r\n            this.data = passengersObject;\r\n            this.sortData();\r\n            _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish('Passengers:passenger-data-loaded', this.data);\r\n        })\r\n}\r\n\r\nPassengers.prototype.sortData = function () {\r\n    this.data.data.sort((0,_helpers_sortorder_js__WEBPACK_IMPORTED_MODULE_2__.default)(\"name\"));\r\n}\r\n\r\nPassengers.prototype.editPassenger = function (payload) {\r\n    const id = payload.id;\r\n    const url = `https://api.instantwebtools.net/v1/passenger/${id}`;\r\n\r\n    _helpers_request_js__WEBPACK_IMPORTED_MODULE_0__.default.put(payload, url);\r\n}\r\n\r\nPassengers.prototype.getAirlineData = function () {\r\n    _helpers_request_js__WEBPACK_IMPORTED_MODULE_0__.default.getData(\"https://api.instantwebtools.net/v1/airlines\")\r\n        .then( (data) => {\r\n            const airlinesObject = JSON.parse(data.response);\r\n            this.data = this.filterData(airlinesObject);\r\n            _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish('Passengers:airlines-data-loaded', this.data);\r\n        })\r\n}\r\n\r\nPassengers.prototype.filterData = function (airlines) {\r\n    let data = airlines.filter((airline) => {\r\n        return airline.id;\r\n    });\r\n\r\n    return data;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Passengers);\r\n\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/model/passengers.js?");

/***/ }),

/***/ "./src/scripts/view/airline.js":
/*!*************************************!*\
  !*** ./src/scripts/view/airline.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pubsub.js */ \"./src/scripts/helpers/pubsub.js\");\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/container.js */ \"./src/scripts/view/container.js\");\n\r\n\r\n\r\nconst AirlineView = function () {\r\n    this.airline;\r\n}\r\n\r\nAirlineView.prototype.bindEvents = function () {\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('tablerow:airline-clicked', (event) =>{\r\n        this.airline = event.detail;\r\n        _view_container_js__WEBPACK_IMPORTED_MODULE_1__.default.showAirlineDetails(this.airline.name);\r\n        this.setDetails();\r\n    })\r\n}\r\n\r\nAirlineView.prototype.setDetails = function () {\r\n    console.log(this.airline);\r\n    const slogan = document.querySelector('.ds_leader');\r\n    const banner = document.querySelector('#airline-details img');\r\n    const country = document.querySelector('.country');\r\n    const headquarters = document.querySelector('.headquarters');\r\n    const year = document.querySelector('.year');\r\n    const web = document.querySelector('.ds_metadata__value a');\r\n    \r\n    country.innerHTML = `Country of establishment: ${this.airline.country}`;\r\n    headquarters.innerHTML = `Location of headquarters: ${this.airline.head_quaters}`;\r\n    year.innerHTML = `Year founded: ${this.airline.established}`;\r\n    slogan.innerHTML = `\"${this.airline.slogan}\"`;\r\n    banner.src = this.airline.logo;\r\n    web.href = `https://${this.airline.website}`;\r\n    web.innerHTML = `https://${this.airline.website}`;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AirlineView);\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/view/airline.js?");

/***/ }),

/***/ "./src/scripts/view/container.js":
/*!***************************************!*\
  !*** ./src/scripts/view/container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tableSection = document.querySelector('#passenger-table');\r\nconst formContainer = document.querySelector('#form-container');\r\nconst form = document.querySelector('form');\r\nconst pageTitle = document.querySelector('.ds_page-header__title');\r\nconst successMessage = document.querySelector('nav');\r\nconst airlineSection = document.querySelector('#airline-details');\r\nconst airlineMeta = document.querySelector('.ds_page-header__metadata');\r\nconst header = document.querySelector('.ds_site-header');\r\n\r\nconst ContainerView = {\r\n    showTable: () => {\r\n        tableSection.setAttribute('aria-hidden', 'false');\r\n        tableSection.classList.remove('fully-hidden');\r\n        \r\n        formContainer.classList.add('fully-hidden');\r\n        formContainer.setAttribute('aria-hidden', 'true');\r\n\r\n        form.classList.add('fully-hidden');\r\n        form.setAttribute('aria-hidden', 'true');\r\n        \r\n        successMessage.classList.add('fully-hidden');\r\n        successMessage.setAttribute('aria-hidden', 'true');\r\n        \r\n        airlineSection.classList.add('fully-hidden');\r\n        airlineSection.setAttribute('aria-hidden', 'true');\r\n\r\n        pageTitle.innerHTML = \"Passenger list\";\r\n    },\r\n\r\n    showFormSuccess: () => {\r\n        tableSection.setAttribute('aria-hidden', 'true');\r\n        tableSection.classList.add('fully-hidden');\r\n\r\n        formContainer.classList.remove('fully-hidden');\r\n        formContainer.setAttribute('aria-hidden', 'false');\r\n\r\n        form.classList.add('fully-hidden');\r\n        form.setAttribute('aria-hidden', 'true');\r\n\r\n        successMessage.classList.remove('fully-hidden');\r\n        successMessage.setAttribute('aria-hidden', 'false');\r\n\r\n        airlineSection.classList.add('fully-hidden');\r\n        airlineSection.setAttribute('aria-hidden', 'true');\r\n    },\r\n\r\n    showForm: () => {\r\n        tableSection.setAttribute('aria-hidden', 'true');\r\n        tableSection.classList.add('fully-hidden');\r\n\r\n\r\n        formContainer.classList.remove('fully-hidden');\r\n        formContainer.setAttribute('aria-hidden', 'false');\r\n\r\n        form.classList.remove('fully-hidden');\r\n        form.setAttribute('aria-hidden', 'false');\r\n\r\n        successMessage.classList.add('fully-hidden');\r\n        successMessage.setAttribute('aria-hidden', 'true');\r\n\r\n        airlineSection.classList.add('fully-hidden');\r\n        airlineSection.setAttribute('aria-hidden', 'true');\r\n        pageTitle.innerHTML= 'Edit passenger details';\r\n    },\r\n\r\n    showAirlineDetails: (airline) => {\r\n        tableSection.setAttribute('aria-hidden', 'true');\r\n        tableSection.classList.add('fully-hidden');\r\n\r\n        formContainer.classList.add('fully-hidden');\r\n        formContainer.setAttribute('aria-hidden', 'true');\r\n\r\n        form.classList.add('fully-hidden');\r\n        form.setAttribute('aria-hidden', 'true');\r\n\r\n        successMessage.classList.add('fully-hidden');\r\n        successMessage.setAttribute('aria-hidden', 'true');\r\n\r\n        airlineSection.classList.remove('fully-hidden');\r\n        airlineSection.setAttribute('aria-hidden', 'false');\r\n\r\n        airlineMeta.classList.remove('fully-hidden');\r\n        airlineSection.setAttribute('aria-hidden', 'false');\r\n        pageTitle.innerHTML= airline;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerView);\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/view/container.js?");

/***/ }),

/***/ "./src/scripts/view/form.js":
/*!**********************************!*\
  !*** ./src/scripts/view/form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pubsub.js */ \"./src/scripts/helpers/pubsub.js\");\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/container.js */ \"./src/scripts/view/container.js\");\n\r\n\r\n\r\nconst FormView = function (element) {\r\n    this.element = element;\r\n    this.passenger;\r\n    this.airline;\r\n}\r\n\r\nFormView.prototype.bindEvents = function () {\r\n    this.setEventHandlers();\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('tablerow:edit-passenger-form', (event) => {\r\n        this.passenger = event.detail;\r\n        this.setFields(event.detail);\r\n        _view_container_js__WEBPACK_IMPORTED_MODULE_1__.default.showForm();\r\n        // history.pushState(null, null, `/passenger/${this.passenger._id}/edit/`);\r\n    })\r\n    _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('Passengers:airlines-data-loaded', (event) => {\r\n        this.setAirlineDropdown(event.detail);\r\n    })\r\n}\r\n\r\nFormView.prototype.setFields = function (passenger) {\r\n    const nameInput = document.querySelector('#name');\r\n    const tripsInput = document.querySelector('#trips');\r\n    \r\n    nameInput.setAttribute('value', passenger.name);\r\n    tripsInput.setAttribute('value', passenger.trips);\r\n}\r\n\r\nFormView.prototype.setEventHandlers = function () {\r\n    this.element.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n        const formSubmission = this.handleFormSubmit(event.target);\r\n        _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('Form:passenger-edit-confirm', formSubmission);\r\n        _view_container_js__WEBPACK_IMPORTED_MODULE_1__.default.showFormSuccess();\r\n        event.target.reset();\r\n        // history.pushState(null, null, `/passenger/${this.passenger._id}`);\r\n    })\r\n\r\n    const cancelButton = document.querySelector('#passenger-edit-cancel');\r\n    cancelButton.addEventListener('click', (event) => {\r\n        _view_container_js__WEBPACK_IMPORTED_MODULE_1__.default.showTable();\r\n        // history.pushState(null, null, '/dist/index.html');\r\n    })\r\n\r\n    const returnButton = document.querySelector('#back-to-list');\r\n    returnButton.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('Form:return-to-list');\r\n        _view_container_js__WEBPACK_IMPORTED_MODULE_1__.default.showTable();\r\n    })\r\n}\r\n\r\nFormView.prototype.handleFormSubmit = function (form) {\r\n    const editedPassenger = {\r\n        id: this.passenger._id,\r\n        name: form.name.value,\r\n        trips: form.trips.value,\r\n        airline:form.airline.value\r\n    }    \r\n\r\n    return editedPassenger;\r\n}\r\n\r\nFormView.prototype.setAirlineDropdown = function(airlines){\r\n    const select = document.querySelector('#airline');\r\n    const passengerDefault = this.getAirlineID();\r\n    \r\n    airlines.forEach( (airline, index) => {\r\n        const option = document.createElement('option');\r\n        option.textContent = airline.name;\r\n        option.value = airline.id;\r\n        if (airline.id === passengerDefault) {\r\n            option.setAttribute('selected', airline.id);\r\n        }\r\n        select.appendChild(option);\r\n    })\r\n}\r\n\r\nFormView.prototype.getAirlineID = function () {\r\n    if (this.passenger.airline.id) {\r\n        return this.passenger.airline.id; \r\n    } else {\r\n        return this.passenger.airline[0].id; \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormView);\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/view/form.js?");

/***/ }),

/***/ "./src/scripts/view/table.js":
/*!***********************************!*\
  !*** ./src/scripts/view/table.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pubsub.js */ \"./src/scripts/helpers/pubsub.js\");\n/* harmony import */ var _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst TableView = function (container) {\r\n  this.container = container;\r\n}\r\n\r\nTableView.prototype.bindEvents = function () {\r\n  _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('Passengers:passenger-data-loaded', (event) => {\r\n    const data = event.detail.data;\r\n    this.render(data);\r\n  })\r\n};\r\n\r\nTableView.prototype.render = function (data) {\r\n    this.setupTable();\r\n    this.addPassengers(data);\r\n};\r\n\r\nTableView.prototype.setupTable = function () {\r\n    const headingTitles = [\"Name\", \"Trips\", \"Airline\", \"Action\"];\r\n    \r\n    const table = document.createElement('table');\r\n    const caption = document.createElement('caption');\r\n    const head = document.createElement('thead');\r\n    const headingRow = document.createElement('tr');\r\n    const tableBody = document.createElement('tbody');\r\n    \r\n    table.className = \"ds_table\";\r\n    this.container.innerHTML = '';\r\n    \r\n    headingTitles.forEach( (heading) => {\r\n        const title = document.createElement('th');\r\n        title.innerText = heading;\r\n        headingRow.appendChild(title);\r\n    })\r\n\r\n    caption.innerText = \"Sorted passenger list\";\r\n\r\n    table.appendChild(head);\r\n    table.appendChild(caption);\r\n    head.appendChild(headingRow);\r\n    table.appendChild(tableBody);\r\n\r\n    this.container.appendChild(table);\r\n};\r\n\r\nTableView.prototype.addPassengers = function (passengerData) {\r\n    const tableBody = document.querySelector('tbody');\r\n    passengerData.forEach( (passenger, index) => {\r\n        const tablerow = this.createRow(passenger, index+1);\r\n        tableBody.appendChild(tablerow);\r\n    })\r\n};\r\n\r\nTableView.prototype.createRow = function (passenger, index) {\r\n    const tablerow = document.createElement('tr');\r\n    const name = document.createElement('td');\r\n    const trips = document.createElement('td');\r\n    const airline = document.createElement('td');\r\n    const action = document.createElement('td');\r\n    \r\n    \r\n    const link = this.createAirlineLink(passenger.airline, index);\r\n    \r\n    name.innerText = passenger.name;\r\n    name.id = `name-${index}`;\r\n    \r\n    trips.innerText = passenger.trips;\r\n    trips.id = `trips-${index}`;\r\n\r\n    airline.appendChild(link);\r\n    tablerow.appendChild(name);\r\n    tablerow.appendChild(trips);\r\n    tablerow.appendChild(airline);\r\n    tablerow.appendChild(action);\r\n    \r\n    const editButton = this.createEditButton(passenger, index);\r\n    action.id = `action-${index}`;\r\n    action.appendChild(editButton);\r\n    return tablerow;\r\n}\r\n\r\nTableView.prototype.createEditButton = function (passenger, index) {\r\n    const button = document.createElement('button');\r\n    button.classList.add(\"ds_button\", \"ds_button--small\", \"ds_button--secondary\");\r\n    button.id = `edit-${index}`;\r\n    button.type = 'button';\r\n    button.innerText = 'Edit';\r\n\r\n    button.addEventListener( 'click', (event) => {\r\n        _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('tablerow:edit-passenger-form', passenger);\r\n    })\r\n    return button;\r\n}\r\n\r\nTableView.prototype.createAirlineLink = function (airline, index) {\r\n    const link = document.createElement('a');\r\n    let airlineData;\r\n    \r\n    if(Array.isArray(airline)) {\r\n        airlineData = airline[0];\r\n    } else {\r\n        airlineData = airline;\r\n    }\r\n\r\n    link.innerText = airlineData.name;\r\n    link.href = `#!/airline/${airlineData.name}`;\r\n\r\n    link.addEventListener( 'click', (event) => {\r\n        _helpers_pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('tablerow:airline-clicked', airlineData);\r\n    })\r\n\r\n    return link;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableView);\r\n\n\n//# sourceURL=webpack://fed-test-airline/./src/scripts/view/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;