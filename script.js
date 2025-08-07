const bar = document.querySelector('.bar');
let width = 0;

let interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    mostrarSorpresa();
  } else {
    width++;
    bar.style.width = width + '%';
  }
}, 60);

// Corazones flotantes
const heartContainer = document.getElementById('heart-container');
const heartSound = document.getElementById('heart-sound');

function createHeart() {
  const heart = document.createElement('span');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';

  heart.addEventListener('click', () => {
    heartSound.currentTime = 0;
    heartSound.play();
  });

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

// Mostrar pantalla final
function mostrarSorpresa() {
  document.querySelector('.loader-container').style.display = 'none';
  document.getElementById('final-surprise').style.display = 'flex';
}

// Repetir animación
function repetirSorpresa() {
  document.getElementById('final-surprise').style.display = 'none';
  document.querySelector('.loader-container').style.display = 'block';
  width = 0;
  bar.style.width = '0%';

  interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      mostrarSorpresa();
    } else {
      width++;
      bar.style.width = width + '%';
    }
  }, 60);
}
