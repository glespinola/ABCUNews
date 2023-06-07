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
            class="url">Leer mas.</a>
        </div>
        <div class="star">
            <i class="fa-solid fa-star" title="Agregar a favoritos"></i>
        </div>
      `;

      elementCard.innerHTML = html;
      cardContainer.appendChild(elementCard);

      const titleElement = elementCard.querySelector('.title');
      const descriptionElement = elementCard.querySelector('.description');

      adjustTextSize(titleElement);
      adjustTextSize(descriptionElement);
    });
  })
  .catch(err => {
    console.error(err);
  });


let articleContainer = document.querySelector('.article__container');

articleContainer.addEventListener('click', (e) => {
  let targetElement = e.target.closest('.article__categorias');
  if (targetElement) {
    let dataText = targetElement.getAttribute('data-text');
    let urlText = '';

    switch (dataText) {
      case 'Política':
        urlText = './pages/policy.html'
        break;
      case 'Deportes':
        urlText = './pages/sports.html'
        break;
      case 'Economía':
        urlText = './pages/economy.html'
        break;
      case 'Mundo':
        urlText = './pages/world.html'
        break;
    }
    window.location.href = urlText;
  }
})
