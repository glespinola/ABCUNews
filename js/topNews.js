import { fetchArticles } from '../API/API.js';
function adjustTextSize(element) {
  const containerHeight = element.clientHeight;
  let fontSize = parseInt(window.getComputedStyle(element).fontSize);

  while (element.scrollHeight > containerHeight) {
    fontSize--;
    element.style.fontSize = fontSize + 'px';
  }
}

const mainContainerSports = document.getElementById('section__sports-card-container');
const cardContainerSports = mainContainerSports.querySelector('.section__sports-card');

fetchArticles(10, 'sports', 'es')
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
            class="url">Leer mas.</a>
        </div>
        <div class="star">
            <i class="fa-solid fa-star" title="Agregar a favoritos"></i>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainerSports.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
    });
  })
  .catch(err => {
    console.error(err);
  });
const mainContainerWorld = document.getElementById('section__world-card-container');
const cardContainerWorld = mainContainerWorld.querySelector('.section__world-card');

fetchArticles(10, 'world', 'es')
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
            class="url">Leer mas.</a>
        </div>
        <div class="star">
            <i class="fa-solid fa-star" title="Agregar a favoritos"></i>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainerWorld.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
    });
  })
  .catch(err => {
    console.error(err);
  });
const mainContainerPolicy = document.getElementById('section__policy-card-container');
const cardContainerPolicy = mainContainerPolicy.querySelector('.section__policy-card');

fetchArticles(10, 'nation', 'es')
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
            class="url">Leer mas.</a>
        </div>
        <div class="star">
            <i class="fa-solid fa-star" title="Agregar a favoritos"></i>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainerPolicy.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
    });
  })
  .catch(err => {
    console.error(err);
  });
const mainContainerBusinness = document.getElementById('section__economy-card-container');
const cardContainerBusinness = mainContainerBusinness.querySelector('.section__economy-card');

fetchArticles(10, 'nation', 'es')
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
            class="url">Leer mas.</a>
        </div>
        <div class="star">
            <i class="fa-solid fa-star" title="Agregar a favoritos"></i>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainerBusinness.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
    });
  })
  .catch(err => {
    console.error(err);
  });