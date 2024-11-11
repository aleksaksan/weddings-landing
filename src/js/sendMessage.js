const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbz8GLu3lOyg2Mw5MvtEuVTd0Vm4d7B9kYhk5j9-Abfj3pViXPzuzZGZnQnzTgFQQa2vfg/exec';


const sendMessage = async (data) => {
  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Ошибка:', error);
  }
} 

const form = document.getElementById('send-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = document.getElementById('message').value;
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  const data = {
    name: name,
    isWill: true,
    message: message,
  };

  sendMessage(data);
});
