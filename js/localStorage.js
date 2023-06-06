let miForm = document.getElementById('registro')
console.log(miForm);
miForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
  miForm.reset();
})