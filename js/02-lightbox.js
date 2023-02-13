import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createMarkup(images) {
    return images
        .map(
            ({ original, preview, description }) =>
                `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");
}

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));



new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
