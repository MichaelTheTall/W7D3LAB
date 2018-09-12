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
  const infoContainer = document.querySelector('.infobox');
  infoContainer.innerHTML = '';

  const imgContainer = document.querySelector('.imgbox');
  imgContainer.innerHTML = '';

  const infoHeader = document.createElement('h2');
  if (info.name === info.nativeName) {
    infoHeader.textContent = info.name;
  } else {
    infoHeader.textContent = `${info.name} - ${info.nativeName}`;
  }
  infoContainer.appendChild(infoHeader);

  const infoFlag = document.createElement('img');
  infoFlag.src = info.flag;
  infoFlag.alt = `The ${info.demonym} flag`
  imgContainer.appendChild(infoFlag);

  const infoRegionHeader = document.createElement('h3');
  infoRegionHeader.textContent = 'Region:';
  infoContainer.appendChild(infoRegionHeader);

  const infoRegion = document.createElement('p');
  infoRegion.textContent = info.region;
  infoContainer.appendChild(infoRegion);

  const infoLangHeader = document.createElement('h3');
  infoLangHeader.textContent = 'Languages:';
  infoContainer.appendChild(infoLangHeader);

  const infoLanguages = document.createElement('ul');
  info.languages.forEach((i) => {
    const list = document.createElement('li');
    list.textContent = i.name;
    infoLanguages.appendChild(list);
  })
  infoContainer.appendChild(infoLanguages);

};

module.exports = CountryInfoView;
