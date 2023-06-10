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

let formInputs = document.querySelectorAll('.form input, .form textarea');
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('keyup', inputEvent);
  formInputs[i].addEventListener('blur', inputEvent);
  formInputs[i].addEventListener('focus', inputEvent);
}

function inputEvent(e) {
  let input = e.target,
    label = input.previousElementSibling;

  if (e.type === 'keyup') {
    if (input.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.add('active', 'highlight');
    }
  } else if (e.type === 'blur') {
    if (input.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.remove('highlight');
    }
  } else if (e.type === 'focus') {
    if (input.value === '') {
      label.classList.remove('highlight');
    } else {
      label.classList.add('highlight');
    }
  }
}

let tabLinks = document.querySelectorAll('.tab a');
for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', tabClickEvent);
}

function tabClickEvent(e) {
  e.preventDefault();

  let link = e.target,
    parent = link.parentNode,
    siblings = parent.parentNode.children,
    target = link.getAttribute('href');

  parent.classList.add('active');
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] !== parent) {
      siblings[i].classList.remove('active');
    }
  }

  let tabContents = document.querySelectorAll('.tab-content > div');
  for (let i = 0; i < tabContents.length; i++) {
    if (tabContents[i] !== target) {
      tabContents[i].style.display = 'none';
    }
  }

  document.querySelector(target).style.display = 'block';
}