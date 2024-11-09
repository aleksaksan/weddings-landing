//creation link
const createButton = document.getElementById('create-btn');
const newGuest = document.getElementById('new-guest');

createButton.addEventListener('click', () => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  url.searchParams.append('name', newGuest.value);
  
  navigator.clipboard.writeText(url.toString())
  .then(() => {
    //TODO вставить в разметку текст с ссылкой
    console.log(url);
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
});

const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get('name');
if (name) {
  newGuest.style.display = "none";
  createButton.style.display = "none";
  const guest = document.getElementById('guest');
  guest.textContent = name;
}

console.log(urlParams)

