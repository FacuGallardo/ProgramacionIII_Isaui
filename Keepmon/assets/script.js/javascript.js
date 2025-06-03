const musica = document.getElementById("musica-fondo");
const btnMusica = document.getElementById("toggle-musica");

// Estado actual
let musicaActiva = true;

btnMusica.addEventListener("click", () => {
  if (musicaActiva) {
    musica.pause();
    btnMusica.textContent = "🔇 Música OFF";
  } else {
    musica.play();
    btnMusica.textContent = "🔊 Música ON";
  }
  musicaActiva = !musicaActiva;
});
// Iniciar la música al cargar la página