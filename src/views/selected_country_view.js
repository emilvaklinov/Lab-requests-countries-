const PubSub = require('../helpers/pub_sub.js')

const SelectedCountryView = function (element){
  this.element = element;
}

SelectedCountryView.prototype.bindEvents = function(){
  PubSub.subscribe('AllCountries:country-list', (event) => {
    console.log(event.detail);
    const allCountries = event.detail; //array of all countries
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    console.log(selectedIndex);
    PubSub.publish('SelectedCountry:selected-country', selectedIndex);
  });

}

SelectedCountryView.prototype.populate = function(allCountries) {
  allCountries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
}

module.exports = SelectedCountryView;
