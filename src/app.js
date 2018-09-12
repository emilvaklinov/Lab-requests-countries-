const SelectedCountryView = require('./views/selected_country_view.js');
const AllCountries = require('./models/all_countries.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const allCountries = new AllCountries();
  allCountries.bindEvents();
  allCountries.getData();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectedCountryView(selectElement);
  countryDropdown.bindEvents();

  const countryInfoContainer = document.querySelector('div#country');
  const countryInfoView = new CountryInfoView(countryInfoContainer);
  countryInfoView.bindEvents();


});
