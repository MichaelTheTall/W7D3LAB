const SelectView = require("./views/select_view.js");


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();
});
