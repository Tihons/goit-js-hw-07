import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
//console.log(galleryItems)
const markGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="galery__item"> 
        <a class = "image__link" href = "${original}">
    <img class = "gallery__image" src= "${preview}" 
    data-source ="${original}"
    alt = "${description}" 
     />
    </a>
    </li>`
  )
  .join('');
container.insertAdjacentHTML('beforeend', markGallery);
container.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const modalImg = evt.target.dataset.source;

  const modalOn = basicLightbox.create(`<img src="${modalImg}" width="800" height="600"/>`, {
    onShow: () => {
      document.addEventListener('keydown', OnEscClose);
    },
    onClose: () => {
      document.removeEventListener('keydown', OnEscClose);
    },
  });
  modalOn.show();
  function OnEscClose(evt) {
    if (evt.code === 'Escape') return modalOn.close();
  }
}