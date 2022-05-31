import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" 
        
        />
        </a>
        `
        })
        .join('');
};

let gallery = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay:250 });
gallery.on('show.simplelightbox', function () {
    });