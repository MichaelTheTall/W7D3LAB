const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function () {
  this.data = null;
}

Countries.prototype.bindEvents = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data;
    // console.log(data);
    PubSub.publish('Countries:all-countries-ready', data);
  });
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    const selectedCountry = this.data[selectedIndex]
    PubSub.publish('Countries:selected-country-ready', selectedCountry);
    // console.log(selectedCountry);

  });
};

module.exports = Countries;
