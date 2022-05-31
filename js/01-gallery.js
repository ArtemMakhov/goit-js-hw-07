import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createGalleryMarkup(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> 
    `
    })
        .join('');
};

const imageGalleryEl = document.querySelectorAll('.gallery__image');


imageGalleryEl.forEach(img => {
  img.addEventListener('click', onOpenModalImage);
  });

function onOpenModalImage(evt) {
  evt.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" >`
  ).show();
  
};





