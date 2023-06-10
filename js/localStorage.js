// Obtén una referencia al div que contiene la tarjeta de noticias
const divTarjeta = document.querySelector('.card');

// Agrega un evento de click al ícono de estrella
const iconoFavorito = divTarjeta.querySelectorAll('.fa-star');
iconoFavorito.addEventListener('click', function () {
  // Obtén la información de la tarjeta de noticias correspondiente
  const titulo = divTarjeta.querySelector('.title').textContent;
  const descripcion = divTarjeta.querySelector('.description').textContent;
  const imagenSrc = divTarjeta.querySelector('.image').getAttribute('src');
  const enlace = divTarjeta.querySelector('.url').getAttribute('href');

  // Crea un objeto para representar la noticia favorita
  const noticiaFavorita = {
    titulo: titulo,
    descripcion: descripcion,
    imagenSrc: imagenSrc,
    enlace: enlace
  };

  // Guarda o elimina la noticia favorita
  toggleNoticiaFavorita(noticiaFavorita);

  // Actualiza la apariencia del ícono de estrella
  this.classList.toggle('favorito');
});

const cargarNoticiasFavoritas = () => {
  const noticias = localStorage.getItem('noticiasFavoritas');
  if (noticias) {
    return JSON.parse(noticias);
  }
  return [];
};

const toggleNoticiaFavorita = (noticia) => {
  // Obtén las noticias favoritas existentes del localStorage
  const noticiasFavoritas = cargarNoticiasFavoritas();

  // Verifica si la noticia ya está en la lista de favoritos
  const indiceNoticia = noticiasFavoritas.findIndex((favorita) => {
    return favorita.titulo === noticia.titulo;
  });

  if (indiceNoticia === -1) {
    // Si la noticia no está en la lista, agrégala
    noticiasFavoritas.push(noticia);
  } else {
    // Si la noticia ya está en la lista, elimínala
    noticiasFavoritas.splice(indiceNoticia, 1);
  }

  // Guarda las noticias favoritas actualizadas en el localStorage
  guardarNoticiasFavoritas(noticiasFavoritas);
};

const guardarNoticiasFavoritas = (noticias) => {
  localStorage.setItem('noticiasFavoritas', JSON.stringify(noticias));
};

const noticiasFavoritas = cargarNoticiasFavoritas();
console.log(noticiasFavoritas);


noticiasFavoritas.forEach((divHTML) => {

  const divTemporal = documen.createElement('div');
  divTemporal.innerHTML = divHTML;

  const contenedorFavoritos = document.getElementById("section__news-card-container")
  contenedorFavoritos.appendChild(divTemporal);

})