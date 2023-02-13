import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkup(images) {
  return images
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");
}

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

galleryEl.addEventListener('click', event => {
  if (event.target.closest('.gallery__link')) event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}">
`)

  instance.show()
})