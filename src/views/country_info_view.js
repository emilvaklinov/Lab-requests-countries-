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

  const countryFlag = document.createElement('img');
  countryFlag.src = country.flag;
  this.container.appendChild(countryFlag);

  const countryNameHeader = this.createTextElement('h3', 'Region:');
  this.container.appendChild(countryNameHeader);

  const countryRegion = this.createTextElement('p', country.region);
  this.container.appendChild(countryRegion);

  const countryLanguagesHeader = this.createTextElement('h3', 'Languages:');
  this.container.appendChild(countryLanguagesHeader);

  const countryLanguages = country.languages.forEach((language) => {
    const countryLanguage = this.createTextElement('p', language.name);
    this.container.appendChild(countryLanguage);
  })

  const countryCurrenyHeader = this.createTextElement('h3', 'Currencies:');
  this.container.appendChild(countryCurrenyHeader);

  const countryCurrencies = country.currencies.forEach((currency) => {
    const countryCurrency = this.createTextElement('p', currency.name);
    this.container.appendChild(countryCurrency);
  })

  const countryTranslationsHeader = this.createTextElement('h3', 'Translations:');
  this.container.appendChild(countryTranslationsHeader);

  for (translation in country.translations) {
    const translationParagraph = this.createTextElement('p', translation + ': ' + country.translations[translation]);
      this.container.appendChild(translationParagraph);
  }

}

CountryInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
}

module.exports = CountryInfoView;
