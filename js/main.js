document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.toggle').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('close');
    document.querySelector('.links').classList.toggle('links-hidden');
  });
});
