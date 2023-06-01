let BTN = document.querySelector('#burger')
const NAV = document.querySelector('.header__nav')
const BTN_CTA = document.querySelector('.header__cta')


BTN.addEventListener('click', () => {
  NAV.classList.toggle('header__visible')
  BTN_CTA.classList.toggle('header__visible')
  BTN.classList.toggle("active-sandwich");
})

document.querySelectorAll('.carrousel').forEach(carrousel => {
  const items = carrousel.querySelectorAll('.carrousel__item');
  const btnHTML = Array.from(items, () => {
    return `<span class="carrousel__btn"></span>`;
  });

  carrousel.insertAdjacentHTML('beforeend', `
    <div class="carrousel__nav">
      ${btnHTML.join('')}
    </div>
  `);

  const buttons = carrousel.querySelectorAll('.carrousel__btn');
  let currentIndex = 0;

  const changeItem = (index) => {
    items.forEach(item => item.classList.remove('carrousel__item--selected'));
    buttons.forEach(button => button.classList.remove('carrousel__btn--selected'));

    items[index].classList.add('carrousel__item--selected');
    buttons[index].classList.add('carrousel__btn--selected');
  };

  const nextItem = () => {
    currentIndex = (currentIndex + 1) % items.length;
    changeItem(currentIndex);
  };

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      changeItem(i);
    });
  });

  items[0].classList.add('carrousel__item--selected');
  buttons[0].classList.add('carrousel__btn--selected');

  setInterval(nextItem, 10000);
});

