document.addEventListener('DOMContentLoaded', () => {
  console.log('done');
  document.querySelector('.toggle').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('close');
    document.querySelector('.links').classList.toggle('links-hidden');
  });

  const filters = document.querySelector('#filters');
  const gallery = document.querySelector('#gallery');
  const modal = document.querySelector('#modal');
  const closeModal = document.querySelector('#close-modal');

  const filterImages = (filter) => {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach((image) => {
      if (image.dataset.category !== filter && filter !== 'all') {
        image.classList.add('image-hidden');
        image.classList.remove('image-show');
      } else {
        image.classList.remove('image-hidden');
        image.classList.add('image-show');
      }
    });
  };

  const showModal = (e) => {
    const imageId = e.target.dataset.id;
    const modalImgs = document.querySelectorAll('.modal-image');
    modalImgs.forEach((img) => {
      if (img.dataset.id !== imageId) {
        img.classList.add('modal-image-hidden');
        img.classList.remove('modal-image-show');
      } else {
        img.classList.remove('modal-image-hidden');
        img.classList.add('modal-image-show');
      }
    });
    modal.style.display = 'block';
  };

  categories.forEach((element) => {
    const domElement = document.createElement('p');
    domElement.innerHTML = element.name;
    domElement.classList.add('filter-element');
    domElement.id = element.filter;
    domElement.addEventListener('click', (e) => filterImages(e.target.id));
    filters.appendChild(domElement);
  });

  images.forEach((element) => {
    const image = document.createElement('img');
    image.src = `images/${element.url}`;
    image.classList = 'gallery-image';
    image.dataset.category = element.category;
    image.dataset.id = element.id;
    image.addEventListener('click', (e) => showModal(e));
    gallery.appendChild(image);

    const modalImage = document.createElement('img');
    modalImage.src = `images/${element.url}`;
    modalImage.classList = 'modal-image modal-image-hidden';
    modalImage.dataset.id = element.id;
    modal.appendChild(modalImage);
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
