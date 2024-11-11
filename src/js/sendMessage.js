const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxRegZlpW6VAMIJwzTSIRV8b6kTcbU2s1YADoXJvHKQBjoN9VHJaRVNGA5JZR0hBL5b9Q/exec';
const token = 'AKfycbxRegZlpW6VAMIJwzTSIRV8b6kTcbU2s1YADoXJvHKQBjoN9VHJaRVNGA5JZR0hBL5b9Q'

const sendMessage = async (data) => {
  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'no-cors',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

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
