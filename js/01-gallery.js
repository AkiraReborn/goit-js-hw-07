import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
       
        `;
    })
    .join("");
};

galleryItemsContainer.addEventListener("click", onClick);

function onClick(evt) {
  blockAction(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const popUpCreator = basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`);

  popUpCreator.show();

  galleryItemsContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      popUpCreator.close();
    }
  });
};

function blockAction(evt) {
  evt.preventDefault();
}
