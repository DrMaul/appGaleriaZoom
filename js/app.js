let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('myModal');
const modalImage = document.querySelector('.modal-image');

function zoomImage(index) {
  const alturaPantalla = window.innerHeight;
  modal.style.display = 'block';
  modalImage.style.maxHeight = `${alturaPantalla}`
  modalImage.src = images[index].src;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex].src;
}

