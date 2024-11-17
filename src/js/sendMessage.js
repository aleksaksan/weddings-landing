const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbzMPTRSB9XoL4_8B-LrV93py-dxV2x3bpp3Ndp3NnSfDTIAzmbv9TXWTYRe-Nvl0akrrg/exec';

const sendMessage = async (data) => {
  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
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

//TODO сделать радио кнопки:
// "я точно буду!" "извините не получится!"

//какие напитки предпочитаете?
//смотри formTODO
