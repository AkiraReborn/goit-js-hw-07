import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryItemsContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
         
          `;
      })
      .join("");
  };

  galleryItemsContainer.addEventListener("click", onClick);

  function onClick (evt) {
    blockAction(evt);
    if (evt.target.nodeName !== "IMG") {
        return;
      }

      const lightbox = new SimpleLightbox('.gallery a',{
        captionsData : 'alt',
        captionDelay : 250,
      });

  };


  function blockAction(evt) {
    evt.preventDefault();
  };
