const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const info = evt.detail;
    // console.log(info);
    this.render(info);
  });
};

CountryInfoView.prototype.render = function(info){
  this.container.innerHTML = '';

  const infoHeader = document.createElement('h2');
  infoHeader.textContent = info.name;
  this.container.appendChild(infoHeader);

  const infoFlag = document.createElement('img');
  infoFlag.src = info.flag;
  infoFlag.alt = `The ${info.demonym} flag`
  this.container.appendChild(infoFlag);

  const infoRegion = document.createElement('p');
  infoRegion.textContent = `Region: ${info.region}`;
  this.container.appendChild(infoRegion);

  const infoLangHeader = document.createElement('h3');
  infoLangHeader.textContent = 'Languages:';
  this.container.appendChild(infoLangHeader);

  const infoLanguages = document.createElement('ul');
  info.languages.forEach((i) => {
    const list = document.createElement('li');
    list.textContent = i.name;
    infoLanguages.appendChild(list);
  })
  this.container.appendChild(infoLanguages);

};

module.exports = CountryInfoView;
