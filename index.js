import { fetchArticles } from './API/API.js';

fetchArticles(3, 'world', 'es')
  .then(articles => {
    let html = '';
    const containers = document.querySelectorAll('.carrousel__item');

    containers.forEach((container, index) => {
      const article = articles[index];

      const element = document.createElement('div');
      element.classList.add('element');

      html = `
        <img class="carrousel__img" src="${article.image}" alt="${article.source.name}">
        <a class="carrousel__subtitulo" href="${article.url}" target="_blank">${article.title}.</a>
        <a class="carrousel__author" href="${article.source.url}" target="_blank">${article.source.name}</a>
      `;

      element.innerHTML = html;
      container.appendChild(element);
    });
  })
  .catch(err => {
    console.error(err);
  });

function adjustTextSize(element) {
  const containerHeight = element.clientHeight;
  let fontSize = parseInt(window.getComputedStyle(element).fontSize);

  while (element.scrollHeight > containerHeight) {
    fontSize--;
    element.style.fontSize = fontSize + 'px';
  }
}

const mainContainer = document.getElementById('main__container');
const cardContainer = mainContainer.querySelector('.main__card-container');

fetchArticles(10, 'general', 'es')
  .then(articles => {
    let html = '';

    articles.forEach(article => {
      const elementCard = document.createElement('div');
      elementCard.classList.add('card');

      html = `
        <div class="image-container">
          <img class="image"
            src="${article.image}"
            alt="Preview Image">
        </div>
        <div class="content">
          <h2 class="title">${article.title}</h2>
          <p class="description">${article.description}</p>
          <a href="${article.url}"
            target="_blank" rel="noopener"
            class="url">${article.url}</a>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainer.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');
      const urlElement = elementCard.querySelector('.url');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
      adjustTextSize(urlElement);
    });
  })
  .catch(err => {
    console.error(err);
  });
