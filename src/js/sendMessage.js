const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwQJV0ic1ptW06TIzIxikGdV31TRywq7EYJijeoH69_hGVfkaVAsMx7xEEK2OILh7bK9A/exec';
const token = 'AKfycbwQJV0ic1ptW06TIzIxikGdV31TRywq7EYJijeoH69_hGVfkaVAsMx7xEEK2OILh7bK9A'

const sendMessage = async (data) => {
  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'cors',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
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
