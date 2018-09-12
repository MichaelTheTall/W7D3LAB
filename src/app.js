const SelectView = require("./views/select_view.js");
const Countries = require('./models/countries.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const countryInfoView = new CountryInfoView(countryContainer);
  countryInfoView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();

});

module.exports = Countries;
