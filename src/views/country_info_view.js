const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function (container) {
  this.container = container;
}

CountryInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('AllCountries:country-object', (event) =>{
    const selectedCountry = event.detail;
    this.render(selectedCountry);
  })
}

CountryInfoView.prototype.render = function (country){
  this.container.innerHTML = '';

  const countryName =this.createTextElement('h2', country.name);
  this.container.appendChild(countryName);

  const countryHeader = this.createTextElement('h3', 'Region:');
  this.container.appendChild(countryHeader);

  const countryRegion = this.createTextElement('p', country.region);
  this.container.appendChild(countryRegion);

}

CountryInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
}

module.exports = CountryInfoView;
