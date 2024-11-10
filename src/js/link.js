//creation link
const createButton = document.getElementById('create-btn');
const newGuest = document.getElementById('new-guest');
const newGuestContainer = document.getElementById('new-guest-container');

createButton.addEventListener('click', () => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  url.searchParams.append('name', newGuest.value);
  
  const label = document.createElement('label');
  label.innerText = `Ссылка скопирована для ${newGuest.value}!`;
  
  navigator.clipboard.writeText(url.toString())
  .then(() => {
    newGuestContainer.appendChild(label);
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
});

const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get('name');
if (name) {
  newGuestContainer.style.display = "none";
  const guest = document.getElementById('guest');
  guest.textContent = name;
}

