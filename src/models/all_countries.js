const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')

const AllCountries = function(){
  this.data = null;
}

AllCountries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data;
    PubSub.publish('AllCountries:country-list', this.data);
  })
}

AllCountries.prototype.bindEvents = function (){
  PubSub.subscribe('SelectedCountry:selected-country', event => {
    const selectedIndex = event.detail;
    const selectedCountry = this.data[selectedIndex];

    PubSub.publish('AllCountries:country-object', selectedCountry);
  })
}

module.exports = AllCountries;
